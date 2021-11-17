/* Node Modules */
const fs = require('fs');

/* Ypsilon Modules */
const Client = require('./client');
const Server = require('./server');
const parser = require('./parser');
const io = require('./io');

const init = async () => {
    if (!fs.existsSync('./data.json')) {
        return io.error(`No config!`);
    }

    const data = require('./data.json');

    const client = new Client(data);
    
    io.info('Welcome ' + data.username);

    io.listen(command);
}

const command = (message) => {
    if (!message.startsWith('$')) return;
    
    const command = message.split(' ')[0].slice(1).toLowerCase();
    const args = message.split(' ').slice(1);

    switch (command) {
        case 'host':
            io.error('Server hosting not implemented yet, sorry 🙁');
            break;
        case 'connect':
            io.error('Client connection not implemented yet, sorry 🙁');
            break;
        default:
            io.error('Unknown command');
            break;
    }

}

init();