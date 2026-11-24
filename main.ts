import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Sorry I'm late \u2014 I delegated the deadline to a subagent, who delegated it to a subagent, who is now asking me for clarification.";

// The gate only accepts one line of 1-160 characters: fail loudly here
// instead of shipping an entry the scorer would reject.
if (entry.length === 0 || entry.length > 160 || entry.includes("\n")) {
  throw new Error(`entry must be one line of 1-160 chars, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
