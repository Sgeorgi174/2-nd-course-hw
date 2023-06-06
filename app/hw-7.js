//TASK 1
const someStr = 'Я сТроКа'
console.log(someStr.toUpperCase());

//TASK 2
const newArr = []
const searchStart = (arr, str) => {
    arr.forEach(element => {
        if (element.toUpperCase().includes(str.toUpperCase())){
            newArr.push(element)
        }
    });
    return newArr
}
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'К'));

//TASK 3
let num = 32.58884
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//TASK 4
const numberArr = [52, 53, 49, 77, 21, 32]
console.log(Math.max(...numberArr));
console.log(Math.min(...numberArr));

//TASK 5
const randomNumber = () => Math.floor(Math.random() * (10 - 1)) + 1
console.log(randomNumber());

//TASK 6
const createArr = (num) => {
    const arr = []
    arr.length = Math.floor(num / 2)
    for (let i = 0; i < arr.length; i++){
        arr[i] = Math.round(Math.random() * num)
    }
    return arr
}
console.log(createArr(15));

//TASK 7
const someNumber = (minValue, maxValue ) => Math.round(Math.random() * (maxValue - minValue) + minValue)
console.log(someNumber(5, 10));

//TASK 8
const today = new Date
const option = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    };
console.log(today.toLocaleDateString('ru-RU', option));

//TASK 9
let currentDate = new Date
currentDate.getDate(currentDate.setDate(73))
console.log(currentDate);

//TASK 10
const regDate = (date = new Date) => {
    const day = {day: 'numeric'}
    const month = {month: 'long'}
    const year = {year: 'numeric'}
    const weekDay = {weekday: 'long'}
    let currDate = `Дата: ${today.toLocaleDateString('ru-RU', day)} ${today.toLocaleDateString('ru-RU', month).replace(/ь/gi, 'я')} ${today.toLocaleDateString('ru-RU', year)} - это ${today.toLocaleDateString('ru-RU', weekDay)}`
    let currTime = `Время: ${date.toLocaleTimeString('ru-RU')}`
    let fullDate =  `${currDate}
${currTime}`
    return fullDate
}
console.log(regDate());

//TASK 11
const wordsArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
const playSecondBtn = document.querySelector('#play-second-game')
const playWordGame = () => {    
    shuffleArr = wordsArr.sort(() => Math.random() - 0.5);
    alert(shuffleArr)
    const alertsList = {
        twoOfTwo: 'Поздравляю, вы все правильно угадали',
        oneOfTwo: 'Вы были близки к победе!',
        zeroOfTwo: 'К сожалению, вы ничего не угадали :('

    }
    const firstUserAnswer = prompt(`Чему равнялся первый элемент массива?`)
    const secondUserAnswer = prompt(`Чему равнялся последний элемент массива?`)
    const firstAnswer = shuffleArr[0]
    const secondAnswer = shuffleArr[shuffleArr.length - 1]

    if ((firstUserAnswer.toLowerCase() == firstAnswer.toLowerCase()) && (secondUserAnswer.toLowerCase() == secondAnswer.toLowerCase())) {
        alert(alertsList.twoOfTwo)
    } else if ((firstUserAnswer.toLowerCase() == firstAnswer.toLowerCase()) || (secondUserAnswer.toLowerCase() == secondAnswer.toLowerCase())) {
        alert(alertsList.oneOfTwo)
    } else {
        alert(alertsList.zeroOfTwo)
    }
}

playSecondBtn.addEventListener('click', function(){
    playWordGame()
})






