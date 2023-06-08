// const fibonacci = [1, 1, 2, 3, 5, 8];

// // TODO: Допишите код, чтобы в консоль ниже выводились правильные значения
// // Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
// const multipleByTwoFib = (arr) => arr.map(el => el*2)
// // Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
// const plusTenFib = (arr) => arr.map(el => el + 10)
// // Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
// const onlyBigFib = (arr) => arr.filter(el => el > 3)

// console.log(multipleByTwoFib(fibonacci)); // => [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib(fibonacci)); // => [11, 11, 12, 13, 15, 18]
// console.log(onlyBigFib(fibonacci)); // => [5, 8]

// // ----------------------//

// function callbackWithArrayLength(arr, callback) {
//     // console.log(arr);
//     /* Писать код тут */
//     callback(arr.length);
//   }
  
//   callbackWithArrayLength([1], (length) => {
//     console.log(length);
//   });
  
//   callbackWithArrayLength([1, 1], (len) => {
//     console.log(len);
//   });
//   callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
//     console.log(l);
//   });

//   // -----------------------------//

//   function log(arrItem) {
//     console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
// }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// //----------------------------------//

// // TASK 1
// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];
 
//  console.log(people.sort((x, y) => x.age - y.age));

//  // TASK 2
//  const somePeople = [
//     {name: 'Глеб', gender: 'male'},
//     {name: 'Анна', gender: 'female'},
//     {name: 'Олег', gender: 'male'},
//     {name: 'Оксана', gender: 'female'}
//  ];

// function isPositive(arr) {
//    return arr.filter(el => el > 1)
//  }

// function isMale(arr) {
//     return arr.filter(el => el.gender == 'male')
//  }
// function filter(arr, callback) {
//    return callback(arr)
// }

// console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
// console.log(filter(somePeople, isMale));


// //TASK 3
// const showDate = () => console.log(new Date);
// const endTimer = () => console.log(`30 секунд прошло`);
// let timer = setInterval(showDate, 1000 * 3)
// setTimeout(() => { clearInterval(timer); endTimer(); }, 1000 * 30);

// //TASK 4
// function delayForSecond(callback) {
//     // Код писать можно только внутри этой функции
//    return setTimeout(callback, 1000)
  
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

// //TASK 5
// // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// // а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }

//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(() => sayHi('Глеб'));