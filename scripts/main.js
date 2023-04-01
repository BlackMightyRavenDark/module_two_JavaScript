import { validateInputBox } from "./func.js";
import { validateAll } from "./func.js";

const inputBoxEmail = document.querySelector("#email-registration");
const inputBoxPassword = document.querySelector("#password-registration");
const checkBox = document.querySelector("#checkbox-registration");
const btnAuthorize = document.querySelector("#btn-authorize");
const btnRegister = document.querySelector("#register");

inputBoxEmail.addEventListener("focus", (e) => {
    validateInputBox(e.target);
});

inputBoxPassword.addEventListener("focus", (e) => {
    validateInputBox(e.target);
});

btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateAll(inputBoxEmail, inputBoxPassword, checkBox)) {
        const dataObj = {
            email: inputBoxEmail.value,
            password: inputBoxPassword.value
        };

        const json = JSON.stringify(dataObj);
        console.log(json);
    }
});

btnAuthorize.addEventListener("click", (e) => {
    e.preventDefault();
    document.location.href = "/auth.html";
});
