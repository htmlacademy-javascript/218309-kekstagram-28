const getData = (onSuccess) => {
  fetch('https://28.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((generateUserPhotoDescription) => {
      onSuccess(generateUserPhotoDescription);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://28.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  ).then((responce) => {
    if (responce.ok) {
      onSuccess();
    } else {
      onFail('Не удалось отправить форму. Попробуй ещё раз');
    }
  })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуй ещё раз');
    });
};

export { getData, sendData };
