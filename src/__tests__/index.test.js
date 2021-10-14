import fetchCount from '../__mocks__/api.js';

test('test fetch count the count is 5', () => {
  fetchCount().then((data) => { expect(data).toBe(5); });
});
