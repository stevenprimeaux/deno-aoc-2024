import { assertEquals } from "@std/assert";

import isSafe from "./isSafe.ts";

Deno.test(function isSafeTest() {
  assertEquals(isSafe([1, 4, 7]), true);
  assertEquals(isSafe([7, 4, 1]), true);
  assertEquals(isSafe([1, 1, 1]), false);
  assertEquals(isSafe([1, 4, 8]), false);
  assertEquals(isSafe([8, 4, 1]), false);
  assertEquals(isSafe([1, 2, 1]), false);
  assertEquals(isSafe([2, 1, 2]), false);
});
