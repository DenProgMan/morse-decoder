const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function parseString(str) {
    const mapObject = {
        '00': '',
        '10': '.',
        '11': '-',
    };
    const arr = str.split(/(.{10})/g).filter(Boolean);
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const parsedChar = element.replace(/(?:00|10|11)/g, matched => mapObject[matched]);
        arr[index] = parsedChar.length === 10 ? ' ' : parsedChar;
    }

    return arr;
}

function decode(expr) {
    let result = '';
    const parsedString = parseString(expr);

    for (const char of parsedString) {
        result += MORSE_TABLE?.[char] ?? ' ';
    }

    return result;
}

module.exports = {
    decode
}