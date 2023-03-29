const ALERT_SHOW_TIME = 5000;

//модуль с вспомогательными функциями;
function getRandomNum(min, max) {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertBlock = document.createElement('div');
  alertBlock.style.zIndex = 100;
  alertBlock.style.position = 'absolute';
  alertBlock.style.top = 0;
  alertBlock.style.left = 0;
  alertBlock.style.right = 0;
  alertBlock.style.padding = '10px 3px';
  alertBlock.style.fontSize = '26px';
  alertBlock.style.textAlign = 'center';
  alertBlock.style.backgroundColor = 'red';

  alertBlock.textContent = message;

  document.body.append(alertBlock);

  setTimeout(() => {
    alertBlock.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomNum, isEscapeKey, showAlert };
