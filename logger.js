/* Node Modules */
const util = require('util');

/* Ypsilon*/
const format = require('./format');

const write = (message) => {
    process.stdout.write(format.toAnsi(message));
}

const info = (message) => {
    write(`[[blue]ϒ[reset]] ${message}\n`);
}

const error = (message) => {
    write(`[[red]ϒ[reset]] ${message}\n`);
}

exports.write = write;
exports.info = info;
exports.error = error;