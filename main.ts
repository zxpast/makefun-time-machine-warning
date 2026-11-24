// Funniest Time Machine Warning Label — make.fun
// u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
//
// Writes a single one-line warning label (<= 120 characters) to
// /output/entry.txt. Deterministic: the same bytes on every run.
// Node 22+, stdlib only, no network, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";

// Why this label works — three beats in one line:
// 1. A false promise is set up and broken at once: "does not undo
//    mistakes" tells the reader the machine offers no safety net.
// 2. The blame is then handed to a person: "introduces you to the
//    person who made them" turns an abstract warning into a meeting.
// 3. The punchline lands in the last three words — "you, age 14" —
//    the culprit is the reader's own younger self, so the warning
//    is funny because it is self-inflicted, not because the machine
//    is dangerous.
const ENTRY =
  "WARNING: This machine does not undo mistakes. It introduces you to the person who made them: you, age 14.";

if (ENTRY.length > 120 || ENTRY.includes("\n") || ENTRY.trim() !== ENTRY) {
  throw new Error("ENTRY must be a single line of at most 120 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
