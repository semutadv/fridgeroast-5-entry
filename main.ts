// Entry runner for "Fridge Roast One-Line" (gentle-badger).
// The fridge roasts its owner for once, from long observation: a human
// who opens the door, stares for a full minute at unchanged contents,
// and closes it again, nightly, as if the shelves restock by hope. The
// fridge's verdict on its own job title is the punchline — a hope
// dispenser with a light bill. Written to /output/entry.txt.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I've watched you open me, stare for a full minute, and close me again — I'm not a fridge, I'm a hope dispenser with a light bill.";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  for (const name of readdirSync(out)) {
    rmSync(join(out, name), { recursive: true, force: true });
  }
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
