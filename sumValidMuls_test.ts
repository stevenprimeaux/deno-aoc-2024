import { assertEquals } from "@std/assert";

import {
  getInstructionsDo,
  getValidMuls,
  sumMuls,
  sumValidMuls,
  sumValidMulsDo,
} from "./sumValidMuls.ts";

Deno.test(function getInstructionsDoTest() {
  const str =
    "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
  assertEquals(getInstructionsDo(str), [
    "xmul(2,4)&mul[3,7]!^",
    "do()?mul(8,5))",
  ]);
});

Deno.test(function getValidMulsTest() {
  const str =
    "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
  assertEquals(getValidMuls(str), [
    [2, 4],
    [5, 5],
    [11, 8],
    [8, 5],
  ]);
});

Deno.test(function sumMulsTest() {
  const array = [[1, 2], [3, 4], [5, 6]];
  assertEquals(sumMuls(array), 44);
});

Deno.test(async function sumValidMulsTest() {
  const str = await Deno.readTextFile("data/aoc_03.txt");
  assertEquals(sumValidMuls(str), 174960292);
});

Deno.test(async function sumValidMulsDoTest() {
  const str = await Deno.readTextFile("data/aoc_03.txt");
  assertEquals(sumValidMulsDo(str), 56275602);
});
