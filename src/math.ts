#! /usr/bin/env node
import math from "math-expression-evaluator";

const args = process.argv.slice(2);
const originalExpression = args.join(" ");

const doMath = (expression: string) => {
  try {
    // replace all x or X with *
    let expressionParsed = expression.replace(/x/g, "*");
    // replace all % with Mod
    expressionParsed = expressionParsed.replace(/%/g, "Mod");
    const result = math.eval(expressionParsed);
    console.log(`${expression} = ${result}`);
  } catch (e: any) {
    console.log("Invalid expression: " + expression);
  }
};

const getPackageVersion = () => {
  const packageJson = require("../package.json");
  console.log(`${packageJson.name} v${packageJson.version}`);
};

const getHelp = () => {
  const packageJson = require("../package.json");
  console.log(`
    ${packageJson.name} v${packageJson.version}
    ${packageJson.description}
    visit ${packageJson.homepage} for more info
    Usage:
        math <expression> - Evaluates the expression
        math --version, -v - Prints the version
        math --help, -h - For more information
    `);
};

if (args.length === 0) {
  getHelp();
} else if (args[0] === "--version" || args[0] === "-v") {
  getPackageVersion();
} else if (args[0] === "--help" || args[0] === "-h") {
  getHelp();
} else {
  doMath(originalExpression);
}
