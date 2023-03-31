const inputBoxEmail = document.querySelector("#email-authorization");
const inputBoxPassword = document.querySelector("#password-authorization");
const checkBox = document.querySelector("#checkbox-authorization");
const btnLogin = document.querySelector("#btn-login");
const btnRegister = document.querySelector("#btn-register");

function validateInputBox(inputBox, errorText) {
    if (typeof(errorText) === "string") {
        inputBox.previousElementSibling.style.color = 'red';
        inputBox.style.borderColor = 'red';
        inputBox.nextElementSibling.textContent = errorText;
        inputBox.nextElementSibling.style.display = 'block';
        return false;
    } else {
        inputBox.previousElementSibling.style.color = 'black';
        inputBox.style.borderColor = 'black';
        inputBox.nextElementSibling.style.display = 'none';
        return true;
    }
}

function validateEmail(email) {
    if (email === null || email === "") {
        return validateInputBox(inputBoxEmail, "Поле обязательно для заполнения");
    }

    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validateInputBox(inputBoxEmail, email.match(pattern) ? null : "Введите правильный email");
}

function validatePassword(pw) {
    if (pw === null || pw === "") {
        return validateInputBox(inputBoxPassword, "Поле обязательно для заполнения");
    }

    return validateInputBox(inputBoxPassword, pw.length >= 8 ? null : "Пароль не должен быть короче 8 символов");
}

function validateCheckBox(checkBox) {
    const errorLabel = checkBox.nextElementSibling.nextElementSibling;
    if (checkBox.checked) {
        errorLabel.style.display = 'none';
        checkBox.previousElementSibling.style.color = 'black';
        return true;
    } else {
        errorLabel.style.display = 'block';
        checkBox.previousElementSibling.style.color = 'red';
        return false;
    }
}

function validateAll() {
    const bool1 = validateEmail(inputBoxEmail.value);
    const bool2 = validatePassword(inputBoxPassword.value);
    const bool3 = validateCheckBox(checkBox);
    return bool1 && bool2 && bool3;
}

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
    validateAll();
});
