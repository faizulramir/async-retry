# async-retry
Simply a npm package that helps to retry your async function.

# How to use
1. Install by npm.
```
npm i async_retry_fzlxtech
```
2. An example how to use
```
const retry = require('async_retry_fzlxtech');

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
```
