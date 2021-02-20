import * as sr from './stringReverse';
import * as supton from './sumUptoN';

// STRING REVERSE
const inputStr: string = 'test';
console.log(sr.strRevArray(inputStr));

// SUM UPTO N
const inputNum: number = 5;
console.log(`1. Using for loop: ${supton.sumUptoNFor(inputNum)}`);
console.log(`2. Using the formula: ${supton.sumUptoNFormula(inputNum)}`);
