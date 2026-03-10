const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add a positive and negative number', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract a positive from a negative number', () => {
      expect(subtract(-10, 5)).toBe(-15);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract two zeros', () => {
      expect(subtract(0, 0)).toBe(0);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });

    test('should subtract same numbers resulting in zero', () => {
      expect(subtract(42, 42)).toBe(0);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply a positive and negative number', () => {
      expect(multiply(10, -4)).toBe(-40);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply zero by zero', () => {
      expect(multiply(0, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide a positive by a negative number', () => {
      expect(divide(-20, 5)).toBe(-4);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide a number by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 3.5)).toBeCloseTo(3);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => divide(-10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Cannot divide by zero');
    });

    test('should handle fractional results', () => {
      expect(divide(1, 3)).toBeCloseTo(0.333333, 5);
    });

    test('should divide large numbers', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });
  });

  describe('Example operations from image', () => {
    test('should calculate 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should calculate 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should calculate 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should calculate 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should calculate 5 % 2 = 1 (modulo)', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate 2 ^ 3 = 8 (power)', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate √16 = 4 (square root)', () => {
      expect(squareRoot(16)).toBe(4);
    });
  });

  describe('Modulo', () => {
    test('should calculate modulo of two positive numbers', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with larger dividend', () => {
      expect(modulo(17, 5)).toBe(2);
    });

    test('should calculate modulo resulting in zero', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should calculate modulo with negative dividend', () => {
      expect(modulo(-5, 2)).toBe(-1);
    });

    test('should calculate modulo with negative divisor', () => {
      expect(modulo(5, -2)).toBe(1);
    });

    test('should calculate modulo with both negative numbers', () => {
      expect(modulo(-5, -2)).toBe(-1);
    });

    test('should calculate modulo with decimal numbers', () => {
      expect(modulo(5.5, 2)).toBeCloseTo(1.5);
    });

    test('should calculate modulo with small numbers', () => {
      expect(modulo(1, 2)).toBe(1);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing negative by zero', () => {
      expect(() => modulo(-10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('Power', () => {
    test('should calculate power of two positive numbers', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power with base 10', () => {
      expect(power(10, 2)).toBe(100);
    });

    test('should calculate power with exponent zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should calculate power with exponent one', () => {
      expect(power(42, 1)).toBe(42);
    });

    test('should calculate power with negative exponent', () => {
      expect(power(2, -2)).toBeCloseTo(0.25);
    });

    test('should calculate power with negative base', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should calculate power with negative base and even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should calculate power with fractional exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should calculate power with decimal base', () => {
      expect(power(2.5, 2)).toBeCloseTo(6.25);
    });

    test('should calculate large power', () => {
      expect(power(2, 10)).toBe(1024);
    });

    test('should calculate one to any power', () => {
      expect(power(1, 100)).toBe(1);
    });

    test('should calculate zero to positive power', () => {
      expect(power(0, 5)).toBe(0);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root of positive number', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect square', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of small decimal', () => {
      expect(squareRoot(0.25)).toBe(0.5);
    });

    test('should calculate square root of decimal number', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414213, 5);
    });

    test('should calculate square root of large number', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should throw error when calculating square root of negative number', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error when calculating square root of negative decimal', () => {
      expect(() => squareRoot(-0.5)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative one', () => {
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
    });
  });
});
