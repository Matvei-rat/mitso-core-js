function findElement(arr, value) {
  return arr.indexOf(value);
}

function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function getArrayOfPositives(arr) {
  return arr.filter((x) => x > 0);
}

function getArrayOfStrings(arr) {
  return arr.filter((x) => typeof x === 'string');
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getUpperCaseStrings(arr) {
  return arr.map((x) => x.toUpperCase());
}

function getStringsLength(arr) {
  return arr.map((x) => x.length);
}

function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return arr.slice(-n);
}

function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}

function toStringList(arr) {
  return arr.join(',');
}

function toArrayOfSquares(arr) {
  return arr.map((x) => x * x);
}

function getMovingSum(arr) {
  let sum = 0;
  return arr.map((x) => {
    sum += x;
    return sum;
  });
}

function getSecondItems(arr) {
  return arr.filter((_, i) => i % 2 === 1);
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((x, i) => Array(i + 1).fill(x));
}

function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}

function getPositivesCount(arr) {
  return arr.filter((x) => typeof x === 'number' && x > 0).length;
}

function sortDigitNamesByNumericOrder(arr) {
  const order = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
  ];
  return arr.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}

function getItemsSum(arr) {
  return arr.reduce((sum, x) => sum + x, 0);
}

function getFalsyValuesCount(arr) {
  return arr.filter((x) => !x).length;
}

function findAllOccurrences(arr, item) {
  return arr.filter((x) => x === item).length;
}

function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}

function getIdentityMatrix(n) {
  return Array.from(
    { length: n },
    (__, i) => Array.from(
      { length: n },
      (___, j) => (i === j ? 1 : 0),
    ),
  );
}

function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function distinct(arr) {
  return [...new Set(arr)];
}

function group(array, keySelector, valueSelector) {
  const map = new Map();
  array.forEach((item) => {
    const key = keySelector(item);
    const value = valueSelector(item);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(value);
  });
  return map;
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function getElementByIndexes(arr, indexes) {
  return indexes.reduce((acc, i) => acc[i], arr);
}

function swapHeadAndTail(arr) {
  const len = arr.length;
  const half = Math.floor(len / 2);
  const head = arr.slice(0, half);
  const tail = arr.slice(-half);

  if (len % 2 === 0) {
    return [...tail, ...head];
  }

  const middle = arr[half];
  return [...tail, middle, ...head];
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
