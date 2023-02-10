"use strict";

console.log("Script \"main.js\" started");

function showError() {
    console.error("error");
    document.writeln("Ошибка ввода!<br>");
    alert("Ошибка ввода!");
}

function roundToFixed(n, radix) {
    if (typeof(n) === "number" && !Number.isNaN(n) && !Number.isInteger(n)) {
        n = n.toFixed(radix);
    }
    return n;
}

let firstNumber = parseFloat(prompt("Введите первое число:"));
if (!Number.isNaN(firstNumber)) {
    const firstNumberString = Number.isInteger(firstNumber) ? firstNumber.toString() : firstNumber.toFixed(1);
    let str = `Первое число: ${firstNumberString}`;
    console.log(str);
    document.writeln(`${str}<br>`);

    let secondNumber = parseFloat(prompt("Введите второе число:"));
    if (!Number.isNaN(secondNumber)) {
        const secondNumberString = Number.isInteger(secondNumber) ? secondNumber.toString() : secondNumber.toFixed(1);
        str = `Второе число: ${secondNumberString}`;
        console.log(str);
        document.writeln(`${str}<br>`);

        const sum = roundToFixed(firstNumber + secondNumber, 1);
        const difference = roundToFixed(firstNumber - secondNumber, 1);
        const product = roundToFixed(firstNumber * secondNumber, 1);
        const quotient = roundToFixed(Math.abs(secondNumber) >= 0.001 ? firstNumber / secondNumber : "error", 1);
        const mod = roundToFixed(firstNumber % secondNumber, 1);

        str = `${firstNumberString} + ${secondNumberString} = ${sum}`;
        console.log(str);
        document.writeln(`${str}<br>`);

        str = `${firstNumberString} - ${secondNumberString} = ${difference}`;
        console.log(str);
        document.writeln(`${str}<br>`);

        str = `${firstNumberString} * ${secondNumberString} = ${product}`;
        console.log(str);
        document.writeln(`${str}<br>`);

        str = `${firstNumberString} / ${secondNumberString} = ${quotient}`;
        console.log(str);
        document.writeln(`${str}<br>`);

        str = `${firstNumberString} % ${secondNumberString} = ${mod}`;
        console.log(str);
        document.writeln(`${str}<br>`);
    } else {
        showError();
    }
} else {
    showError();
}

console.log("Script \"main.js\" finished");
