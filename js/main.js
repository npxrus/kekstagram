function getRandomIntegerNumber(from, to) {
  if (from < 0 || to < 0) {
    return undefined;
  }

  if (from > to) {
    [from, to] = [to, from];
  }

  if (from === to) {
    return from;
  }

  from = Math.ceil(from);
  to = Math.ceil(to);

  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

getRandomIntegerNumber(1, 10);
checkStringLength("abc", 4);
