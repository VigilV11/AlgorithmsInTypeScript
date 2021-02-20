"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumUptoNFormula = exports.sumUptoNFor = void 0;
//$$$$$$$$$$ 1. USING FOR LOOP $$$$$$$$$$ \\
function sumUptoNFor(inNum) {
    var sum = 0;
    for (var i = 1; i <= inNum; i++) {
        sum += i;
    }
    return sum;
}
exports.sumUptoNFor = sumUptoNFor;
//$$$$$$$$$$ 2. USING THE FORMULA $$$$$$$$$$ \\
function sumUptoNFormula(inNum) {
    return (inNum * (inNum + 1)) / 2;
}
exports.sumUptoNFormula = sumUptoNFormula;
