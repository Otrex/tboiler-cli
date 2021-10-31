#!/usr/bin/env node

import { Command } from "commander";
import pkg from '../package.json'

const program = new Command()

program
  .version(pkg.version)
  .command('backend', 'This is for creating backend boilerplate')

program.parse()