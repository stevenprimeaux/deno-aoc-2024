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
