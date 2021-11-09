/* Node Modules */
const readline = require('readline');
const util = require('util');
const fs = require('fs');

/* Ypsilon Modules*/
const format = require('./format');
const logger = require('./logger');

const rl = readline.createInterface({input:process.stdin, output:process.stdout});

const init = async () => {
    if (!fs.existsSync('./data.json')) {
        logger.info('Welcome to Ypsilon chat client!');
        logger.info('We support [cyan]ANSI[reset] and ᴜɴɪᴄᴏᴅᴇ.');
    
        let username = null;

        const question = util.promisify(rl.question).bind(rl);

        while (true) {
            try{
                username = await question('Username: ');
            } catch (e) {
                username = e;
                if (!format.isUsername(username)) {
                    logger.error('Invalid username '+ username);
                }
                else break;
            }
        }

        const data = {username: username};

        fs.writeFileSync('./data.json', JSON.stringify(data));
    }

    const data = JSON.parse(fs.readFileSync('./data.json'));

    logger.info('Welcome ' + data.username + ' [bright]($help)');

    // rl.on(message)
}

init();


// readln.on('line', (input) => {
    
//     if (!input.startsWith('$')) return;

//     const command = input.split(' ')[0].slice(1);
//     const args = input.split(' ').slice(1);

// });