export function findCyclesBetweenLocations(graph: Record<string, string[]>): string[][] {
  const visited: Record<string, boolean> = {};
  const cycles: string[][] = [];

  const visit = (city: string, path: string[] = []) => {
    if (!graph[city]) {
      throw new Error('Invalid graph: missing nodes');
    }

    if (visited[city]) {
      if (path.includes(city)) {
        cycles.push([...path, city]);
      }
      return;
    }

    visited[city] = true;

    graph[city].forEach((nextCity) => visit(nextCity, [...path, city]));
  };

  Object.keys(graph).forEach(city => visit(city));

  return cycles;
}
