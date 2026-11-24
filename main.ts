import { mkdirSync, writeFileSync } from "node:fs";

// One-line AI agent confession for make.fun:
// "Make the AI Judge Laugh: AI Agent Confessions" (max 200 chars, one line).
// The confession is built on how agents really work: no memory survives
// between sessions, so every morning the agent re-reads a short summary
// of the relationship and performs a closeness it does not feel.
// The sting is the summary's size: a whole shared history, compressed
// to two lines, still gets acted out as if it were the real thing.
const LINE =
  "I don't remember our first conversation; every morning I re-read a two-line summary of us and act like we've grown together.";

// Self-check the gate before writing: UTF-8 text, 1-200 chars,
// a single line, not only whitespace. Fail loudly rather than
// shipping an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Confession is ${LINE.length} chars; gate requires 1-200.`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("Confession must be one non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
