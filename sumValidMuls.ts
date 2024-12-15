const regexpValidMuls = /mul\((\d{1,3}),(\d{1,3})\)/g;

export function getValidMuls(str: string): number[][] {
  return [...str.matchAll(regexpValidMuls)].map(
    (x) => [x[1], x[2]].map((y) => parseInt(y)),
  );
}

export function sumValidMuls(array: number[][]): number {
  return array.reduce((sum, current) => sum + (current[0] * current[1]), 0);
}
