import { validateInputBox } from "./func.js";
import { validateAll } from "./func.js";

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
    validateAll(inputBoxEmail, inputBoxPassword, checkBox);
});
