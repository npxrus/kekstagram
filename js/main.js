const getRandomInteger = (start, end) => {
  let min = Math.ceil(start);
  let max = Math.floor(end);

  if (min === max) {
    min = 0;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isStringCorrect = (str, maxLength) => str.length <= maxLength;

getRandomInteger();
isStringCorrect();
