import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const create = jest.spyOn(axios, 'create');
    jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockImplementation(() => Promise.resolve(10));

    await throttledGetDataFromApi('relativePath');
    jest.runAllTimers();
    expect(create).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const relativePath = 'relativePath';
    const get = jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockImplementation(() => Promise.resolve(10));

    await throttledGetDataFromApi(relativePath);
    jest.runAllTimers();
    expect(get).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const data = 'data';
    jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockImplementation(() => Promise.resolve({ data }));

    const result = await throttledGetDataFromApi('relativePath');
    jest.runAllTimers();
    expect(result).toBe(data);
  });
});
