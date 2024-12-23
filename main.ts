import { readWordSearch } from "./wordSearch.ts";

if (import.meta.main) {
  const array = await readWordSearch("data/aoc_04.txt");
  let count = 0;

  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array.length; col++) {
      if (array[row][col] == "X") {
        // up
        if (
          row >= 3 && array[row - 1][col] == "M" &&
          array[row - 2][col] == "A" && array[row - 3][col] == "S"
        ) {
          count++;
        }
        // upper right
        if (
          row >= 3 && array[row - 1][col + 1] == "M" &&
          array[row - 2][col + 2] == "A" && array[row - 3][col + 3] == "S"
        ) {
          count++;
        }
        // right
        if (
          array[row][col + 1] == "M" && array[row][col + 2] == "A" &&
          array[row][col + 3] == "S"
        ) {
          count++;
        }
        // lower right
        if (
          row <= (array.length - 4) && array[row + 1][col + 1] == "M" &&
          array[row + 2][col + 2] == "A" && array[row + 3][col + 3] == "S"
        ) {
          count++;
        }
        // down
        if (
          row <= (array.length - 4) && array[row + 1][col] == "M" &&
          array[row + 2][col] == "A" && array[row + 3][col] == "S"
        ) {
          count++;
        }
        // lower left
        if (
          row <= (array.length - 4) && array[row + 1][col - 1] == "M" &&
          array[row + 2][col - 2] == "A" && array[row + 3][col - 3] == "S"
        ) {
          count++;
        }
        // left
        if (
          array[row][col - 1] == "M" && array[row][col - 2] == "A" &&
          array[row][col - 3] == "S"
        ) {
          count++;
        }
        // upper left
        if (
          row >= 3 && array[row - 1][col - 1] == "M" &&
          array[row - 2][col - 2] == "A" && array[row - 3][col - 3] == "S"
        ) {
          count++;
        }
      }
    }
  }

  console.log(count);
}
