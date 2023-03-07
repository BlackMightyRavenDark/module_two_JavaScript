"use strict";

console.log("Script \"main.js\" started");

function isValidNumber(n) {
    return typeof(n) === "number" && !Number.isNaN(n);
}

function roundToFixed(n, radix) {
    if (!Number.isInteger(n)) {
        n = n.toFixed(radix);
    }
    return n;
}

function logOutput(s) {
    console.log(s);
    document.write(`${s}<br>`);
}

const getAccumulatedMonthIncome = (earnings, extra, expenses) => {
    return earnings + extra - expenses;
}

const getTargetMonth = (targetProfit, monthIncome) => {
    return Math.ceil(targetProfit / monthIncome);
}

const program = () => {
    let money;
    do {
        let moneyString = prompt("Ваш месячный доход?");
        if (moneyString === null) return null;
        money = parseFloat(moneyString);
    } while (!isValidNumber(money));

    const profit = "фриланс, вёрстка, хакинг";

    let extraMoney;
    do {
        let extraMoneyString = prompt(`Ваш возможный доход за дополнительные работы (${profit}):`);
        if (extraMoneyString === null) return null;
        extraMoney = parseFloat(extraMoneyString);
    } while (!isValidNumber(extraMoney));

    let expenses;
    do {
        expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую:");
        if (expenses === null) return null;
    } while (!expenses.includes(","));

    let amount;
    do {
        let amountString = prompt("Во сколько обойдутся обязательные статьи расходов?");
        if (amountString === null) return null;
        amount = parseFloat(amountString);
    } while (!isValidNumber(amount));

    const isDepositExists = confirm("Есть ли у вас вклад в банке? OK - Да, Cancel - Нет");
    logOutput(`Вклад в банке: ${isDepositExists ? "Есть" : "Нет"}`)

    const accumulatedMonthIncome = getAccumulatedMonthIncome(money, extraMoney, amount);
    if (accumulatedMonthIncome <= 0) {
        logOutput("Цель не будет достигнута никогда! :'(");
        return false;
    }

    logOutput(`Ваш бюджет на месяц с учётом ваших расходов составляет: ${roundToFixed(accumulatedMonthIncome, 1)}`);

    const incomeDay = accumulatedMonthIncome / 30;
    const incomeDayString = Number.isInteger(incomeDay) ? incomeDay.toString() : Math.floor(incomeDay);
    logOutput(`Дневной бюджет: ${incomeDayString}`);

    let purpose;
    do {
        let purposeString = prompt("Сколько вы хотите заработать?");
        if (purposeString === null) return null;
        purpose = parseFloat(purposeString);
    } while (!isValidNumber(purpose));

    if (purpose > accumulatedMonthIncome) {
        const arbeitenMonth = getTargetMonth(purpose, accumulatedMonthIncome);
        logOutput(`Ваша цель накопить ${purpose} с учётом всех ваших расхоодов будет достигнута за ${arbeitenMonth} месяцев`);
    } else {
        logOutput(`Вы уже достигли своей цели в ${purpose}!`);
    }

    if (incomeDay >= 6000) {
        logOutput("У вас высокий уровень дохода");
    } else if (incomeDay >= 3000) {
        logOutput("У вас средний уровень дохода");
    } else if (incomeDay > 0) {
        logOutput("У вас низкий уровень дохода");
    } else if (incomeDay === 0) {
        logOutput("Вы выходите в ноль");
    } else {
        logOutput("Цель не будет достигнута никогда! :'(");
    }

    return true;
}
if (program() === null) {
    logOutput("Вычисления были отменены!");
    alert("Пользователь нажал отмену");
}

console.log("Script \"main.js\" finished");
