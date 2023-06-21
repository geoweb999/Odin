const sumAll = function(p1, p2) {
    if (typeof p1 != "number" || typeof p2 != "number") {
        return "ERROR"
    }
    if (p1 < 0 || p2 < 0) {
        return "ERROR"
    }
    let sum = 0;
    if (p1 <= p2) {
        for (let i = p1; i <= p2; i++) {
            sum += i;
        }
    } else {
        for (let i = p2; i <= p1; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
