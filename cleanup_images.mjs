import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const dir = 'public/images';
// Matches suffixes like -640.webp, -1024.avif, etc.
const generatedPattern = /-(640|768|1024|1280|1536|1920)\.(avif|webp)$/;

async function cleanup() {
    const files = await glob(`${dir}/**/*`);
    let count = 0;
    for (const file of files) {
        // Check if it's a file
        if (fs.lstatSync(file).isFile()) {
            if (generatedPattern.test(file)) {
                console.log(`Deleting generated: ${file}`);
                fs.unlinkSync(file);
                count++;
            }
        }
    }
    console.log(`Deleted ${count} generated files.`);
}
cleanup();
