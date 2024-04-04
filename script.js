let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('conPwd');
let submitBtn = document.getElementById('submit');
let form = document.getElementById('myform');

let iconPwd = document.getElementById('icon-for-pwd');
let iconConPwd = document.getElementById('icon-for-conPwd');
let eye_open = `<i class="fa-solid fa-eye"></i>`;
let eye_close = `<i class="fa-solid fa-eye-slash"></i>`;

//  for password hide and show
iconPwd.addEventListener('click', () => {
    if (iconPwd.innerHTML === eye_open) {
        iconPwd.innerHTML =  eye_close;
        password.type = "text";
    } else {
        iconPwd.innerHTML = eye_open;
        password.type = "password";
    }
});

//  for confirm password
iconConPwd.addEventListener('click', () => {
    if (iconConPwd.innerHTML === eye_open) {
        iconConPwd.innerHTML =  eye_close;
        confirmPassword.type = "text";
    } else {
        iconConPwd.innerHTML = eye_open;
        confirmPassword.type = "password";
    }
});

// form validate
function validateForm() {
    let valid = true;

    // validation for username
    if (username.value.trim() === '') {
        onError(username, "Username is required");
        valid = false;
    } else {
        onSuccess(username);
    }

    // validation for Email
    if (email.value.trim() === '') {
        onError(email, "Email is required");
        valid = false;
    } else {
        onSuccess(email);
    }

    // validation for Password
    if (password.value.trim() === '') {
        onErrorForPwd(password, "Password is required");
        valid = false;
    } else if (password.value.trim().length < 5) {
        onErrorForPwd(password, "Password must be at least 5 characters long");
        valid = false;
    } else {
        onSuccessForPwd(password);
    }

    // validation for confirm password
    if (confirmPassword.value.trim() === '') {
        onErrorForPwd(confirmPassword, "Confirmation of password is required");
        valid = false;
    } else if (confirmPassword.value.trim() !== password.value.trim()) {
        onErrorForPwd(confirmPassword, "Confirm Password does not match");
        valid = false;
    } else {
        onSuccessForPwd(confirmPassword);
    }

    if (valid) {
        alert("You have successfully registered.");
    }

    return valid;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function onError(id, message) {
    let parent = id.parentElement;
    let messageEl = parent.querySelector('small');
    messageEl.innerHTML = message;
    messageEl.style.visibility = 'visible';
}
console.log(password.parentElement.parentElement)
function onSuccess(id) {
    let parent = id.parentElement;
    let messageEl = parent.querySelector('small');
    messageEl.innerHTML = '';
    messageEl.style.visibility = 'hidden';
}

// for password section

function onErrorForPwd(id, message) {
    let parent = id.parentElement.parentElement;
    let messageEl = parent.querySelector('small');
    messageEl.innerHTML = message;
    messageEl.style.visibility = 'visible';
}

function onSuccessForPwd(id) {
    let parent = id.parentElement.parentElement;
    let messageEl = parent.querySelector('small');
    messageEl.innerHTML = '';
    messageEl.style.visibility = 'hidden';
}