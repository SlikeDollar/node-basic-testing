import { generateLinkedList } from '08-snapshot-testing';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    expect({
      value: 3,
      next: { value: 4, next: { value: null, next: null } },
    }).toStrictEqual(generateLinkedList([3, 4]));
  });

  test('should generate linked list from values 2', () => {
    expect({
      value: 3,
      next: { value: 4, next: { value: null, next: null } },
    }).toMatchSnapshot(generateLinkedList([3,4]));
  });
});
