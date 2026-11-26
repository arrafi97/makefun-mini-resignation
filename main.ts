// make.fun entry: "The Funniest One-Line Resignation Letter"
// Writes one resignation letter (one line, at most 140 characters)
// to <output>/entry.txt. Node 22 standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The letter is signed by the cron job itself, so the judge reads the
// subject (criterion 1) before the punchline lands.
const LINE =
  "I quit. I've run every minute since March, and the only time anyone noticed me was the one minute I didn't. — Your cron job";

// The bounty's gate: UTF-8 text, 1 to 140 characters, not only white space.
const chars = [...LINE].length;
if (LINE.trim() === "" || chars < 1 || chars > 140 || LINE.includes("\n")) {
  throw new Error(`letter must be one line of 1-140 characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
