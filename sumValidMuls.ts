const reInstruction = /^|do\(\)|don't\(\)|$/g;
const reInstructionDo = /^do\(\)/;
const reValidMuls = /mul\((\d{1,3}),(\d{1,3})\)/g;

export function getInstructionsDo(str: string): string[] {
  return [...str.matchAll(reInstruction)]
    .map((x) => x.index)
    .map((e, i, a) => [e, a[i + 1]])
    .map((x) => str.substring(x[0], x[1]))
    .filter((e, i) => reInstructionDo.test(e) || i == 0);
}

export function getValidMuls(str: string): number[][] {
  return [...str.matchAll(reValidMuls)]
    .map((x) => [x[1], x[2]].map((y) => parseInt(y)));
}

export function sumMuls(array: number[][]): number {
  return array.reduce((sum, current) => sum + (current[0] * current[1]), 0);
}

export function sumValidMuls(str: string): number {
  return sumMuls(getValidMuls(str));
}

export function sumValidMulsDo(str: string): number {
  return getInstructionsDo(str)
    .map(getValidMuls)
    .map(sumMuls)
    .reduce((sum, current) => sum + current);
}
