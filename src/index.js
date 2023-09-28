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

function decode(expr) {
    const str = expr.match(/.{1,10}/g);
    var morse = '';
    var res = [];

    for (const char of str) {
        morse = MORSE_TABLE[convert(char.match(/.{1,2}/g))];
        if(morse === undefined)
            morse = ' ';
        res.push(morse);
    }

    return res.join('');
}

function convert(letter) {
    var morse = '';
    const filter = letter.filter(x => x !== '00');
    filter.forEach(x => {
        morse += x === '10' ? '.' : (x === '11' ? '-' : '_');
    })
    return morse;
}

module.exports = {
    decode
}
