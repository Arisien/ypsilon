/**
 * io.js
 * 
 * handles input and output of ypsilon
 *
 * @author Arisien
 */

/* Node Modules */
const readline = require('readline');

/* Ypsilon Modules */
const parser = require('./parser');

/* Objects */
const rl = readline.createInterface({input:process.stdin});

const listen = (callback) => {
    rl.removeAllListeners();
    rl.on('line', callback);
}

const write = (message) => {
    process.stdout.write(parser.deasciify(message));
}

const info = (message) => {
    write(`[[a_34m]ϒ[a_0m]] ${message}\n`);
}

const error = (message) => {
    write(`[[a_31m]ϒ[a_0m]] ${message}\n`);
}

exports.listen = listen;
exports.write = write;
exports.info = info;
exports.error = error;