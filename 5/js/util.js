//модуль с вспомогательными функциями;
function getRandomNum(min, max) {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

export {getRandomNum};
