import { assertEquals } from "@std/assert";
import { arraysFromFileRowsDelim } from "./util.ts";
import { sumMiddlesFixed, sumMiddlesOrdered } from "./arrayRules.ts";

Deno.test(async function sumMiddlesOrderedTest() {
  const queues = await arraysFromFileRowsDelim("data/aoc_05_queues.txt", ",");
  const rules = await arraysFromFileRowsDelim("data/aoc_05_rules.txt", "|");

  assertEquals(sumMiddlesOrdered(queues, rules), 5639);
});

Deno.test(async function sumMiddlesFixedTest() {
  const queues = await arraysFromFileRowsDelim("data/aoc_05_queues.txt", ",");
  const rules = await arraysFromFileRowsDelim("data/aoc_05_rules.txt", "|");

  assertEquals(sumMiddlesFixed(queues, rules), 5273);
});
