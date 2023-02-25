"use strict";

console.log("Script \"main.js\" started");

function showError() {
    console.error("error");
    document.writeln("Ошибка ввода!<br>");
    alert("Ошибка ввода!");
}

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

const money = parseFloat(prompt("Ваш месячный доход?"));
if (isValidNumber(money)) {
    const profit = "фриланс, вёрстка, хакинг";
    const extraMoney = parseFloat(prompt(`Ваш возможный доход за дополнительные работы (${profit}):`));
    if (isValidNumber(extraMoney)) {
        const expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую:");
        if (expenses !== "" && expenses.includes(",")) {
            const amount = parseFloat(prompt("Во сколько обойдутся обязательные статьи расходов?"));
            if (isValidNumber(amount)) {
                const depositExists = confirm("Есть ли у вас вклад в банке? OK - Да, Cancel - Нет");
                const accumulatedMonthIncome = getAccumulatedMonthIncome(money, extraMoney, amount);
                if (accumulatedMonthIncome > 0) {
                    logOutput(`Ваш бюджет на месяц с учётом ваших расходов составляет: ${roundToFixed(accumulatedMonthIncome, 1)}`);

                    const incomeDay = accumulatedMonthIncome / 30;
                    const incomeDayString = Number.isInteger(incomeDay) ? incomeDay.toString() : Math.floor(incomeDay);
                    logOutput(`Дневной бюджет: ${incomeDayString}`);

                    const purpose = parseFloat(prompt("Сколько вы хотите заработать?"));
                    if (isValidNumber(purpose)) {
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
                            logOutput("К сожалению, вы тратите больше, чем зарабатываете!");
                        }
                    } else {
                        showError();
                    }
                } else {
                    logOutput("К сожалению, Вы тратите больше, чем зарабатываете!");
                }
            } else {
                showError();
            }
        } else {
            showError();
        }
    } else {
        showError();
    }
} else {
    showError();
}

console.log("Script \"main.js\" finished");
