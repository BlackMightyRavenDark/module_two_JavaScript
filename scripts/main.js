"use strict";

console.log("Script \"main.js\" started");

const salaries = {
    Swarzenegger: 100,
    Rambo: 160,
    IronMan: 130,
    Tanos: 200
}

let sumSalary = 0;
for (let key in salaries) {
    const currentSalary = salaries[key];
    console.log(`${key}: ${currentSalary}`);
    sumSalary += currentSalary;
}
console.log(`Суммарная зарплата: ${sumSalary}`);

const studentScores = {
    Коля: '99',
    Вася: '35',
    Петя: '70',
    Таня: '95',
    Оля:  '50',
    Саша: '20'
}
const THRESHOLD_SCORE = 80;
for (let key in studentScores) {
    const scoreValue = Number.parseInt(studentScores[key]);
    if (scoreValue < THRESHOLD_SCORE) {
        console.log(`Студент ${key} с ${scoreValue} очками вылетает!`);
        delete studentScores[key];
    }
}
console.log("Выжившие студенты:", studentScores);

console.log("Script \"main.js\" finished");
