/* Node Modules */
const fs = require('fs');

/* Ypsilon Modules */
const parser = require('./parser');
const io = require('./io');

const init = async () => {
    if (!fs.existsSync('./data.json')) {
        return io.error(`No config!`);
    }

    const data = require('./data.json');

    io.info('Welcome ' + data.username);
}

init();