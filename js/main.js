
const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const usersName = [
  'Александр',
  'Андрей',
  'Артём',
  'Иван',
  'Игорь',
  'Миша',
  'Маша',
  'Надя',
  'Оля',
  'Юля'
];

const description =
  [
    'Нет никаких правил для хороших фотографий, есть только хорошие фотографии',
    'Если у меня и есть что сказать новичку, то это то, что в фотографии нет коротких путей',
    'Конечно, все дело в удаче',
    'В каждой фотографии всегда есть два человека: фотограф и зритель',
    'Для меня фотография – это искусство наблюдения',
    'Мир просто не укладывается в формат 35-мм камеры',
    'Послушайте, я не интеллигент - я просто фотографирую',
    'Для фотографа важнее иметь очень хорошую обувь, чем очень хорошую камеру',
    'Покупка Nikon не делает вас фотографом. Она делает вас владельцем Nikon',
    'Фотография подбирает факт из жизни, и он будет жить вечно'
  ];

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

/*
//Случайный элемент массива
const getRandomArrayElement = (elements) => {
  return elements[getRandom(0,elements.length - 1)];
};
*/

//Функция для создания списка комментариев
const createUsersPhotoComments = () => {
  const usersCommentsMessage = getRandomNum(0, message.length - 1);
  const usersCommentsName = getRandomNum(0, usersName.length - 1);
  return {
    id: getRandomNum(1, 200),
    avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
    message: message[usersCommentsMessage],
    name: usersName[usersCommentsName]
  };
};

//создаем массив объектов списка комментариев
const generateUsersPhotoCommenets = Array.from({ length: getRandomNum(1, 5) }, createUsersPhotoComments);

//начинаем с функции по созданию объекта
const createUserPhotoDescription = () => {
  const userRandomId = createRandomId(1, 25);
  const userRandomUrl = createRandomId(1, 25);
  const userRandomDescription = getRandomNum(0, description.length - 1);
  const userRandomLikes = getRandomNum(15, 200);
  return {
    id: userRandomId(),
    url: `photos/${userRandomUrl()}.jpg`,
    description: description[userRandomDescription],
    likes: userRandomLikes,
    comments: generateUsersPhotoCommenets,
  };
};
//console.log(createUserPhotoDescription());
