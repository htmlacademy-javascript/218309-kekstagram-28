//Функция для проверки длины строки.
function checkLengthString(string, maxValue) {
  return (string.length <= maxValue);
}

//Функция для проверки, является ли строка палиндромом.
function checkStringPolindrom(string){
  let newString = string.split('').reverse().join('');
  return (string.toLowerCase().replaceAll(' ','') === newString.toLowerCase().replaceAll(' ',''));
}

/*Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN:*/
function getNumbers(string){
  let newNumber = '';
  for(let i = 0;i < string.length;i++){
    if(string[i] == Number(string[i]) && string[i] !== ' '){
      newNumber += string[i];
    }
  }
  if(newNumber === ''){
    return NaN;
  }
  return Number(newNumber);
}
