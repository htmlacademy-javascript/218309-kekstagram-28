//Функция для проверки длины строки.
function checkLengthString(string, maxValue) {
  return (string.length <= maxValue);
}

//Функция для проверки, является ли строка палиндромом.
function checkStringPolindrom(string){
  let newString = string.split('').reverse().join('');
  return (string.toLowerCase().replaceAll(' ','') === newString.toLowerCase().replaceAll(' ',''));
}
