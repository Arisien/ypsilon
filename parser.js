/**
 * parser.js
 * 
 * converts chat messages into ascii and back
 *
 * @author Arisien
 */

/**
 * Turns formatted message into ascii
 * @param {String} message Formatted chat message
 * @return {String} Ascii message
 */
const asciify = (message) => {
    return message.replace(/[^\x00-\x7F]+/g, match => {
        return '[u_' + match.codePointAt(0) + ']';
    });
}

/**
 * Returns formatted message from ascii
 * @param {String} message Ascii message
 * @return {String} Formatted message
 */
const deasciify = (message) => {
    return message.replace(/\[\w+_\w+\]/gi, match => {
        let data = match.substring(1, match.length-1).split('_');
        switch (data[0]) {
            case 'u':
                return String.fromCodePoint(data[1]);
            case 'a':
                return '\x1b[' + data[1];
            default:
                return '';
        }
    });
}

exports.asciify = asciify;
exports.deasciify = deasciify;