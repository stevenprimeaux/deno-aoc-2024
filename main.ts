import { fixOrder, getMiddle, isOrdered } from "./arrayRules.ts";
import { arraysFromFileRowsDelim } from "./util.ts";

if (import.meta.main) {
  const queues = await arraysFromFileRowsDelim(
    "data/aoc_05_queues.txt",
    ",",
  );
  const rules = await arraysFromFileRowsDelim(
    "data/aoc_05_rules.txt",
    "|",
  );

  console.log(
    queues
      .filter((x) => !isOrdered(x, rules))
      .map((x) => fixOrder(x, rules))
      .map(getMiddle)
      .reduce((sum, element) => sum + element),
  );
}
