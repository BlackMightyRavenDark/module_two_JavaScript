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

const money = parseFloat(prompt("Ваш месячный доход?"));
if (isValidNumber(money)) {
    logOutput(`Доход за месяц: ${money}`);
    const expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую:");
    if (expenses !== "" && expenses.includes(",")) {
        logOutput(`Возможные расходы: ${expenses}`);

        const amount = parseFloat(prompt("Во сколько обойдутся обязательные статьи расходов?"));
        if (isValidNumber(amount)) {
            logOutput(`Обязательные расходы: ${amount}`);
            
            const depositExists = confirm("Есть ли у вас вклад в банке? OK - Да, Cancel - Нет");
            logOutput(`Депозит в банке: ${depositExists ? "Есть" : "Нет"}`);
            const budgetMonth = money - amount;
            
            if (budgetMonth > 0) {
                logOutput(`Доход за месяц с учётом расходов: ${roundToFixed(budgetMonth, 1)}`);

                const budgetDay = budgetMonth / 30;
                const budgetDayString = Number.isInteger(budgetDay) ? budgetDay.toString() : Math.floor(budgetDay);
                logOutput(`Доход за день с учётом расходов: ${budgetDayString}`);

                const purpose = parseFloat(prompt("Сколько вы хотите заработать?"));
                if (isValidNumber(purpose)) {
                    logOutput(`Необходимо заработать: ${purpose}`);

                    const arbeiten = purpose / budgetMonth;
                    const arbeitenString = Number.isInteger(arbeiten) ? arbeiten.toString() : (Math.floor(arbeiten) + 1);
                    logOutput(`Вам необходимо работать ${arbeitenString} месяцев`);

                    if (budgetDay >= 6000) {
                        logOutput("У вас высокий уровень дохода");
                    } else if (budgetDay >= 3000) {
                        logOutput("У вас средний уровень дохода");
                    } else if (budgetDay > 0) {
                        logOutput("У вас низкий уровень дохода");
                    } else if (budgetDay == 0) {
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
console.log("Script \"main.js\" finished");
