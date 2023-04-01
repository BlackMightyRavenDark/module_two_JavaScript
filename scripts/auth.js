import { validateInputBox } from "./func.js";
import { validateAll } from "./func.js";
import { loginUser } from "./func.js";

const inputBoxEmail = document.querySelector("#email-authorization");
const inputBoxPassword = document.querySelector("#password-authorization");
const checkBox = document.querySelector("#checkbox-authorization");
const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");

inputBoxEmail.addEventListener("focus", (e) => {
    validateInputBox(e.target);
});

inputBoxPassword.addEventListener("focus", (e) => {
    validateInputBox(e.target);
});

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    document.location.href = "/index.html";
});

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateAll(inputBoxEmail, inputBoxPassword, checkBox)) {
        const email = inputBoxEmail.value;
        const pass = inputBoxPassword.value;
        const loginResult = loginUser(email, pass);
        switch (loginResult) {
            case 0:
                alert("ok");
                break;

            case 1:
                validateInputBox(inputBoxEmail, "Юзер не зарегистрирован");
                break;

            case 2:
                validateInputBox(inputBoxPassword, "Неверный пароль");
                break;
        }
    }
});
