/*
 * A simpler implementation is probably just a static array of the characters. But, this provides practice with letter ranges...
 */
const [code_0, code_9, A_code, Z_code, a_code, z_code] = ['0', '9', 'A', 'Z', 'a', 'z'].map(c => c.charCodeAt(0));

const digitRange = code_9 - code_0 + 1;
const upperRange = Z_code - A_code + 1;
const lowerRange = z_code - a_code + 1;
const alphaRange = digitRange + upperRange + lowerRange;

function getChar(n) {
    if (n < 10) {
        return String.fromCharCode(n + code_0)
    } else if (n < 36) {
        return String.fromCharCode(n - digitRange + A_code)
    }  else if (n < 62) {
        return String.fromCharCode(n - digitRange - upperRange + a_code)
    }
}

/*
 * Returns random string of length `size` containing characters alphanumeric only both upper and lower case.
 */
function chance(size) {
    if (size < 1) {
        return ''
    }

    const res = [];
    while(size--) {
        res.push(getChar(Math.floor(Math.random() * alphaRange)))
    }
    return res.join('')
}

console.log(chance(60));
