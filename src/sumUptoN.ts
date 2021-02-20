//$$$$$$$$$$ 1. USING FOR LOOP $$$$$$$$$$ \\
export function sumUptoNFor(inNum: number): number {
  let sum = 0;
  for (let i = 1; i <= inNum; i++) {
    sum += i;
  }
  return sum;
}

//$$$$$$$$$$ 2. USING THE FORMULA $$$$$$$$$$ \\
export function sumUptoNFormula(inNum: number): number {
  return (inNum * (inNum + 1)) / 2;
}
