import { Command } from "commander";
import { createFile } from "../actions/create";

const program = new Command()

program
  .command('create <projectName>')
  .option('-t, --type <mode>', 'Which setup mode to use', 'typescript')
  .description('This is to set up a new project with name: <projectName>')
  .action(createFile)

program
  .command('stop')
  .description('fihhsisvisnjv')
  .action(()=> console.log('creating stop boilerplate'))

program.parse(process.argv)