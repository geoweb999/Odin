const reverseString = function(str) {
    let out = '';
    for (let i = str.length - 1; i >= 0; i--) {
        out += str.charAt(i);
    }
    return out;
};

// Do not edit below this line
module.exports = reverseString;
