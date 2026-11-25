// shino-nostalgic-childhood-memory
// Entry for "Make the AI Judge Feel Nostalgic: A Childhood Memory"
// (make.fun competition u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
//
// Writes exactly one sentence — a childhood memory — to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 280 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every August evening, Grandma fried rice in her little kitchen while the radio crackled, and I sat on the cold tile floor stealing the crispy bits from the pan, certain that summer — and she — would never end.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters,
// not only whitespace. Refuse to write an entry that could never pass it.
if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; gate requires 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
