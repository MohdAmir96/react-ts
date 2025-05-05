// Debounce: Delays the callback until no new calls happen within the delay time
const debounce = (callback, delay) => {
  let debounceTimeout;
  return (...args) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

// Throttle: Ensures the callback is called at most once every 'delay' milliseconds
const throttle = (callback, delay) => {
  let lastExecutionTime = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastExecutionTime >= delay) {
      callback(...args);
      lastExecutionTime = now;
    }
  };
};

export { debounce, throttle };
