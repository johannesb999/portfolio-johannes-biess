/**
 * Schützt den Projektbereich gegen KI-Verwertung.
 *
 * robots.txt und /.well-known/tdmrep.json sind Erklärungen — freiwillig zu
 * befolgen. Die nutzerausgelösten Abrufer (ChatGPT-User, Perplexity-User)
 * geben selbst an, robots.txt nicht anzuwenden, weil die Anfrage von einem
 * Menschen ausgeht. Deshalb hier zusätzlich eine harte Sperre.
 *
 * Bewusst ein Nitro-Plugin am `request`-Hook und keine Datei in
 * server/middleware/: Nitro beantwortet Dateien aus public/ über einen
 * Handler, der noch vor der Middleware liegt. Die Projektbilder und die
 * exportierten Doku-Seiten wären sonst ungeschützt geblieben.
 *
 * Grenze der Wirksamkeit: das filtert nach User-Agent. Ein Scraper, der sich
 * als Browser ausgibt, kommt durch. Vollständig ausschließen lässt sich das
 * nur, indem die Inhalte nicht öffentlich stehen.
 */

// Kleingeschriebene Teilstrings. Nur echte Crawler-Kennungen — die
// Steuer-Token (Google-Extended, Applebot-Extended) tauchen als User-Agent
// nie auf und stehen deshalb ausschließlich in der robots.txt.
const AI_USER_AGENTS = [
  "gptbot",
  "oai-searchbot",
  "chatgpt-user",
  "claudebot",
  "claude-searchbot",
  "claude-user",
  "anthropic-ai",
  "perplexitybot",
  "perplexity-user",
  "meta-externalagent",
  "meta-externalfetcher",
  "facebookbot",
  "ccbot",
  "bytespider",
  "amazonbot",
  "diffbot",
  "omgili",
  "imagesiftbot",
  "cohere-ai",
  "ai2bot",
  "timpibot",
  "applebot",
  "youbot",
  "petalbot",
  "dataforseobot",
  "semrushbot-ocob",
  "scrapy",
];

// Pfade, für die der Vorbehalt gilt
const RESERVED = [/^\/(de|en)\/project(\/|$)/, /^\/docs\/(kai|beacon)(\/|$)/, /^\/img(\/|$)/];

// Ausnahmen: sollen auffindbar bleiben, damit die Person gefunden wird
const EXEMPT = [/^\/img\/cv(\/|$)/];

const RESERVATION_NOTICE =
  "403 Forbidden\n\n" +
  "Text and data mining is reserved for this section of the site " +
  "(EU DSM Directive 2019/790 Art. 4(3), German Copyright Act s. 44b(3)).\n" +
  "See /.well-known/tdmrep.json and /robots.txt.\n";

function isReserved(path: string) {
  if (EXEMPT.some((re) => re.test(path))) return false;
  return RESERVED.some((re) => re.test(path));
}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("request", async (event) => {
    const path = event.path.split("?")[0];
    if (!isReserved(path)) return;

    // Deklarativer Hinweis für alle Abrufer, auch für Browser und Bildsuchen
    setResponseHeader(event, "X-Robots-Tag", "noai, noimageai, noarchive");

    const ua = (getRequestHeader(event, "user-agent") || "").toLowerCase();
    if (!ua || !AI_USER_AGENTS.some((bot) => ua.includes(bot))) return;

    setResponseStatus(event, 403);
    setResponseHeader(event, "content-type", "text/plain; charset=utf-8");
    await send(event, RESERVATION_NOTICE);
  });
});
