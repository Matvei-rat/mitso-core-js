function getFizzBuzz(num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

function getFactorial(n) {
  return n <= 1 ? 1 : n * getFactorial(n - 1);
}

function getSumBetweenNumbers(n1, n2) {
  return Array.from({ length: n2 - n1 + 1 }, (_, i) => n1 + i)
    .reduce((a, b) => a + b, 0);
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function doRectanglesOverlap(rect1, rect2) {
  return !(
    rect1.left + rect1.width <= rect2.left
    || rect2.left + rect2.width <= rect1.left
    || rect1.top + rect1.height <= rect2.top
    || rect2.top + rect2.height <= rect1.top
  );
}

function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  return dx * dx + dy * dy < circle.radius * circle.radius;
}

function findFirstSingleChar(str) {
  return str.split('').find((ch) => str.indexOf(ch) === str.lastIndexOf(ch)) || null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const left = isStartIncluded ? '[' : '(';
  const right = isEndIncluded ? ']' : ')';
  return `${left}${start}, ${end}${right}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  return Number(String(num).split('').reverse().join(''));
}

function isCreditCardNumber(ccn) {
  const digits = String(ccn).split('').map(Number);
  const sum = digits
    .reverse()
    .map((d, i) => {
      if (i % 2 === 1) {
        let dbl = d * 2;
        if (dbl > 9) dbl -= 9;
        return dbl;
      }
      return d;
    })
    .reduce((a, b) => a + b, 0);
  return sum % 10 === 0;
}

function getDigitalRoot(num) {
  let n = num;
  while (n > 9) {
    n = String(n)
      .split('')
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
  return n;
}

function isBracketsBalanced(str) {
  const stack = [];
  const pairs = {
    ')': '(', ']': '[', '}': '{', '>': '<',
  };
  let valid = true;

  str.split('').forEach((ch) => {
    if ('([{<'.includes(ch)) {
      stack.push(ch);
    } else if (')]}>'.includes(ch)) {
      if (stack.pop() !== pairs[ch]) valid = false;
    }
  });

  return valid && stack.length === 0;
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(pathes) {
  const splitPaths = pathes.map((p) => p.split('/'));
  const minLen = Math.min(...splitPaths.map((p) => p.length));
  const common = [];

  Array.from({ length: minLen }).every((_, i) => {
    const segment = splitPaths[0][i];
    if (splitPaths.every((p) => p[i] === segment)) {
      common.push(segment);
      return true;
    }
    return false;
  });

  return common.length ? `${common.join('/')}/` : '';
}

function getMatrixProduct(m1, m2) {
  return m1.map((row) => m2[0].map((_, j) => row.reduce((sum, val, k) => sum + val * m2[k][j], 0)));
}

function evaluateTicTacToePosition(position) {
  const lines = [
    [position[0][0], position[0][1], position[0][2]],
    [position[1][0], position[1][1], position[1][2]],
    [position[2][0], position[2][1], position[2][2]],
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    [position[0][0], position[1][1], position[2][2]],
    [position[0][2], position[1][1], position[2][0]],
  ];
  const winnerLine = lines.find(
    (line) => line[0] && line.every((v) => v === line[0]),
  );
  return winnerLine ? winnerLine[0] : undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
