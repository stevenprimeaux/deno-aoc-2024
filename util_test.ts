import { assertEquals } from "@std/assert";

import { arraysFromFileCols, arraysFromFileRows } from "./util.ts";

Deno.test(async function arraysFromFileTest() {
  const array = await arraysFromFileCols("aoc_01_test.txt");
  assertEquals(array, [
    [58789, 27059, 86784],
    [28882, 23721, 91527],
  ]);
});

Deno.test(async function arraysFromFileRowsTest() {
  const array = await arraysFromFileRows("aoc_02_test.txt");
  assertEquals(array, [
    [69, 72, 75, 78, 80, 79],
    [40, 42, 43, 46, 47, 48, 49, 49],
    [57, 58, 59, 60, 64],
  ]);
});
