"use strict";

console.log("Script \"main.js\" started");

const date = new Date();
const currentDayId = date.getDay() - 1;

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
for (let i = 0; i < week.length; ++i) {
    const dayName = week[i];
    let dayNameOutput = i < 5 ? dayName : `<b>${dayName}</b>`;
    if (i === currentDayId) {
        dayNameOutput = `<i>${dayNameOutput}</i> (сегодня)`;
    }
    document.write(`День ${i + 1}: ${dayNameOutput}<br>`);
}

console.log("Script \"main.js\" finished");
