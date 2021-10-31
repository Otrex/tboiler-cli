"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = void 0;
var child_process_1 = require("child_process");
var fs_1 = __importDefault(require("fs"));
var util_1 = require("util");
var config_1 = __importDefault(require("../config"));
var run = (0, util_1.promisify)(child_process_1.exec);
var createFile = function (fileName, options) {
    if (options === void 0) { options = {}; }
    console.log('Creating Folder...');
    console.log(options);
    run("git clone " + config_1.default[options.type].node.backend.repo).then(function () {
        fs_1.default.rename(config_1.default[options.type].node.backend.name, fileName, function (err) {
            if (err)
                throw err;
            fs_1.default.readFile("./" + fileName + "/package.json", {}, function (err, data) {
                var pkg = JSON.parse(data.toString());
                pkg.name = fileName;
                pkg.description = undefined;
                fs_1.default.writeFileSync(fileName + "/package.json", JSON.stringify(pkg));
            });
        });
    });
};
exports.createFile = createFile;
