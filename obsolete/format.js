const escapes = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",

    blackBG: "\x1b[40m",
    redBG: "\x1b[41m",
    greenBG: "\x1b[42m",
    yellowBG: "\x1b[43m",
    blueBG: "\x1b[44m",
    magentaBG: "\x1b[45m",
    cyanBG: "\x1b[46m",
    whiteBG: "\x1b[47m"
};

const ansi = (message) => {
    for (const escape in escapes) {
        message = message.replace(new RegExp(`\\[${escape}\\]`, 'gi'), escapes[escape]);
    }
    message += escapes.reset;
    return message;
}

const deasciify = (message) => {
    const matches = message.match(/\[\w+\]/);

    if (matches == null || matches.length == 0) return message;

    const match = matches[0];
    
    let replaced = "";

    //Unicode
    if (match.startsWith('[u_')) {
        const code = match.slice(3, match.length-1);
        replaced = String.fromCharCode(code);
        console.log(code);
    }

    //Escape
    else if (match.startsWith('[a_')) {}

    message = message.replace(match, replaced);

    return deasciify(message);
}

/* ASCII String -> Chat Message */
exports.parse = (message) => {

    console.log(deasciify(asciify('😼 omg hello :)')));
    return ansi(message);
}

const asciify = (message) => {
    for (let i = 0; i < message.length; i++) {
        if (message.codePointAt(i) > 255) {
            message = message.slice(0,i) + "[u_" + message.codePointAt(i) + "]" + message.slice(i+1);
            return asciify(message); 
        }
    }
    return message;
}

/* Chat Message -> ASCII String */
exports.serialize = (message) => {

    console.log(asciify(message));

    // var hex = "p".codePointAt(0).toString(16);
    // var result = "\\u" + "0000".substring(0, 4 - hex.length) + hex;
    // console.log(hex);
    // console.log(result);
}

exports.isUsername = (input) => {
    if (!(typeof input === 'string' || input instanceof String)) return false;
    if(!input.match(/^[a-zA-Z0-9_\[\]]*$/i)) return false;
    return true;
}