import { unlink } from 'node:fs/promises';
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const remove = async () => {
    const src = __dirname + '/files/ fileToRemove.txt';
    const isExistMsg = 'FS operation failed';
  try {
    await unlink(src);
    console.log('fileToRemove.txt removed!');
  } catch (e) {
    throw new Error(isExistMsg)
  }
};

await remove();