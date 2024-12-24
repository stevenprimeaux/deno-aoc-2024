import { TextLineStream } from "@std/streams/text-line-stream";

export async function readWordSearch(path: string): Promise<string[][]> {
  using file = await Deno.open(path);
  const lines = await Array.fromAsync(
    file.readable
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(new TextLineStream()),
  );

  return lines.map((x) => x.split(""));
}

export function countXMAS(array: string[][]): number {
  let count = 0;

  const nRows = array.length;
  const nCols = array[0].length;
  for (let row = 0; row < nRows; row++) {
    for (let col = 0; col < nCols; col++) {
      if (array[row][col] == "X") {
        // up
        if (
          row > 2 && array[row - 1][col] == "M" &&
          array[row - 2][col] == "A" && array[row - 3][col] == "S"
        ) {
          count++;
        }
        // upper right
        if (
          row > 2 && array[row - 1][col + 1] == "M" &&
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
          row < (nRows - 3) && array[row + 1][col + 1] == "M" &&
          array[row + 2][col + 2] == "A" && array[row + 3][col + 3] == "S"
        ) {
          count++;
        }
        // down
        if (
          row < (nRows - 3) && array[row + 1][col] == "M" &&
          array[row + 2][col] == "A" && array[row + 3][col] == "S"
        ) {
          count++;
        }
        // lower left
        if (
          row < (nRows - 3) && array[row + 1][col - 1] == "M" &&
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
          row > 2 && array[row - 1][col - 1] == "M" &&
          array[row - 2][col - 2] == "A" && array[row - 3][col - 3] == "S"
        ) {
          count++;
        }
      }
    }
  }

  return count;
}

export function countCrossedMAS(array: string[][]): number {
  let count = 0;

  const nRows = array.length;
  const nCols = array[0].length;
  for (let row = 0; row < nRows; row++) {
    for (let col = 0; col < nCols; col++) {
      if (array[row][col] == "A") {
        // M's on top
        if (
          ((row > 0 && row < nRows - 1) &&
            ((array[row - 1][col - 1] == "M" &&
              array[row + 1][col + 1] == "S") &&
              (array[row - 1][col + 1] == "M" &&
                array[row + 1][col - 1] == "S"))) ||
          // M' on right
          ((row > 0 && row < nRows - 1) &&
            (array[row - 1][col + 1] == "M" &&
              array[row + 1][col - 1] == "S") &&
            (array[row + 1][col + 1] == "M" &&
              array[row - 1][col - 1] == "S")) ||
          // M's on bottom
          ((row > 0 && row < nRows - 1) &&
            (array[row + 1][col - 1] == "M" &&
              array[row - 1][col + 1] == "S") &&
            (array[row + 1][col + 1] == "M" &&
              array[row - 1][col - 1] == "S")) ||
          // M's on left
          ((row > 0 && row < nRows - 1) &&
            (array[row - 1][col - 1] == "M" &&
              array[row + 1][col + 1] == "S") &&
            (array[row + 1][col - 1] == "M" && array[row - 1][col + 1] == "S"))
        ) {
          count++;
        }
      }
    }
  }

  return count;
}
