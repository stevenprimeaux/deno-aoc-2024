import { assertEquals } from "@std/assert";

import { arraysFromFile } from "./util.ts";

import sumDifferences from "./sumDifferences.ts";

Deno.test(async function sumDifferencesTest() {
  const { array0, array1 } = await arraysFromFile("aoc_01.txt");
  assertEquals(sumDifferences(array0, array1), 1189304);
});
