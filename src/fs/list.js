import { access, readdir } from 'fs/promises';
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const list1 = async () => {
  const src = __dirname + '/files';
  const isExistMsg = 'FS operation failed';
  try {
    const files2 = await readdir(src)
    files2.forEach(file => console.log(file))
  } catch (e){
    throw new Error(isExistMsg)
  }
}
list1()