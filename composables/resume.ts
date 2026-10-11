// Räumliche Lage relativ zum Lebenslauf: dieselbe Zuordnung steuert die
// Timeline, den Seitenübergang und die gegenüberliegende Rücklink-Kante.
export const resumeSides = {
  hfgMaster: 'left',
  hfg: 'right',
  internship: 'left',
  bosch: 'right',
  kbsz: 'left',
  dtack: 'right',
} as const;

export type ResumeStation = keyof typeof resumeSides;

export function resumeSideForPath(path: string): 'left' | 'right' | null {
  const station = path.match(/^\/(?:de|en)\/cv\/([^/]+)\/?$/)?.[1];
  return station && Object.prototype.hasOwnProperty.call(resumeSides, station)
    ? resumeSides[station as ResumeStation]
    : null;
}
