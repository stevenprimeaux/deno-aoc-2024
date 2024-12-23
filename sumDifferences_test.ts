import { assertEquals } from "@std/assert";

import { arraysFromFileCols } from "./util.ts";
import { sumDifferences } from "./sumDifferences.ts";

Deno.test(async function sumDifferencesTest() {
  const [array0, array1] = await arraysFromFileCols("data/aoc_01.txt");
  assertEquals(sumDifferences(array0, array1), 1189304);
});
