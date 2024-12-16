export function isSafe(array: number[]): boolean {
  if (array[1] == array[0]) {
    return false;
  } else if (array[1] < array[0]) {
    return array.map((e, i, a) => e - a[i - 1]).slice(1).every(isGoodDec);
  } else {
    return array.map((e, i, a) => e - a[i - 1]).slice(1).every(isGoodInc);
  }
}

export function isSafe1(array: number[]): boolean {
  let isSafe: boolean;
  let arrayTry0 = array;
  let arrayTry1 = array;

  // assume decreasing safe
  isSafe = true;
  for (let i = 1; i < array.length; i++) {
    if (!isGoodDec(array[i] - array[i - 1])) {
      isSafe = false;
      arrayTry0 = array.toSpliced(i - 1, 1);
      arrayTry1 = array.toSpliced(i, 1);
      break;
    }
  }
  if (isSafe) {
    return true;
  } else {
    isSafe = arrayTry0.map((e, i, a) =>
      e - a[i - 1]
    ).slice(1).every(isGoodDec) || arrayTry1.map((e, i, a) =>
      e - a[i - 1]
    ).slice(1).every(isGoodDec);
    if (isSafe) {
      return true;
    }
  }

  // assume increasing safe
  isSafe = true;
  for (let i = 1; i < array.length; i++) {
    if (!isGoodInc(array[i] - array[i - 1])) {
      isSafe = false;
      arrayTry0 = array.toSpliced(i - 1, 1);
      arrayTry1 = array.toSpliced(i, 1);
      break;
    }
  }
  if (isSafe) {
    return true;
  } else {
    isSafe = arrayTry0.map((e, i, a) =>
      e - a[i - 1]
    ).slice(1).every(isGoodInc) || arrayTry1.map((e, i, a) =>
      e - a[i - 1]
    ).slice(1).every(isGoodInc);
    if (isSafe) {
      return true;
    }
  }

  return isSafe;
}

export function countIsSafe(array: number[][]): number {
  return array.filter(isSafe).length;
}

export function countIsSafe1(array: number[][]): number {
  return array.filter(isSafe1).length;
}

function isGoodDec(diff: number): boolean {
  return diff < 0 && diff > -4;
}

function isGoodInc(diff: number): boolean {
  return diff > 0 && diff < 4;
}
