import { TextLineStream } from "@std/streams/text-line-stream";

export async function arraysFromFileCols(path: string): Promise<number[][]> {
  using file = await Deno.open(path);

  const lines = await Array.fromAsync(
    file.readable
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(new TextLineStream()),
  );

  const array0: number[] = new Array(lines.length).fill(0);
  const array1: number[] = new Array(lines.length).fill(0);

  lines.map((x) => x.split(/\s+/).map((y) => parseInt(y)))
    .forEach((e, i) => {
      array0[i] = e[0];
      array1[i] = e[1];
    });

  return [array0, array1];
}

export async function arraysFromFileRows(path: string): Promise<number[][]> {
  using file = await Deno.open(path);

  const lines = await Array.fromAsync(
    file.readable
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(new TextLineStream()),
  );

  return lines.map((x) => x.split(/\s+/).map((y) => parseInt(y)));
}
