// Uncomment the code below and write your tests
import { Action } from '02-table-tests';
import {
  RawCalculatorInput,
  ValidCalculatorInput,
  simpleCalculator,
} from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    for (let i = 0; i < 1000; i++) {
      const input: ValidCalculatorInput = {
        a: Math.round(Math.random()),
        b: Math.round(Math.random()),
        action: Action.Add,
      };
      const result = simpleCalculator(input);

      expect(result).toBe(input.a + input.b);
    }
  });

  test('should subtract two numbers', () => {
    for (let i = 0; i < 1000; i++) {
      const input: ValidCalculatorInput = {
        a: Math.round(Math.random()),
        b: Math.round(Math.random()),
        action: Action.Subtract,
      };
      const result = simpleCalculator(input);

      expect(result).toBe(input.a - input.b);
    }
  });

  test('should multiply two numbers', () => {
    for (let i = 0; i < 1000; i++) {
      const input: ValidCalculatorInput = {
        a: Math.round(Math.random()),
        b: Math.round(Math.random()),
        action: Action.Multiply,
      };
      const result = simpleCalculator(input);

      expect(result).toBe(input.a * input.b);
    }
  });

  test('should divide two numbers', () => {
    for (let i = 0; i < 1000; i++) {
      const input: ValidCalculatorInput = {
        a: Math.round(Math.random()),
        b: Math.round(Math.random()),
        action: Action.Divide,
      };
      const result = simpleCalculator(input);

      expect(result).toBe(input.a / input.b);
    }
  });

  test('should exponentiate two numbers', () => {
    for (let i = 0; i < 1000; i++) {
      const input: ValidCalculatorInput = {
        a: Math.round(Math.random()),
        b: Math.round(Math.random()),
        action: Action.Exponentiate,
      };
      const result = simpleCalculator(input);

      expect(result).toBe(input.a ** input.b);
    }
  });

  test('should return null for invalid action', () => {
    const input: RawCalculatorInput = {
      a: 1,
      b: 1,
      action: 'Invalid Action',
    };
    const result = simpleCalculator(input);

    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const input: RawCalculatorInput = {
      a: 'string',
      b: 'false',
      action: Action.Add,
    };
    const result = simpleCalculator(input);

    expect(result).toBeNull();
  });
});
