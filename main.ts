import { arraysFromFileRows } from "./util.ts";
import { countIsSafe } from "./isSafe.ts";

if (import.meta.main) {
  const array = await arraysFromFileRows("aoc_02.txt");
  console.log(countIsSafe(array));
}
