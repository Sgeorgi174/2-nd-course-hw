//TASK 1
const theSmallest = (first, second) => {
    if (first <= second) {
        return first
    } else {
        return second
    }
}

//TASK 2
const evenOrNot = num => {
    return num % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

//TASK 3
const square = num => {
    let result = num * num
    console.log(result);
    return result
}

//TASK 4
const howOldAreYou = () => {
    let age = Number(prompt('Сколько тебе лет?'))
    if (isNaN(age) || age < 0) {
        console.log('Вы ввели неправильное значение');
        return 'Вы ввели неправильное значение'
        
    } else if (age > 0 && age < 12) {
        console.log('Привет друг');
        return 'Привет друг'
    } else {
        console.log('Добро пожаловать!');
        return 'Добро пожаловать!'
    }
}

//TASK 5
const ifNumberMultiply = (first, second) => {
    const error = 'Одно или оба значения не являются числом'
    return (isNaN(first) || isNaN(second) || first == '' || second == '') ? error : first * second;
}

//TASK 6
const ifNumberСubed = () => {
    let number = Number(prompt('Введите число'))
    const error = 'Переданный параметр не является числом'
    let result = 0
    if (isNaN(number) || number == '') {
        return error
    } else {
        result += number**3
        return `${number} в кубе равняется ${result}`
    }
}

//TASK 7
const numberP = 3.14

function area() {
    return numberP * this.radius**2
}

function perimeter() {
    return 2 * numberP * this.radius
}

const circle1 = {
    radius: 210,
    getArea: area,
    getPerimeter: perimeter,
}

const circle2 = {
    radius: 120,
    getArea: area,
    getPerimeter: perimeter,
}

//TASK 8
//переменные для работы функции
const firstGameBtn = document.querySelector('#play-first-game')
const error = 'Месяца с таким номером не существует';
const winter = 'Зима';
const spring = 'Весна';
const summer = 'Лето';
const autumn = 'Осень';

//ВАРИАНТ 1
// работа кнопки после клика
firstGameBtn.addEventListener('click', () => {

    let userAnswear = Number(prompt('Введите номер месяца'))

    if (userAnswear > 0 && userAnswear <= 12) {
        if (userAnswear === 12 || userAnswear === 1 || userAnswear === 2) {
            console.log(winter);
            return winter;
        } else if (userAnswear === 3 || userAnswear === 4 || userAnswear === 5) {
            console.log(spring);
            return spring;
        } else if (userAnswear === 6 || userAnswear === 7 || userAnswear === 8) {
            console.log(summer);
            return summer;
        } else if (userAnswear === 9 || userAnswear === 10 || userAnswear === 11) {
            console.log(autumn);
            return autumn;
        }
    } else {
        console.log(error);
        return error
    }
})

// //ВАРИАНТ 2
// firstGameBtn.addEventListener('click', () => {

//     let userAnswear = Number(prompt('Введите номер месяца'));

//     switch (userAnswear) {
//         case 12:
//         case 1:
//         case 2:
//             console.log(winter);
//             return winter;
//         case 3:
//         case 4:
//         case 5:
//             console.log(spring);
//             return spring;
//         case 6:
//         case 7:
//         case 8:
//             console.log(summer);
//             return summer;
//         case 9:
//         case 10:
//         case 2:
//             console.log(autumn);
//             return autumn;
//         default: 
//             console.log(error);
//             return error;
//     }
// })

