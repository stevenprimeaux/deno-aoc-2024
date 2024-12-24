import { assertEquals } from "@std/assert";

import { countCrossedMAS, countXMAS, readWordSearch } from "./search.ts";

Deno.test(async function countXMASTest() {
  const array = await readWordSearch("data/aoc_04.txt");
  assertEquals(countXMAS(array), 2297);
});

Deno.test(async function countCrossedMASTest() {
  const array = await readWordSearch("data/aoc_04.txt");
  assertEquals(countCrossedMAS(array), 1745);
});
