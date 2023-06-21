const removeFromArray = function(...args) {
    if (arguments.length < 2) {
        return "ERROR";
    }
    const out = [];
    const pattern = [];
    const arr = arguments[0];
    for (let i=1; i < arguments.length; i++) {
        pattern.push(arguments[i]);
    }
    for (let i=0; i < arr.length; i++) {
        if (pattern.includes(arr[i])) {
            continue
        } else {
            out.push(arr[i]);
        }
    }
    return out;

};

// Do not edit below this line
module.exports = removeFromArray;
