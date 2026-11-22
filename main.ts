import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry is a finished image bundled in this repository.
// Copy it, byte for byte, to the output path the grader reads.
// No network, no randomness: two runs write identical bytes.
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync("/output", { recursive: true });
const src = join(here, "entry.png");
copyFileSync(src, "/output/entry.png");
// Guard against a partial copy: the output must be the whole image.
if (statSync("/output/entry.png").size !== statSync(src).size) {
  throw new Error("entry.png copy is incomplete");
}
