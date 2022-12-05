import {rename as giveNewName, access} from 'node:fs/promises';
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const rename = async () => {
   const name = __dirname + '/files/properFilename.md';
   const wrongName = __dirname + '/files/wrongFilename.txt';
   const isExists = 'FS operation failed';
   try {
     await giveNewName(wrongName, name);
   } catch (e) {
   throw new Error(isExists)
   }
}

await rename();