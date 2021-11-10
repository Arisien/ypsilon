const net = require('net');

const format = require('./format');

class Server {
    constructor (port) {
        this.clients = {};
        this.port = port;
    }

    launch = () => {
        this.server = net.createServer((connection) => {
            const ip = connection.remoteAddress;
            this.clients[ip] = {ip:ip, socket:connection};
            connection.on('data', this.data);
        });

        this.server.listen(this.port);
    }

    data = (data) => {
        console.log(data.toString());
    }
}


// const port = 25565;
// const clients = [];

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