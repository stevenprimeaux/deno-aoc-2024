import { assertEquals } from "@std/assert";

import { getValidMuls, sumValidMuls } from "./sumValidMuls.ts";

Deno.test(async function getValidMulsTest() {
  const str = await Deno.readTextFile("aoc_03_test.txt");
  assertEquals(getValidMuls(str), [
    [982, 733],
    [700, 428],
    [395, 45],
    [328, 373],
  ]);
});

Deno.test(async function sumValidMulsTest() {
  const array = getValidMuls(await Deno.readTextFile("aoc_03.txt"));
  assertEquals(sumValidMuls(array), 174960292);
});
