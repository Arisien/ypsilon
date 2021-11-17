/* Node Modules */
const net = require('net');

/* Ypsilon Modules */
const parser = require('./parser');
const io = require('./io');

class Server {
    constructor (config) {
        this.clients = {};
        this.config = config;
    }

    launch = () => {
        this.server = net.createServer((socket) => {
            const ip = socket.remoteAddress;
            this.clients[ip] = {ip:ip, socket:socket};
            socket.on('data', this.data);
            socket.write(parser.asciify(config.message));
        });

        this.server.listen(this.config.port);
        
    }

    data = (data) => {
        console.log(data.toString());
    }
}


// const server = net.createServer((connection) => {
//     const ip = connection.remoteAddress;
    
//     console.log(`${ip} connected to the server.`);
    
//     connection.on('end', () => {
//         console.log('client disconnected');
//     });

//     connection.write(format.parse('welcome to my [red][server]')+'\r\n');
// });

// server.on('error', (err) => {
//     throw err;
// });

// server.listen(port, () => {
//     console.log('server bound');
// });