function willYouMarryMe(isPositiveAnswer) {
  return new Promise((resolve, reject) => {
    if (typeof isPositiveAnswer !== 'boolean') {
      reject(new Error('Wrong parameter is passed! Ask her again.'));
    } else if (isPositiveAnswer) {
      resolve('Hooray!!! She said "Yes"!');
    } else {
      resolve('Oh no, she said "No".');
    }
  });
}

function processAllPromises(array) {
  return Promise.all(array);
}

function getFastestPromise(array) {
  return Promise.race(array);
}

function chainPromises(array, action) {
  return array.reduce(
    (acc, promise) => acc.then((res) => promise
      .then((val) => (res === undefined ? val : action(res, val)))
      .catch(() => res)),
    Promise.resolve(undefined),
  );
}

module.exports = {
  willYouMarryMe,
  processAllPromises,
  getFastestPromise,
  chainPromises,
};
