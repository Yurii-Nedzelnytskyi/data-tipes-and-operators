let num = prompt ('Введи тризначне число');
let last = num % 10;
let middle = Math.floor((num % 100) /10);
let first = Math.floor(num / 100);
let reversed = last * 100 + middle * 10 + first;
alert (`${reversed} твоє перевернуте число`); 