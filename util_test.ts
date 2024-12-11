import { assertEquals } from "@std/assert";

import { arraysFromFile } from "./util.ts";

Deno.test(async function arraysFromFileTest() {
  assertEquals(await arraysFromFile("aoc_01_test.txt"), {
    array0: [58789, 27059, 86784],
    array1: [28882, 23721, 91527],
  });
});
