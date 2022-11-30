import { mkdir, copyFile, readdir} from 'node:fs/promises';
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const copy = async () => {
  const source = join(__dirname, 'files')
  const destination = join(__dirname, 'files_copy')
  const existErrorMsg = 'FS operation failed'

  try {
    await mkdir(destination);
    const dirFiles = await readdir(source)

    for (const dirFile of dirFiles){
      await copyFile(`${source}/${dirFile}`, `${destination}/${dirFile}`)
    }
    console.log(' Files was copied');
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.error(existErrorMsg)
    } else {
      throw err
    }
  }
}


copy();