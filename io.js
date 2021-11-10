/**
 * io.js
 * 
 * handles input and output of ypsilon
 *
 * @author Arisien
 */

const parser = require('./parser');

const write = (message) => {
    process.stdout.write(parser.deasciify(message));
}

const info = (message) => {
    write(`[[a_34m]ϒ[a_0m]] ${message}\n`);
}

const error = (message) => {
    write(`[[a_31m]ϒ[a_0m]] ${message}\n`);
}

exports.write = write;
exports.info = info;
exports.error = error;