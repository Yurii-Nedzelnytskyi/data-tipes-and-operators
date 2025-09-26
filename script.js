console.log ((0.1 +0.2).toFixed(1));

let a = '1';
let b = 2;
console.log (+a+b);

let volume = prompt ('Введіть обсяг флешки в Гб');
let sum = (volume * 1024 / 820).toFixed(0);
alert(`Поміститься ${sum} файлів.`);