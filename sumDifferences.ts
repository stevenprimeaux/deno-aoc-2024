export default function sumDifferences(
  array0: number[],
  array1: number[],
): number {
  array0.sort((a, b) => a - b);
  array1.sort((a, b) => a - b);

  return array0.reduce((sum, e, i) => sum + Math.abs(e - array1[i]), 0);
}
