"use strict";

console.log("Script \"main.js\" started");

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const runGame = () => {
    const ATTEMPT_COUNT_MAX = 10;
    const MIN_NUMBER = 1;
    const MAX_NUMBER = 50;

    alert(`Сейчас мы сыграем в игру! Отгадай число от ${MIN_NUMBER} до ${MAX_NUMBER} за ${ATTEMPT_COUNT_MAX} попыток или твой жёсткий диск будет отформатирован!`);

    const hiddenNumber = randomRange(MIN_NUMBER, MAX_NUMBER);
    let attemptsLeft = ATTEMPT_COUNT_MAX;

    function gameLoop() {
        if (attemptsLeft <= 0) {
            alert("У вас закончились попытки! К сожалению, мы были вынуждены отформатировать ваш жёсткий диск!");
            const confirmed = confirm("Хотите отменить форматирование?");
            if (confirmed) {
                runGame();
            } else {
                alert("Форматирование жёсткого диска успешно завершено!");
            }
            return;
        }
        const answer = prompt(`Угадай число от ${MIN_NUMBER} до ${MAX_NUMBER}`);

        if (answer === null) {
            alert("Игра окончена");
            return;
        }

        const answeredNumber = Number.parseInt(answer);
        if (Number.isNaN(answeredNumber)) {
            alert("Введи число!");
            gameLoop();
        } else if (answeredNumber < hiddenNumber) {
            attemptsLeft--;
            alert(`Загаданное число больше! Осталось попыток: ${attemptsLeft}`);
            gameLoop();
        } else if (answeredNumber > hiddenNumber) {
            attemptsLeft--;
            alert(`Загаданное число меньше! Осталось попыток: ${attemptsLeft}`);
            gameLoop();
        } else if (answeredNumber === hiddenNumber) {
            if (confirm("Поздравляю, Вы угадали!!! Сыграем ещё?")) {
                runGame();
            }
        }
    }

    //запуск рекурсии
    gameLoop(hiddenNumber);
};
runGame();

console.log("Script \"main.js\" finished");
