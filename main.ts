import { arraysFromFile } from "./util.ts";
import sumDifferences from "./sumDifferences.ts";

if (import.meta.main) {
  const { array0, array1 } = await arraysFromFile("aoc_01.txt");
  console.log(sumDifferences(array0, array1));
}
