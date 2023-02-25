
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const usersName = [
  'Александр',
  'Андрей',
  'Артём',
  'Иван',
  'Маша',
  'Надя',
  'Оля',
  'Юля'
]

const description =
  [
    'Класс',
    'Супер',
    'Здорово',
    'Отлично',
    'Красиво',
    'Идеально',
    'Прекрасно',
    'Браво',
    'Красота',
    'Зачётно'
  ]

function getRandomNum(min, max) {
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
function createRandomId(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNum(min, max);
    if (previousValues.length >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNum(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

//начинаем с функции по созданию объекта
const userPhotoDescription = () => {
  const userRandomId = createRandomId(1, 25);
  const userRandomUrl = createRandomId(1, 25);
  const userRandomDescription = getRandomNum(0, description.length - 1);
  const userRandomLikes = getRandomNum(15, 200);
  return {
    id: userRandomId(),
    url: `photos/${userRandomUrl()}.jpg`,
    description: description[userRandomDescription],
    likes: userRandomLikes,
    comments: '',
  };
};
console.log(userPhotoDescription());

//Функция для создания списка комментариев
const usersPhotoComments = () => {
  const usersCommentsId = getRandomNum(1, 200);
  const usersCommentsAvatar = getRandomNum(1, 6);
  const usersCommentsMessage = getRandomNum(0, message.length - 1);
  const usersCommentsName = getRandomNum(0, usersName.length - 1);
  return {
    id: usersCommentsId,
    avatar: `img/avatar-${usersCommentsAvatar}.svg`,
    message: message[usersCommentsMessage],
    name: usersName[usersCommentsName]
  };
};
console.log(usersPhotoComments());
