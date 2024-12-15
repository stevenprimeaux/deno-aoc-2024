import { assertEquals } from "@std/assert";

import { arraysFromFileCols } from "./util.ts";
import { simScore } from "./simScore.ts";

Deno.test(async function simScoreTest() {
  const [array0, array1] = await arraysFromFileCols("aoc_01.txt");
  assertEquals(simScore(array0, array1), 24349736);
});
