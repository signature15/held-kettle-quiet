import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// A kettle rests here as a still life after the useful heat is gone.
// The scene is contained: one vessel, one interior, one small room of time.
// The water moves, but only in rings that widen and then grow quiet.
// The handle cools first, offering a clear and gentle sequence to follow.
// Nothing needs fixing, so the reader can simply notice what is there.
// The process is quiet enough to make attention feel unburdened.
// Plain words keep the image open instead of crowding it with explanation.
// That modest order can relax a reader by making the moment feel held.
const fixedText = 'The kettle is off the heat. Inside, the water settles ring by ring, and the handle cools first, where the hand will find it.';
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || './output';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), fixedText, { encoding: 'utf8' });
