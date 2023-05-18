// TASK 1
let number = 10;
alert(number);
number = 20;
alert(number);

// TASK 2
const firstDate = '29 июня 2007 г.';
alert(firstDate);

// TASK 3
const jsCreator = 'Брендан Эйх';
alert(jsCreator);

// TASK 4
let x = 10;
let y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

//TASK 5
let result = 2**5;
alert(result);

// TASK 6
let a = 9;
let b = 2;
alert(a % b);

// TASK 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// TASK 8
const age = Number(prompt('Сколько вам лет?'))
alert(age)

// TASK 9.0
const user = {
    name: 'Ivan',
    age: 28,
    isAdmin: false 
};

// TASK 9.1
user['city of residence'] = '';

// TASK 9.2
user.age = 17;

// TASK 9.3
delete user['city of residence'];

// TASK 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// TASK 10
let userName = prompt('Как тебя зовут?');
alert(`Привет, ${userName}!`);