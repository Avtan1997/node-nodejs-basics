//read.js - implement function that prints content of the fileToRead.txt into console
// (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import {isExists} from "../helpers/isExists.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const read = async () => {
  try {
    const path = join(__dirname, 'files', 'fileToRead.txt')
    const fileIsExist = await isExists(path)
    if (!fileIsExist){
      throw new Error('FS operation failed')
    }
    const contents = await readFile(path, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
};

await read();