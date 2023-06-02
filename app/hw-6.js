// //TEST 1
// const newspaper = {
// 	sports: 'ARod Hits Home Run',
// 	sportsWriters: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
// 	business: 'GE Stock Dips Again',
// 	businessWriters: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
// 	movies: 'Superman Is A Flop',
// 	moviesWriters: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
// }

// const newspaper = {
// 	sports : {
//         title: 'ARod Hits Home Run',
//         writters: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
//     },
//     business: {
//         title: 'GE Stock Dips Again',
//         writters: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
//     },
//     movies: {
//         title: 'Superman Is A Flop',
//         writters: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
//     },
// }

//TASK 1
const arrNumbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i <= arrNumbers.length; i++) {
    console.log(arrNumbers[i]);
    if (arrNumbers[i] === 10) {
        break;
    }
};

//TASK 2
const arr = [1, 5, 4, 10, 0, 3];
arr.forEach((el, index) => {
    if (el === 4) {
        console.log(`Число ${el} имеет ${index}-ую позицию в массиве`);
    }
});

//TASK 3
const numbers = [1, 3, 5, 10, 20];
console.log(numbers.join(' '));

//TASK 4 (вариант 1)
let multiArr = []
for (let i = 0; i <= 2; i++){
    multiArr[i] = [];
    for (let j = 0; j <= 2; j++) {
        multiArr[i][j] = 1
    } 
}
console.log(multiArr);

// //TASK 4 (вариант 2)
// let multiArr = []
// for (let i = 0; i <= 2; i++){
//     multiArr[i] = [];
//     multiArr[i].length = 3
//     multiArr[i].fill(1)
// }
// console.log(multiArr);

//TASK 5
const pushArr = [1, 1, 1]
pushArr.push(2, 2, 2)
console.log(pushArr);

//TASK 6
const differentArr = [9, 8, 7, 'a', 6, 5]
differentArr.sort().pop()
console.log(differentArr);

//TASK 7
const differentNumbers = [9, 8, 7, 6, 5]
const userAnswer = Number(prompt('Ведите любое число от 1 до 10'))
if (differentNumbers.includes(userAnswer)) {
    alert('Наш массив содержит ваше число')
} else {
    alert('Наш массив не содержит ваше число')
}

//TASK 8
let someString = 'abcdef'
console.log(someString.split('').reverse().join(''));

//TASK 9
const newArr = []
const arrs = [[1, 2, 3,],[4, 5, 6]]
for (let arr of arrs) {
    for (let el of arr) {
        newArr.push(el)
    }
}
console.log(newArr);

//TASK 10
const someArr = [1, 4, 6, 3, 5, 9]
for (let i = 0; i <= (someArr.length - 2); i++) {
    console.log(someArr[i] + someArr[i + 1])
}

//TASK 11
const arrForFunction = [1, 2, 3, 4, 5]
const cubedArr = (arr) => arr.map( el => el**2)
console.log(cubedArr(arrForFunction));

//TASK 12
const lengthWordArr = []
const wordsArr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const getLengthWords = arr => {
    arr.forEach(el => {
        lengthWordArr.push(el.length)       
    })
    return lengthWordArr
}
getLengthWords(wordsArr)
console.log(lengthWordArr)

//TASK 13
function filterPositive(array) {
    return array.filter(el => el < 0)
}
console.log(filterPositive([-1, 0, 5, -10, 56]));

//TASK 14
//создаю для начала пустой массив
const randomArr = [];
//указываю ему длинну, чтоб он заполнился пустышками
randomArr.length = 10;
//создаем цикл перебирающий элементы массива, записывая туда рандомное число
for (let i = 0; i <= randomArr.length - 1; i++){
    randomArr[i] = Math.floor(Math.random() * (10 - 0 + 1)) // запомнить как писать условия для Math.random()
}
//проверяю созданный рандомный массив
console.log(randomArr);
// создаю массив, куда буду пушить четные значения
const evenArr = []
//перебираю елементы массива
randomArr.forEach(el => el % 2 === 0 ? evenArr.push(el) : '' )
console.log(evenArr);
// либо второй способ slice создаст независимую копию и уже ее будет менять filter
const evenArrSecond = randomArr.slice().filter(el => el % 2 === 0)
console.log(evenArrSecond);

//TASK 15
//повторяю те же действия, что и выше
const randomArrSecond = [];
randomArrSecond.length = 6;
for (let i = 0; i <= randomArrSecond.length - 1; i++){
    randomArrSecond[i] = Math.floor(Math.random() * (10 - 0 + 1)) // запомнить, как писать условия для Math.random()
}
//проверяю созданный рандомный массив
console.log(randomArrSecond)
//через reduce суммирую все значения и делю на кол-во элементов в массиве (randomArrSecond.length)
console.log(randomArrSecond.reduce((a, b) => a + b) / randomArrSecond.length);











