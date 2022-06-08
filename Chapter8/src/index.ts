import { readFile } from 'fs'
import { promisify } from 'util'
import './myfile'

let readFilePromise = promisify(readFile)

readFilePromise('./src/myfile.ts')
    .then(() => console.log('Success reading file',))
    .catch((error) => console.error('Error reading file', error))




