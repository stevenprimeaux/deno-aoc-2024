import { assertEquals } from "@std/assert";

import { arraysFromFile, arraysFromFileRows } from "./util.ts";

Deno.test(async function arraysFromFileTest() {
  assertEquals(await arraysFromFile("aoc_01_test.txt"), {
    array0: [58789, 27059, 86784],
    array1: [28882, 23721, 91527],
  });
});

Deno.test(async function arraysFromFileRowsTest() {
  assertEquals(await arraysFromFileRows("aoc_02_test.txt"), [
    [69, 72, 75, 78, 80, 79],
    [40, 42, 43, 46, 47, 48, 49, 49],
    [57, 58, 59, 60, 64],
  ]);
});
