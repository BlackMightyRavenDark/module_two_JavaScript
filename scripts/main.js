"use strict";

console.log("Script \"main.js\" started");

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const runGame = () => {
    const hiddenNumber = randomRange(1, 10);

    function gameLoop() {
        const answer = prompt("Угадай число от 1 до 10");

        if (answer === null) {
            alert("Игра окончена");
            return;
        }

        const answeredNumber = Number.parseInt(answer);
        if (Number.isNaN(answeredNumber)) {
            alert("Введи число!");
            gameLoop();
        } else if (answeredNumber < hiddenNumber) {
            alert("Загаданное число больше");
            gameLoop();
        } else if (answeredNumber > hiddenNumber) {
            alert("Загаданное число меньше");
            gameLoop();
        } else if (answeredNumber === hiddenNumber) {
            alert("Поздравляю, Вы угадали!!!");
        }
    }

    //запуск рекурсии
    gameLoop(hiddenNumber);
};
runGame();

console.log("Script \"main.js\" finished");
