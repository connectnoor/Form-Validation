let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('conPwd');
let submitBtn = document.getElementById('submit');
let form = document.getElementById('myform');

function validateForm() {
    // validation for username
    if (username.value.trim() === '') {
        onError(username, "Username is must required")
    }
    else {
        onSuccess(username);
    }
     // validation for Email
    if (email.value.trim() === '') {
        onError(email, "Email is must required")
    }
    else {
        onSuccess(email);
    }
     // validation for Password
    if (password.value.trim() === '') {
        onError(password, "Password is must required")
    }
    else if (password.value.trim().length < 5) {
        onError(password, "Password must be 5 characters long")
    }
    else {
        onSuccess(password);
    }
     // validation for confirm password
     if (confirmPassword.value.trim() === '') {
        onError(confirmPassword, "Confirmation of password required")
    }
    else if (confirmPassword.value.trim() !== password.value.trim()) {
        onError(confirmPassword, "Confirm Password does not match");
    }
    else {
        onSuccess(confirmPassword);
        alert("You registered")
    }
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm()
})

function onError(id, message) {
    let parent = id.parentElement;
    let messageEl = parent.querySelector('small');
    messageEl.innerHTML = message;
    messageEl.style.visibility = 'visible';
}
function onSuccess(id) {
    let parent = id.parentElement;
    let messageEl = parent.querySelector('small');
    messageEl.innerHTML = 'Username is required';
    messageEl.style.visibility = 'hidden';
}


