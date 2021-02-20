"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strRevArray = void 0;
//$$$$$$$$$$ 1. CONVERT STRING TO ARRAY, REVERSE, AND CONVERT BACK $$$$$$$$$$ \\
function strRevArray(inStr) {
    return inStr.split('').reverse().join('');
}
exports.strRevArray = strRevArray;
