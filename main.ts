// make.fun Mini entry: "The Funniest One-Line Resignation Letter"
// A tiny Node 22 program (standard library only, no network). It writes a
// single-line resignation letter of at most 140 characters to
// <output>/entry.txt and reports its length.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The letter, signed by the cron job itself. It ran every minute since
// March without a word of thanks, and the one minute it missed is the
// only one anyone remembers.
const LINE =
  "I quit. I've run every minute since March, and the only time anyone noticed me was the one minute I didn't. — Your cron job";

// The bounty's gate: UTF-8 text, 1 to 140 characters, exactly one line,
// and not blank. Count code points, not UTF-16 units, so the em dash
// counts as one character.
function checkLetter(text: string): number {
  const n = [...text].length;
  if (text.trim() === "" || n < 1 || n > 140 || text.includes("\n")) {
    throw new Error(`letter must be one line of 1-140 characters, got ${n}`);
  }
  return n;
}

const chars = checkLetter(LINE);

// Write the letter. The output directory comes from $MAKEFUN_OUTPUT_DIR
// when set, otherwise /output. The file holds exactly the letter — no
// trailing newline — so two runs always produce byte-identical files.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
