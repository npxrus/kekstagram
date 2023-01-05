function getRandomIntegerNumber(from, to) {
  if (from < 0 || to < 0) {
    console.error("Числа должны быть положительными.");
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

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
