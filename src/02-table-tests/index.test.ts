import { simpleCalculator, Action } from './index';

export type testCase = {
  a: any;
  b: any;
  action: any;
  expected: number | null;
};

const addittionTestCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
];

const substractionTestCases = [
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
];

const multiplicationTestCases = [
  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
];

const divideTestCases = [
  { a: 1, b: 2, action: Action.Divide, expected: 0.5 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 100, b: 2, action: Action.Divide, expected: 50 },
];

const expontiationTestCases = [
  { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 100, b: 2, action: Action.Exponentiate, expected: 10000 },
];

const invalidActionTestCases = [
  { a: 1, b: 2, action: 'invalid', expected: null },
  { a: 2, b: 2, action: 'not valid', expected: null },
  { a: 100, b: 2, action: 'Bla Bla', expected: null },
];

const invalidArgumentTestCases = [
  { a: '123', b: 2, action: Action.Divide, expected: null },
  { a: 1, b: true, action: Action.Add, expected: null },
  { a: Number(10), b: [], action: Action.Multiply, expected: null },
];

describe('simpleCalculator', () => {
  test.each(addittionTestCases)(
    'should add two numbers',
    ({ a, b, action, expected }: testCase) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    },
  );

  test.each(substractionTestCases)(
    'should substract two numbers',
    ({ a, b, action, expected }: testCase) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    },
  );

  test.each(multiplicationTestCases)(
    'should multiply two numbers',
    ({ a, b, action, expected }: testCase) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    },
  );

  test.each(divideTestCases)(
    'should divide two numbers',
    ({ a, b, action, expected }: testCase) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    },
  );

  test.each(expontiationTestCases)(
    'should divide two numbers',
    ({ a, b, action, expected }: testCase) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    },
  );

  test.each(invalidActionTestCases)(
    'should return null for invalid action',
    ({ a, b, action, expected }: testCase) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    },
  );

  test.each(invalidArgumentTestCases)(
    'should return null for invalid arguments',
    ({ a, b, action, expected }: testCase) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    },
  );
});
