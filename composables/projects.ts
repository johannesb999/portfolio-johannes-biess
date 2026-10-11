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
  description?: { de: string; en: string };
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
  { route: "trickyTowers", label: "TRICKYTOWERS", thumb: "/img/tt/tt (1).svg", description: { de: 'Ein räumliches Spiel mit Projektion und Gesten.', en: 'A spatial game using projection and gestures.' } },
  { route: "jumpStar", label: "JUMPSTAR", thumb: "/img/js/thumbnail.svg", description: { de: 'Sternendaten als interaktive Reise durch den Raum.', en: 'An interactive journey through stellar data.' } },
  { route: "drawingLight", label: "DRAWINGLIGHT", thumb: "/img/dl/thumbnail.svg", description: { de: 'Gesten werden zu mechanischer Lichtmalerei.', en: 'Gestures translated into mechanical light painting.' } },
];

/** Archivierte Arbeiten bleiben mit ihren Metadaten erhalten, sind aber nicht Teil der Navigation. */
export const archivedProjects: ProjectEntry[] = [
  { route: "simpleChat", label: "SIMPLECHAT", thumb: "/img/sc/thumbnail.svg" },
  { route: "portfolio", label: "THIS WEBSITE", thumb: "/img/po/thumbnail.svg" },
];

/** Route der Baustellen-Seite. Wird nie ausgeblendet — sie ist das Ziel der Weiterleitungen. */
export const constructionRoute = "construction";

/** Erste Station des Karussells; Ziel des PROJEKTE-Links auf der Startseite. */
export const entryProject = mainProjects[0].route;

/** Aktive Projektseiten, die in der lokalen Baustellenliste angeboten werden. */
export const visibleProjectRoutes: string[] = [
  ...mainProjects.map((p) => p.route),
  ...playgroundProjects.map((p) => p.route),
];

/** Projektseiten, die im Baustellen-Modus auf die Construction-Seite umleiten. */
export const hideableProjects: string[] = [
  ...visibleProjectRoutes,
  ...archivedProjects.map((p) => p.route),
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

/** Richtung eines direkten Projektwechsels, passend zu den Seitenlinks. */
export function projectNavigationSide(from: string, to: string): "left" | "right" | null {
  const fromNeighbours = projectNeighbours(from);
  if (fromNeighbours?.prev.route === to) return "left";
  if (fromNeighbours?.next.route === to) return "right";

  // Vom Playground aus fuehren Kacheln auch in die kleinere Projektkette.
  // Dort sind die Ruecklinks eindeutig; ihre Gegenrichtung gilt beim Einstieg.
  const toNeighbours = projectNeighbours(to);
  if (toNeighbours?.prev.route === from) return "right";
  if (toNeighbours?.next.route === from) return "left";

  return null;
}

/** Kacheln liegen räumlich unter ihrer gemeinsamen Playground-Übersicht. */
export function playgroundNavigationDirection(from: string, to: string): 'down' | 'up' | null {
  const isSmall = (name: string) => playgroundProjects.some((project) => project.route === name);
  if (from === 'playground' && isSmall(to)) return 'down';
  if (isSmall(from) && to === 'playground') return 'up';
  return null;
}
