/**
 * Rendert die Projekt-Dokumentationen seitenweise als WebP fuer den
 * DocumentReader.
 *
 * Die Seitenbilder liegen bewusst nicht im Repo (mehrere hundert Dateien),
 * sondern entstehen vor `nuxt dev` und `nuxt build` aus den PDFs. Der Besucher
 * laedt so weiterhin nur die Seite, die er ansieht, statt einer 88-MB-PDF.
 *
 * mupdf und der WebP-Encoder laufen als WebAssembly: keine nativen
 * Abhaengigkeiten, die im Alpine-Image kompiliert werden muessten.
 *
 * Ein Dokument wird nur neu gerendert, wenn sich die PDF geaendert hat oder
 * Seiten fehlen. Die Pruefsummen liegen in node_modules/.cache, damit sie nicht
 * mit ausgeliefert werden. `npm run docs -- --force` rendert alles neu.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

import encode, { init } from "@jsquash/webp/encode.js";
import * as mupdf from "mupdf";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);

/**
 * Seitenzahl und Seitenverhaeltnis stehen am <DocumentReader> der jeweiligen
 * Projektseite. Breite in Pixeln: KAI ist quer, braucht also mehr.
 */
const DOCUMENTS = [
  { pdf: "public/docs/kai/kai-dokumentation-de.pdf", out: "public/docs/kai/pages/de", width: 1400 },
  { pdf: "public/docs/kai/kai-documentation-en.pdf", out: "public/docs/kai/pages/en", width: 1400 },
  { pdf: "public/docs/beacon/beacon-dokumentation-de.pdf", out: "public/docs/beacon/pages/de", width: 1200 },
];

const QUALITY = 78;
const CACHE = path.join(root, "node_modules/.cache/render-docs");

const force = process.argv.includes("--force");

// Der Encoder laedt sein WASM sonst per fetch(), das in Node keine file://-URLs
// kennt. Node >= 16.4 kann SIMD, die SIMD-Variante passt also immer.
await init(
  await WebAssembly.compile(
    fs.readFileSync(require.resolve("@jsquash/webp/codec/enc/webp_enc_simd.wasm"))
  )
);

/** Muss zu pageSrc() in components/DocumentReader.vue passen. */
const pageFile = (page) => `${String(page).padStart(3, "0")}.webp`;

/** mupdf liefert RGB, der Encoder erwartet RGBA. */
function toRgba(pixmap) {
  const rgb = pixmap.getPixels();
  const width = pixmap.getWidth();
  const height = pixmap.getHeight();
  const data = new Uint8ClampedArray(width * height * 4);
  for (let i = 0, j = 0; j < data.length; i += 3, j += 4) {
    data[j] = rgb[i];
    data[j + 1] = rgb[i + 1];
    data[j + 2] = rgb[i + 2];
    data[j + 3] = 255;
  }
  return { data, width, height };
}

async function renderDocument({ pdf, out, width }) {
  const source = path.join(root, pdf);
  const target = path.join(root, out);

  if (!fs.existsSync(source)) {
    console.warn(`  ${pdf} fehlt, übersprungen`);
    return;
  }

  const bytes = fs.readFileSync(source);
  const checksum = crypto.createHash("sha1").update(bytes).digest("hex");
  const stamp = path.join(CACHE, `${out.replaceAll("/", "_")}.json`);
  const previous = fs.existsSync(stamp) ? JSON.parse(fs.readFileSync(stamp, "utf8")) : null;
  if (
    !force &&
    previous?.checksum === checksum &&
    fs.existsSync(path.join(target, pageFile(previous.pages)))
  ) {
    console.log(`  ${out}: aktuell`);
    return;
  }

  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(target, { recursive: true });

  const doc = mupdf.Document.openDocument(bytes, "application/pdf");
  const count = doc.countPages();
  let written = 0;

  for (let i = 0; i < count; i += 1) {
    const page = doc.loadPage(i);
    const [x0, , x1] = page.getBounds();
    const zoom = width / (x1 - x0);
    const pixmap = page.toPixmap(mupdf.Matrix.scale(zoom, zoom), mupdf.ColorSpace.DeviceRGB, false, true);
    const webp = await encode(toRgba(pixmap), { quality: QUALITY });
    fs.writeFileSync(path.join(target, pageFile(i + 1)), Buffer.from(webp));
    written += webp.byteLength;
    pixmap.destroy();
    page.destroy();
  }
  doc.destroy();

  // Erst nach dem letzten Bild: ein abgebrochener Lauf wird beim naechsten Mal wiederholt.
  fs.mkdirSync(CACHE, { recursive: true });
  fs.writeFileSync(stamp, JSON.stringify({ checksum, pages: count }));
  console.log(`  ${out}: ${count} Seiten, ${(written / 1e6).toFixed(1)} MB`);
}

console.log("Dokumentationen rendern");
const started = Date.now();
for (const document of DOCUMENTS) await renderDocument(document);
console.log(`fertig in ${((Date.now() - started) / 1000).toFixed(1)} s`);
