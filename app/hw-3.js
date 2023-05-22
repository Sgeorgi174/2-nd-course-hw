// TASK 1
const password = 'Qwerty123';
let questionPass = prompt('Введите пароль');
if (questionPass === password) {
    alert('Пароль введен верно');
} else {
    alert("Пароль введен неправильно");
};


// TASK 2
let c = 7;
// c = 0;
// c = 10;
// c = -3;
// c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Не верно');
}


// TAKS 3
let d = 17;
let e = 101;
console.log((e > 100 || d > 100) ? 'Верно' : 'Не верно')


//TASK 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));


// TASK 5 (1 вариант)
let monthNumber = 12;
if (monthNumber > 0 && monthNumber <= 12) {
    switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Это зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Это весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Это лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Это осень');
        break;
    }
}


// //TASK 5 (2 вариант)
// let monthNumber = prompt('Какой номер месяца тебя интересует?')
// switch (monthNumber) {
//     case '1':
//     case '2':
//     case '12':
//         console.log('Это зима');
//         break;
//     case '3':
//     case '4':
//     case '5':
//         console.log('Это весна');
//         break;
//     case '6':
//     case '7':
//     case '8':
//         console.log('Это лето');
//         break;
//     case '9':
//     case '10':
//     case '11':
//         console.log('Это осень');
//         break;
//     default: 
//         console.log('Такого месяца не существует');

// }


//TASK 6
// Сделано


//TASK 7
let number = prompt('Пожалуйста, введите любое число')
if (isNaN(number)) {
} else {
    alert((number % 2) === 0 ? 'Число четное' : 'Число не четное') 
}



//TASK 8 and 9 (вариант 1)
const clientDeviceYear = 2015;
const clientIOS = 'Установите версию приложения для iOS по ссылке'
const clientIOSLite = 'Установите облегченную версию приложения для iOS по ссылке'
const clientAndroid = 'Установите версию приложения для Andoid по ссылке'
const clientAndroidLite = 'Установите облегченную версию приложения для Android по ссылке'
const clientWindows = 'Приложение для Windows пока не готово'

if (navigator.userAgent.includes('Windows')) {
    console.log(clientWindows);
} else if (navigator.userAgent.includes('Android')) {
    console.log((clientDeviceYear >= 2015) ? clientAndroid : clientAndroidLite);
} else if (navigator.userAgent.includes('iPhone')) { //Проверил useragent своего телефона, должно точно работать))
    console.log((clientDeviceYear >= 2015) ? clientIOS : clientIOSLite);
}


// //TASK 8 and 9 (вариант 2)
// let clientOS = 1;
// const clientDeviceYear = 2015;
// const greetingIOS = 'Установите версию приложения для iOS по ссылке'
// const greetingIOSLite = 'Установите облегченную версию приложения для iOS по ссылке'
// const greetingAndroid = 'Установите версию приложения для Andoid по ссылке'
// const greetingAndroidLite = 'Установите облегченную версию приложения для Android по ссылке'

// if (clientOS === 0) {
//     clientDeviceYear >= 2015 ? console.log(greetingIOS) : console.log(greetingIOSLite);
// } else if (clientOS === 1) {
//     clientDeviceYear >= 2015 ? console.log(greetingAndroid) : console.log(greetingAndroidLite);
// }