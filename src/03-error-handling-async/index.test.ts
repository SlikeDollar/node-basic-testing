import {
  throwError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
  throwCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', () => {
    const value = 'string';
    expect(resolveValue(value)).resolves.toBe(value);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const value = '123';
    expect(() => throwError(value)).toThrow(value);
  });

  test('should throw error with default message if message is not provided', () => {
    expect(throwError).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(throwCustomError).toThrow(new MyAwesomeError());
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    expect(rejectCustomError).rejects.toThrow(new MyAwesomeError());
  });
});
