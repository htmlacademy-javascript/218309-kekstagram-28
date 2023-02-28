const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = [
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
const DESCRIPTIONS = [
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
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

//Функция для создания списка комментариев
const createUsersPhotoComments = (id) => ({
  id,
  avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
  message: MESSAGES[getRandomNum(0, MESSAGES.length - 1)],
  name: NAMES[getRandomNum(0, NAMES.length - 1)]
});

//начинаем с функции по созданию объекта
const createUserPhotoDescription = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandomNum(0, DESCRIPTIONS.length - 1)],
  likes: getRandomNum(15, 200),
  comments: Array.from({length: getRandomNum(1,5)},(_,key) => createUsersPhotoComments(parseInt(id.toString() + 0 + key.toString(),10))),
});

//создаем массив объектов с описанием фотографий
const generateUserPhotoDescription = Array.from({ length: 25 },(_,key) => createUserPhotoDescription(key));

generateUserPhotoDescription();
