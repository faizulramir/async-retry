const retry = require('../index.js');

test('retries the function until it succeeds or reaches the maximum number of retries', async () => {
  let count = 0;
  const fn = () => new Promise((resolve, reject) => {
    count++;
    if (count === 3) {
      resolve('success');
    } else {
      reject(new Error('failed'));
    }
  });

  const result = await retry(fn, { retries: 5, delay: 100 });
  expect(result).toEqual('success');
  expect(count).toEqual(3);
});