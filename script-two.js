let money = prompt ('Введи суму грошей які ти хочеш потратити на шоколад');
let price = prompt ('Напиши ціну шоколадки');
let getChocolate = Math.floor(money / price);
let change = (money % price).toFixed(2);
alert (`Ти отримаєш ${getChocolate} шоколадок і твоя здача ${change} грн`);