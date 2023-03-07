"use strict";

console.log("Script \"main.js\" started");

const arr = ["808", "253", "438", "345", "266", "477", "983", "327", "445"];
arr.forEach((elem, index) => {
    const symbol = elem[0];
    if (symbol === "2" || symbol === "4") {
        console.log(`Число ${elem} с индексом ${index}`);
    }
});

const myFunc = (t) => {
    if (t === null) {
        alert("Пользователь отменил ввод!");
        return;
    }
    if (typeof(t) !== "string") {
        alert("Ошибка! В функцию была передана не строка!");
        return;
    }

    if (t === "") {
        alert("Ошибка! В функцию была передана пустая строка!");
        return;
    }

    t = t.trim();

    if (t.length > 30) {
        t = `${t.substring(0, 30)}...`;
    }

    console.log("Результат:", t);
}
myFunc(prompt("Введите что-нибудь:"));

console.log("Script \"main.js\" finished");
