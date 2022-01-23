const form = document.getElementById("form");
const FN = document.getElementById("FN");
const LN = document.getElementById("LN");
const email = document.getElementById("email");
const pwd = document.getElementById("pass");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
})

function validateForm() {
    const FN_val = FN.value.trim();
    const LN_val = LN.value.trim();
    const email_val = email.value.trim();
    const pwd_val = pwd.value.trim();

    if (FN_val === "" || FN_val === null) {
        setError(FN);
    } else {
        valid(FN);
    }

    if (LN_val === "" || LN_val === null) {
        setError(LN);
    } else {
        valid(LN);
    }

    if (email_val === "" || email_val === null) {
        setError(email);
    } else if (!isEmail(email_val)) {
        setErrorEmail(email, `${email_val} is not a Valid Email`);
    } else {
        valid(email);
    }

    if (pwd_val === "" || pwd_val === null) {
        setError(pwd);
    } else {
        valid(pwd);
    }
}


function setError(input) {
    input.parentElement.querySelector("p").classList.replace("dont-show-err", "show-err");
    input.parentElement.querySelector("img").classList.replace("dont-show-err", "show-err");
}

function valid(input) {
    input.parentElement.querySelector("p").classList.replace("show-err", "dont-show-err");
    input.parentElement.querySelector("img").classList.replace("show-err", "dont-show-err");
}

function setErrorEmail(input, message) {
    const formField = input.parentElement;
    const errElement = formField.querySelector("p");
    errElement.classList.replace("dontShow", "show");
    errElement.innerText = message;
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}