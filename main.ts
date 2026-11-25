// The Excuse That Almost Works — u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5
// Writes one excuse line to /output/entry.txt (./output/entry.txt locally).
// Node 22, no dependencies, no network.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The boiler broke and the engineer can't come till Thursday, the flat's freezing and I can't type.";

// Gate: 1–140 characters, at most 20 words. This line is 97 characters, 17 words.
const WORDS = LINE.trim().split(/\s+/).length;
if (LINE.length > 140 || WORDS > 20) {
  throw new Error(`Line fails the gate: ${LINE.length} chars, ${WORDS} words`);
}

// The grading sandbox provides /output; locally we fall back to ./output.
const outDir = existsSync("/output") ? "/output" : "output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
