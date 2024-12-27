export function isOrdered(array: number[], rules: number[][]) {
  let index0;
  let index1;
  for (const rule of rules) {
    index0 = array.indexOf(rule[0]);
    index1 = array.indexOf(rule[1]);
    if (index0 > -1 && index1 > -1 && index0 > index1) {
      return false;
    }
  }

  return true;
}

export function getMiddle(array: number[]): number {
  return array[Math.floor(array.length / 2)];
}

export function findRules(queue: number[], rules: number[][]) {
  const relevantRules: number[][] = [];
  rules.forEach((x) => {
    if (queue.includes(x[0]) && queue.includes(x[1])) {
      relevantRules.push(x);
    }
  });

  return relevantRules;
}

export function fixOrder(queue: number[], rules: number[][]) {
  const relevantRules = findRules(queue, rules);
  let changes = 1;
  let index0;
  let index1;
  while (changes > 0) {
    changes = 0;
    for (const rule of relevantRules) {
      index0 = queue.indexOf(rule[0]);
      index1 = queue.indexOf(rule[1]);
      if (index0 > index1) {
        [queue[index0], queue[index1]] = [queue[index1], queue[index0]];
        changes++;
      }
    }
  }

  return queue;
}

export function sumMiddlesOrdered(
  queues: number[][],
  rules: number[][],
): number {
  return queues
    .filter((x) => isOrdered(x, rules))
    .map(getMiddle)
    .reduce((sum, element) => sum + element);
}

export function sumMiddlesFixed(
  queues: number[][],
  rules: number[][],
): number {
  return queues
    .filter((x) => !isOrdered(x, rules))
    .map((x) => fixOrder(x, rules))
    .map(getMiddle)
    .reduce((sum, element) => sum + element);
}
