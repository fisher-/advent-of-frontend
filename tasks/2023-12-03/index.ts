export interface Lokalizacja {
  x: number;
  y: number;
  z: number;
  czas: number;
}

export type MapaCzasoprzestrzenna = (
  x: number,
  y: number,
  z: number,
  czas: number
) => number;

export function znajdzWorek(
  locations: Lokalizacja[],
  map: MapaCzasoprzestrzenna
): Lokalizacja | null {
  const results: number[] = locations.map(({ x, y, z, czas }) =>
    map.apply(null, [x, y, z, czas])
  );
  const indexOfMaxValue: number = results.indexOf(Math.max(...results));
  return locations[indexOfMaxValue] || null;
}
