function withTimeout(promise, timeoutDuration) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error(`Operation timed out after ${timeoutDuration}ms`));
    }, timeoutDuration);

    promise
      .then(resolve)
      .catch(reject)
      .finally(() => clearTimeout(timeout));
  });
}
