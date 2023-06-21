const repeatString = function(str, times) {
    if (times < 0) {
        return "ERROR";
    }
    let out = '';
    for (let i = 0; i < times; i++) {
        out += str;
    }
    return out;

};

// Do not edit below this line
module.exports = repeatString;
