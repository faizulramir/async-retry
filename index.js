function retry(fn, options) {
    let attempt = 1;
    return new Promise((resolve, reject) => {
      fn(resolve, reject).then(resolve).catch(error => {
        if (attempt < options.retries) {
          attempt += 1;
          setTimeout(() => retry(fn, options).then(resolve).catch(reject), options.delay);
        } else {
          reject(error);
        }
      });
    });
  }
  
  module.exports = retry;