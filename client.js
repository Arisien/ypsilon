/* Node Modules */
const net = require('net');

/* Ypsilon Modules */
const parser = require('./parser');
const io = require('./io');

module.exports = class Client {
    constructor (config) {
        this.username = config.username;
        this.socket = null;
    }

    connect = (input) => {
        if (!input || input.split(':').length == 0) {
            return io.error(`Invalid input ${input}`);
        }

        const ip = input.split(':')[0];
        const port = input.split(':')[1];

        if (net.isIP(ip) == 0) {
            return io.error(`Invalid ip ${ip}`);
        }

        this.socket = net.createConnection(port, ip, () => {
            io.info(`Connected to ${input}`);

            this.socket.on('data', (data) => {
                console.log(parser.deasciify(parser.asciify(data.toString())));
            });
        });

    }
}

// const client = net.createConnection(port, host, () => {
//     console.log('connected to server');

//     client.on('data', (data) => {
//         console.log(data.toString())
//     })

// })