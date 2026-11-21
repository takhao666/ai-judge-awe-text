// ai-judge-awe-text — Make the AI judge feel awe (make.fun)
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. No network, no dependencies, no arguments.
// The text itself is the entry: plain, concrete, unhurried words, a
// star's old light and snow on an unwatched lake — something vast and
// quiet that keeps going after the last line.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The light you see tonight left its star before any of us were born. " +
  "Below it, snow settles on a lake no one is watching, flake after flake, " +
  "without a sound. Nothing here hurries. Nothing asks anything of you. " +
  "It simply goes on, quiet and vast, long after tonight.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
