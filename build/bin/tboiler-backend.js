"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var create_1 = require("../actions/create");
var program = new commander_1.Command();
program
    .command('create <projectName>')
    .option('-t, --type <mode>', 'Which setup mode to use', 'typescript')
    .description('This is to set up a new project with name: <projectName>')
    .action(create_1.createFile);
program
    .command('stop')
    .description('fihhsisvisnjv')
    .action(function () { return console.log('creating stop boilerplate'); });
program.parse(process.argv);
