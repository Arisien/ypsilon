const readline = require('readline');

module.exports = class Cli {
    constructor (callback) {
        this.readline = readline.createInterface({input:process.stdin});
        this.readline.on('line', callback);
    }

    write = (info) => {
        process.stdout.write(info);
    }
}