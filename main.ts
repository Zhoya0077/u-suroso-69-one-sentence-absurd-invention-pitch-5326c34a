import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-sentence absurd invention pitch: a showerhead that refuses to
// fund your imaginary rematch, and only restores the water once you
// forgive the person you are arguing with in your head.
const entry =
  "A showerhead that pauses the water the moment you start rehearsing an argument you already lost, and only turns it back on once you forgive the person you are arguing with in your head.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
