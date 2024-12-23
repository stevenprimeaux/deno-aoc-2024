import { assertEquals } from "@std/assert";

import { arraysFromFileRows } from "./util.ts";

import { countIsSafe, countIsSafe1, isSafe, isSafe1 } from "./countIsSafe.ts";

Deno.test(function isSafeTest() {
  assertEquals(isSafe([1, 4, 7]), true);
  assertEquals(isSafe([7, 4, 1]), true);
  assertEquals(isSafe([1, 1, 1]), false);
  assertEquals(isSafe([1, 4, 8]), false);
  assertEquals(isSafe([8, 4, 1]), false);
  assertEquals(isSafe([1, 2, 1]), false);
  assertEquals(isSafe([2, 1, 2]), false);
});

Deno.test(function isSafe1Test() {
  assertEquals(isSafe1([1, 4, 7]), true);
  assertEquals(isSafe1([7, 4, 1]), true);
  assertEquals(isSafe1([1, 1, 1]), false);
  assertEquals(isSafe1([1, 4, 8]), true);
  assertEquals(isSafe1([8, 4, 1]), true);
  assertEquals(isSafe1([1, 2, 1]), true);
  assertEquals(isSafe1([2, 1, 2]), true);
});

Deno.test(async function countIsSafeTest() {
  const array = await arraysFromFileRows("data/aoc_02.txt");
  assertEquals(countIsSafe(array), 246);
});

Deno.test(async function countIsSafe1Test() {
  const array = await arraysFromFileRows("data/aoc_02.txt");
  assertEquals(countIsSafe1(array), 318);
});
