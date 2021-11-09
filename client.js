const net = require('net');

class Client {
    constructor (username) {
        this.username = username;
        this.socket = null;
    }

    connect = (address) => {
        if (address.split(':').length != 1) return;

        const ip = address.split(':')[0];
        const port = adress.split(':')[1];

        // if (net.isIP(ip) == 0) return;

        // client.connect();
        
    }
}

// const host = "localhost";
// const port = 25565

// const client = net.createConnection(port, host, () => {
//     console.log('connected to server');

//     client.on('data', (data) => {
//         console.log(data.toString())
//     })

// })