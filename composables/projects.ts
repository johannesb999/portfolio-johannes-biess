// Einzige Quelle fuer die Projektstruktur. Wird von der App (Auto-Import) und
// von nuxt.config.ts (expliziter Import) gelesen, damit Karussell, Kacheln und
// die Weiterleitungen nicht auseinanderlaufen koennen.

export type ProjectEntry = {
  /** Dateiname der Seite unter pages/<locale>/project/ */
  route: string;
  /** Beschriftung der Karussell-Links */
  label: string;
  /** Vorschaubild fuer die Playground-Kacheln */
  thumb?: string;
};

/**
 * Hauptprojekte. Bilden das Karussell: die Links links/rechts auf den
 * Detailseiten laufen zyklisch durch diese Liste.
 */
export const mainProjects: ProjectEntry[] = [
  { route: "beacon", label: "BEACON" },
  { route: "kai", label: "KAI" },
  { route: "goEase", label: "GOEASE" },
  { route: "plantMonit", label: "PLANTMONIT" },
  { route: "playground", label: "PLAYGROUND" },
];

/**
 * Kleinere Arbeiten. Liegen als Kacheln auf der Playground-Seite und bilden
 * dort eine eigene Kette, die an beiden Enden zurueck zum Playground fuehrt —
 * man kann also nicht aus ihr herausfallen.
 */
export const playgroundProjects: ProjectEntry[] = [
  { route: "trickyTowers", label: "TRICKYTOWERS", thumb: "/img/tt/tt (1).svg" },
  { route: "jumpStar", label: "JUMPSTAR", thumb: "/img/js/thumbnail.svg" },
  { route: "simpleChat", label: "SIMPLECHAT", thumb: "/img/sc/thumbnail.svg" },
  { route: "drawingLight", label: "DRAWINGLIGHT", thumb: "/img/dl/thumbnail.svg" },
  { route: "portfolio", label: "THIS WEBSITE", thumb: "/img/po/thumbnail.svg" },
];

/** Route der Baustellen-Seite. Wird nie ausgeblendet — sie ist das Ziel der Weiterleitungen. */
export const constructionRoute = "construction";

/** Erste Station des Karussells; Ziel des PROJEKTE-Links auf der Startseite. */
export const entryProject = mainProjects[0].route;

/** Alle Projektseiten, die online ausgeblendet werden. */
export const hideableProjects: string[] = [
  ...mainProjects.map((p) => p.route),
  ...playgroundProjects.map((p) => p.route),
];

/**
 * Nachbarn im Karussell. Hauptprojekte laufen im Kreis; bei den kleineren
 * Arbeiten steht an beiden Enden der Playground.
 */
export function projectNeighbours(current: string): { prev: ProjectEntry; next: ProjectEntry } | null {
  const playground = mainProjects.find((p) => p.route === "playground")!;

  const mainIdx = mainProjects.findIndex((p) => p.route === current);
  if (mainIdx !== -1) {
    return {
      prev: mainProjects[(mainIdx - 1 + mainProjects.length) % mainProjects.length],
      next: mainProjects[(mainIdx + 1) % mainProjects.length],
    };
  }

  const smallIdx = playgroundProjects.findIndex((p) => p.route === current);
  if (smallIdx !== -1) {
    return {
      prev: playgroundProjects[smallIdx - 1] ?? playground,
      next: playgroundProjects[smallIdx + 1] ?? playground,
    };
  }

  return null;
}
