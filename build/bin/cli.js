#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var package_json_1 = __importDefault(require("../package.json"));
var program = new commander_1.Command();
program
    .version(package_json_1.default.version)
    .command('backend', 'This is for creating backend boilerplate');
program.parse();
