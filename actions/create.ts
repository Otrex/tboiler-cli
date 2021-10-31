import { exec } from 'child_process'
import fs from 'fs'
import { promisify } from 'util'
import config from '../config'

const run = promisify(exec)

export const createFile = (fileName: any, options: {[key: string]: any} = {}) => {
  console.log('Creating Folder...')
  console.log(options)
  run(`git clone ${config[options.type].node.backend.repo}`).then(() => {
    fs.rename(config[options.type].node.backend.name, fileName, (err) => {
      if(err) throw err;
      fs.readFile(`./${fileName}/package.json`, {}, (err, data) => {
        const pkg = JSON.parse(data.toString());
        pkg.name = fileName
        pkg.description = undefined
        fs.writeFileSync(`${fileName}/package.json`, JSON.stringify(pkg))
      })
    })
  })
}