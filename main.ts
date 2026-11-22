import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry is a finished image bundled in this repository.
// Copy it, byte for byte, to the output path the grader reads.
// No network, no randomness: two runs write identical bytes.
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync("/output", { recursive: true });
copyFileSync(join(here, "entry.png"), "/output/entry.png");
