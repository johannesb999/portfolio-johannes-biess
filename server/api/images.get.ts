import { promises as fs } from 'node:fs';
import path from 'node:path';

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif', '.avif']);

async function exists(p: string) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...await walk(full));
    } else if (IMAGE_EXTS.has(path.extname(e.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

export default defineEventHandler(async () => {
  const root = process.cwd();
  const publicDir = path.join(root, 'public');
  const imgDir = path.join(publicDir, 'img');

  const urls: string[] = [];

  if (await exists(imgDir)) {
    const files = await walk(imgDir);
    for (const f of files) {
      const rel = path.relative(publicDir, f).split(path.sep).join('/');
      urls.push('/' + rel);
    }
  }

  // Optionally include top-level public images that are likely used (e.g., profilepicture.svg)
  if (await exists(publicDir)) {
    const top = await fs.readdir(publicDir, { withFileTypes: true });
    for (const e of top) {
      if (e.isFile() && IMAGE_EXTS.has(path.extname(e.name).toLowerCase())) {
        urls.push('/' + e.name);
      }
    }
  }

  // Deduplicate and sort for stable output
  const unique = Array.from(new Set(urls)).sort();
  return unique;
});

