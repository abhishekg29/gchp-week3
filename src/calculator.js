#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√)
 */

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtract two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide two numbers with error handling for division by zero
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a and b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Get the remainder of division
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If divisor is zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a % b;
}

/**
 * Raise a number to a power
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculate the square root of a number
 * @param {number} n - The number
 * @returns {number} Square root of n
 * @throws {Error} If n is negative
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// CLI interface - only run if this is the main module
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: calculator.js <operation> <number1> [number2]');
    console.log('Operations: add, subtract, multiply, divide, modulo, power, squareroot');
    console.log('Examples:');
    console.log('  calculator.js add 5 3');
    console.log('  calculator.js power 2 3');
    console.log('  calculator.js squareroot 16');
    process.exit(1);
  }

  const operation = args[0];
  const num1 = parseFloat(args[1]);
  const num2 = args.length > 2 ? parseFloat(args[2]) : undefined;

  if (isNaN(num1) || (args.length > 2 && isNaN(num2))) {
    console.error('Error: Please provide valid numbers');
    process.exit(1);
  }

  try {
    let result;
    switch (operation.toLowerCase()) {
      case 'add':
      case '+':
        if (num2 === undefined) throw new Error('Addition requires two numbers');
        result = add(num1, num2);
        break;
      case 'subtract':
      case '-':
        if (num2 === undefined) throw new Error('Subtraction requires two numbers');
        result = subtract(num1, num2);
        break;
      case 'multiply':
      case '*':
      case 'x':
        if (num2 === undefined) throw new Error('Multiplication requires two numbers');
        result = multiply(num1, num2);
        break;
      case 'divide':
      case '/':
        if (num2 === undefined) throw new Error('Division requires two numbers');
        result = divide(num1, num2);
        break;
      case 'modulo':
      case '%':
        if (num2 === undefined) throw new Error('Modulo requires two numbers');
        result = modulo(num1, num2);
        break;
      case 'power':
      case '^':
        if (num2 === undefined) throw new Error('Power requires two numbers');
        result = power(num1, num2);
        break;
      case 'squareroot':
      case '√':
        if (num2 !== undefined) throw new Error('Square root takes only one number');
        result = squareRoot(num1);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.log('Supported operations: add, subtract, multiply, divide, modulo, power, squareroot');
        process.exit(1);
    }
    console.log(`${num1} ${operation} ${num2 !== undefined ? num2 : ''} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Export functions for use as a module
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
