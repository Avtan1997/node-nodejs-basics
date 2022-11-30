import {access, mkdir, copyFile, readdir} from 'node:fs/promises';
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const copy = async () => {
  const source = __dirname + '/files'
  const destination = __dirname + '/files_copy'
  const existMsg = 'FS operation failed'

  try {
    await mkdir(destination);
    const dirFiles = await readdir(source)
    await Promise.all(dirFiles.map(i => copyFile (`${source}/${i}`, `${destination}/${i}`)))
    console.log('source.txt was copied to destination.txt');
  } catch (err){
    throw new Error(existMsg);
  }
}
copy();