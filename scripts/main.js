"use strict";

function stringIsValidNumber(str) {
    const typeofStr = typeof(str);
    if (typeofStr === "string") {
        if (str === "") {
            return false;
        }
        return !Number.isNaN(Number.parseFloat(str));
    } else if (typeofStr === "number") {
        return !Number.isNaN(str);
    }
    return false;
}

function isValidInput(input) {
    const isValid = stringIsValidNumber(input.value);
    if (isValid) {
        input.style.borderColor = "#000000";
        input.nextElementSibling.style.display = 'none';
    } else {
        input.style.borderColor = "#ff0000";
        input.nextElementSibling.style.display = 'block';
    }
    return isValid;
}

function addChild(node, text) {
    const newNode = document.createElement("p");
    newNode.textContent = text;
    node.appendChild(newNode);
}

function clearChilds(node) {
    for (let i = node.childNodes.length - 1; i > 0; --i) {
        node.removeChild(node.childNodes[i]);
    }
}

function roundToFixed(n, radix) {
    if (Number.isFinite(n)) {
        n = n.toFixed(radix);
    }
    return n;
}

const getAccumulatedMonthIncome = (earnings, extra, expenses) => {
    return earnings + extra - expenses;
}

const getTargetMonth = (targetProfit, monthIncome) => {
    return Math.ceil(targetProfit / monthIncome);
}

const inputMonthIncoming = document.querySelector("#inputIncomingMonth");
const inputExtraIncoming = document.querySelector("#inputExtraIncoming");
const inputExpensesMonth = document.querySelector("#inputExpensesMonth");
const inputPurpose = document.querySelector("#inputPurpose");
const resultList = document.querySelector("#results");
const btnProceed = document.querySelector("#proceed");
const btnClear = document.querySelector("#clear");

function onInputHandler(e) {
    isValidInput(e.target);
}

inputMonthIncoming.addEventListener("input", onInputHandler);
inputExtraIncoming.addEventListener("input", onInputHandler);
inputExpensesMonth.addEventListener("input", onInputHandler);
inputPurpose.addEventListener("input", onInputHandler);

btnProceed.onclick = (e) => {
    e.preventDefault();
    clearChilds(resultList);
    if (isValidInput(inputMonthIncoming) &&
        isValidInput(inputExtraIncoming) &&
        isValidInput(inputExpensesMonth) &&
        isValidInput(inputPurpose)) {
            calculate();
    } else {
        addChild(resultList, "Ошибка вычисления!");
    }
};

btnClear.onclick = (e) => {
    clearChilds(resultList);
}

function calculate() {
    const moneyMonth = Number.parseFloat(inputMonthIncoming.value);
    const extraMoneyMonth = Number.parseFloat(inputExtraIncoming.value);
    const expensesMonth = Number.parseFloat(inputExpensesMonth.value);
    const accumulatedMonthIncome = getAccumulatedMonthIncome(moneyMonth, extraMoneyMonth, expensesMonth);
    if (accumulatedMonthIncome <= 0) {
        addChild(resultList, "Ошибка! Вы тратите больше, чем зарабатываете!");
        addChild(resultList, "Цель не будет достигнута никогда! :'(");
        return;
    }

    addChild(resultList, `Ваш бюджет на месяц с учётом расходов составляет: ${roundToFixed(accumulatedMonthIncome, 1)}`);

    const incomeDay = accumulatedMonthIncome / 30;
    const incomeDayString = Number.isInteger(incomeDay) ? incomeDay.toString() : Math.floor(incomeDay);
    addChild(resultList, `Дневной бюджет: ${incomeDayString}`);

    const purpose = Number.parseFloat(inputPurpose.value);

    if (purpose > accumulatedMonthIncome) {
        const arbeitenMonth = getTargetMonth(purpose, accumulatedMonthIncome);
        addChild(resultList, `Ваша цель накопить ${purpose} с учётом расходов будет достигнута за ${arbeitenMonth} месяцев`);
    } else {
        addChild(resultList, `Вы уже достигли своей цели в ${purpose}!`);
    }

    if (incomeDay >= 6000) {
        addChild(resultList, "У вас высокий уровень дохода");
    } else if (incomeDay >= 3000) {
        addChild(resultList, "У вас средний уровень дохода");
    } else if (incomeDay > 0) {
        addChild(resultList, "У вас низкий уровень дохода");
    } else if (incomeDay === 0) {
        addChild(resultList, "Вы выходите в ноль");
    } else {
        addChild(resultList, "Цель не будет достигнута никогда! :'(");
    }
}
