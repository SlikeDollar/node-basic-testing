// Uncomment the code below and write your tests
import {
  BankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const bankAccount = getBankAccount(333);
    expect(bankAccount).toBeInstanceOf(BankAccount);
    expect(bankAccount.getBalance()).toBe(333);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const bankAccount = getBankAccount(1);
    expect(() => bankAccount.withdraw(10)).toThrowError(
      new InsufficientFundsError(bankAccount.getBalance()),
    );
  });

  test('should throw error when transferring more than balance', () => {
    const bankAccount = getBankAccount(1);
    const bankAccountToTransfer = getBankAccount(1000);

    expect(() => bankAccount.transfer(10, bankAccountToTransfer)).toThrowError(
      new InsufficientFundsError(bankAccount.getBalance()),
    );
  });

  test('should throw error when transferring to the same account', () => {
    const bankAccount = getBankAccount(1);

    expect(() => bankAccount.transfer(1, bankAccount)).toThrowError(
      new TransferFailedError(),
    );
  });

  test('should deposit money', () => {
    const bankAccount = getBankAccount(100);
    expect(bankAccount.deposit(100).getBalance()).toBe(200);
  });

  test('should withdraw money', () => {
    const bankAccount = getBankAccount(100);
    expect(bankAccount.withdraw(10).getBalance()).toBe(90);
  });

  test('should transfer money', () => {
    const bankAccount = getBankAccount(100);
    const bankAccountToTransfer = getBankAccount(0);
    bankAccount.transfer(99, bankAccountToTransfer);
    expect(bankAccount.getBalance()).toBe(1);
    expect(bankAccountToTransfer.getBalance()).toBe(99);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const bankAccount = getBankAccount(100);

    for (let i = 0; i < 10; i++) {
      const response = await bankAccount.fetchBalance();
      if (response) {
        expect(typeof response).toBe('number');
      }
    }
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const bankAccount = getBankAccount(100);
    jest
      .spyOn(bankAccount, 'fetchBalance')
      .mockImplementation(() => Promise.resolve(30));

    await bankAccount.synchronizeBalance();
    expect(bankAccount.getBalance()).toBe(30);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const bankAccount = getBankAccount(100);
    jest
      .spyOn(bankAccount, 'fetchBalance')
      .mockImplementation(() => Promise.resolve(null));

    expect(bankAccount.synchronizeBalance()).rejects.toThrowError(
      new SynchronizationFailedError(),
    );
  });
});
