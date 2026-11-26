// One Line to Your Younger Self — entry program (program/v1, Node 22).
//
// Writes a single line of English text to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace,
// a single line, no explanation, no second sentence.
//
// The line: an older self speaking straight to the younger one, drawn from
// a life actually lived — the mockery of broken English, reversed one day
// by a name the mocker cannot pronounce. Specific, one breath, a small
// turn at the end, and it stings a little.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Kid, the girl who laughed at your broken English will one day Google your name \u2014 and she won't know how to say it.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Self-check the gate before writing: 1-200 characters, a single line,
// not only whitespace. Fail loudly instead of ever writing an entry
// the gate would refuse.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, gate needs 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
