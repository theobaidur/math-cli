#! /usr/bin/env node
import math from 'math-expression-evaluator';

const args = process.argv.slice(2);
const originalExpression = args.join(' ');
try{
    // replace all x or X with *
    let expression = originalExpression.replace(/x/g, '*');
    // replace all % with Mod
    expression = expression.replace(/%/g, 'Mod');
    const result = math.eval(expression);
    console.log(`${originalExpression} = ${result}`);
} catch(e: any){
    console.log("Invalid expression: "+originalExpression);
}
