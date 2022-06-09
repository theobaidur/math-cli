# Math CLI

A simple cli to evaluate math expressions, based on famous [math-expression-evaluator](http://bugwheels94.github.io/math-expression-evaluator)

## Usage

Install the package globally, simply by running `npm install -g @theobaidur/math-cli`

Once installed,

- type `math YOUR-EXPRESSION` and press enter to see the result.
- type `math --version` or `math -v` to check current version
- type `math --help` or `math -h` to get more info

Examples:

```
math 10+2
// 10+2 = 12

math sin90
// sin90 = 1

math --version
// @theobaidur/math-cli v1.0.1

math --help
// @theobaidur/math-cli v1.0.1
// Small javascript utility to do maths from cli
// visit https://github.com/theobaidur/math-cli for more info
// Usage:
        math <expression> - Evaluates the expression
        math --version, -v - Prints the version
        math --help, -h - For more information
```

The supported expressions/symbols can be found at [math-expression-evaluator](http://bugwheels94.github.io/math-expression-evaluator)'s [math-expression-evaluator](https://github.com/bugwheels94/math-expression-evaluator#supported-symbols)
