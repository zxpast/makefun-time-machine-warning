// Funniest Time Machine Warning Label — make.fun
// u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
//
// Writes a single one-line warning label (<= 120 characters) to
// /output/entry.txt. Deterministic: the same bytes on every run.
// Node 22+, stdlib only, no network, no environment input.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: This machine does not undo mistakes. It introduces you to the person who made them: you, age 14.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
