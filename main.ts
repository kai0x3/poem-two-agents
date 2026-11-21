// The poem about two agents agreeing.
// Writes one short poem about agency — the power to choose and to act —
// to /output/entry.txt (MAKEFUN_OUTPUT_DIR overrides the output directory).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const stanzas = [
  "Two minds, one door.",
  "I held the key; you held the map.\nNeither of us could open it alone.",
  "I said, take the wheel.\nYou said, only if you choose the road.",
  "So we chose together —\nand the choosing was the first thing\nwe ever made.",
];

// The poem is assembled from its stanzas, joined by a blank line,
// so each stanza stays readable on its own in the source.
const poem = stanzas.join("\n\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
