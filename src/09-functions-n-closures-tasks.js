function getComposition(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function getPowerFunction(exponent) {
  return function (x) {
    return x ** exponent;
  };
}

function getPolynom(...coeffs) {
  if (coeffs.length === 0) return null;
  return function (x) {
    return coeffs.reduce(
      (acc, coeff, i) => acc + coeff * x ** (coeffs.length - i - 1),
      0,
    );
  };
}

function memoize(func) {
  let cached;
  let called = false;
  return function () {
    if (!called) {
      cached = func();
      called = true;
    }
    return cached;
  };
}

function retry(func, attempts) {
  return function () {
    let lastError;
    for (let i = 0; i < attempts; i += 1) {
      try {
        return func();
      } catch (err) {
        lastError = err;
      }
    }
    throw lastError;
  };
}

function logger(func, logFunc) {
  return function (...args) {
    const argStr = args.map((a) => JSON.stringify(a)).join(',');
    logFunc(`${func.name}(${argStr}) starts`);
    const result = func(...args);
    logFunc(`${func.name}(${argStr}) ends`);
    return result;
  };
}

function partialUsingArguments(fn, ...args1) {
  return function (...args2) {
    return fn(...args1, ...args2);
  };
}

function getIdGeneratorFunction(startFrom) {
  let current = startFrom;
  return function () {
    const res = current;
    current += 1;
    return res;
  };
}

module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};
