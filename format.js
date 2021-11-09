const ansi = {
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

    Bblack: "\x1b[40m",
    Bred: "\x1b[41m",
    Bgreen: "\x1b[42m",
    Byellow: "\x1b[43m",
    Bblue: "\x1b[44m",
    Bmagenta: "\x1b[45m",
    Bcyan: "\x1b[46m",
    Bwhite: "\x1b[47m"
};

exports.toAnsi = (message) => {
    for (const format in ansi) {
        message = message.replace(new RegExp(`\\[${format}\\]`, 'gi'), ansi[format]);
    }
    message += ansi.reset;
    return message;
}

exports.isUsername = (input) => {
    if (!(typeof input === 'string' || input instanceof String)) return false;
    if(!input.match(/^[a-zA-Z0-9_\[\]]*$/i)) return false;
    return true;
}