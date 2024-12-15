import { assertEquals } from "@std/assert";

import { arraysFromFileRows } from "./util.ts";

import { countIsSafe, isSafe } from "./countIsSafe.ts";

Deno.test(function isSafeTest() {
  assertEquals(isSafe([1, 4, 7]), true);
  assertEquals(isSafe([7, 4, 1]), true);
  assertEquals(isSafe([1, 1, 1]), false);
  assertEquals(isSafe([1, 4, 8]), false);
  assertEquals(isSafe([8, 4, 1]), false);
  assertEquals(isSafe([1, 2, 1]), false);
  assertEquals(isSafe([2, 1, 2]), false);
});

Deno.test(async function countIsSafeTest() {
  const array = await arraysFromFileRows("aoc_02.txt");
  assertEquals(countIsSafe(array), 246);
});
