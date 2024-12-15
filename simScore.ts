export function simScore(array0: number[], array1: number[]): number {
  let score = 0;
  const map = new Map();

  array0.forEach((x) => {
    if (!map.has(x)) {
      map.set(x, 0);
      array1.forEach((y) => {
        if (y == x) {
          map.set(x, map.get(x) + 1);
        }
      });
      array1 = array1.filter((y) => y != x);
    }
    score += x * map.get(x);
  });

  return score;
}
