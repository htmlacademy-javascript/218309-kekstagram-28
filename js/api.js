import { sortByDefault, setFilterClick, showImgFilter } from './filters.js';
import { showAlert } from './util.js';

const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const getData = (onSuccess) => {
  fetch(
    `${BASE_URL}${Route.GET_DATA}`
  )
    .then((response) => {
      if (!response.ok) {
        showAlert(`${ErrorText.GET_DATA}`);
      }
      return response.json();
    })
    .then((generatePhoto) => {
      onSuccess(generatePhoto);
      sortByDefault(generatePhoto);
      setFilterClick(generatePhoto);
      showImgFilter();
    })
    .catch(() => {
      showAlert(`${ErrorText.GET_DATA}`);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    `${BASE_URL}${Route.SEND_DATA}`,
    {
      method: 'POST',
      body,
    },
  ).then((responce) => {
    if (responce.ok) {
      onSuccess();
    } else {
      onFail(`${ErrorText.SEND_DATA}`);
    }
  })
    .catch(() => {
      onFail(`${ErrorText.SEND_DATA}`);
    });
};

export { getData, sendData };

// -----НОВОЕ------

// const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';
// const Route = {
//   GET_DATA: '/data',
//   SEND_DATA: '/',
// };
// const Method = {
//   GET: 'GET',
//   POST: 'POST',
// };

// const load = (route, method = Method.GET, body = null) =>
//   fetch(`${BASE_URL}${route}`, {method, body})
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error();
//       }
//       return response.json();
//     })
//     .catch(() => {
//       throw new Error();
//     });

// const getData = () => load(Route.GET_DATA);

// const sendData = (body) => load(Route.SEND_DATA, Method.POST, body);

// export {getData, sendData};
