// //TEST 1
// let msg;
// while(true) {
//     msg = prompt('Введите что угодно')    
//     if (msg === 'break') {
//         break;
//     }
//     if (msg === 'continue') {
//         continue;
//     }
//     console.log(msg);
// }

// //TEST 2
// const usersCityList = {
//     John: 'Paris',
//     Alex: 'Mexico city',
//     Irina: 'Moskow',
//     Dmitiri: '',
//     Katy: 'Los Angeles',
//     Mark: 'Singapore',
//     Egor: '',
//     Shelly: 'Barcelona',
//     Deny : ''    
// }

// usersCityList['Oksana'] = 'Yekaterinburg';

// for (let user in usersCityList) {
//     if (usersCityList[user] === '') {
//         console.log(`${user} didn’t share that information`);
//         continue;
//     } 
//     console.log(`${user} is living in ${usersCityList[user]}`);
// }


//TASK 1
for (let i = 0; i < 2; i++){
    console.log('Привет');
}

// TASK 2
let i = 1
do {
    console.log(i);
    i++    //первый раз забыл добавить этот пункт, пришлось перезагружать ПК =\
} while (i <= 5);

//TASK 3
for (let i = 0; i <= 22; i++) {
    if (i >= 7 && i <= 22) {
        console.log(i);
    }
}

//TASK 4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (let user in obj) {
    console.log(`${user} - зарплата ${obj[user]} долларов.`);
}

//TASK 5
let n = 1000
let num = 0
do {
   n /= 2
   num ++
} while (n > 50);
console.log(num);


//TASK 6 (вариант 1)
let friday = 5
for (let i = friday; i <= 31; i += 7){
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}


// //TASK 6 (вариант 2)
// let friday = 7
// for (let i = 1; i <= 31; i++) {
//     if (i % friday === 0) {
//         console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`)
//     }
// }