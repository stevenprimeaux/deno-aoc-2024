export default function isSafe(array: number[]): boolean {
  if (array[1] == array[0]) {
    return false;
  } else if (array[1] > array[0]) {
    return array.map((e, i, a) => e - a[i - 1]).slice(1).every(isGoodInc);
  } else {
    return array.map((e, i, a) => e - a[i - 1]).slice(1).every(isGoodDec);
  }
}

function isGoodInc(diff: number): boolean {
  return diff > 0 && diff < 4;
}

function isGoodDec(diff: number): boolean {
  return diff < 0 && diff > -4;
}
