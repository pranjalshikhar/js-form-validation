const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('confirm_password');

// add event
form.addEventListener('submit', (event) => {
    event.preventDefault();

    validate();
});

// define isEmail()
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf(".");
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}


// define validate function
const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    // validate username
    if (usernameVal === "") {
        setErrorMsg(username, 'Username cannot be blank.');
    } else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'Atleast 3 characters.');
    } else {
        setSuccessMsg(username);
    }

    // validate email
    if (emailVal === "") {
        setErrorMsg(email, 'Email cannot be blank.');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a Valid Email.');
    } else {
        setSuccessMsg(email);
    }

    // validate phone
    if (phoneVal === "") {
        setErrorMsg(phone, 'Phone cannot be blank.');
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Atleast 10 digits.');
    } else {
        setSuccessMsg(phone);
    }

    // validate password
    if (passwordVal === "") {
        setErrorMsg(password, 'Password cannot be blank.');
    } else if (passwordVal.length <= 8) {
        setErrorMsg(password, 'Atleast 8 characters.');
    } else {
        setSuccessMsg(password);
    }

    // validate cpassword
    if (cpasswordVal === "") {
        setErrorMsg(cpassword, 'Password does not match.');
    } else if (cpasswordVal !== passwordVal) {
        setErrorMsg(cpassword, 'Password does not match.');
    } else {
        setSuccessMsg(cpassword);
    }
}

// define error message
function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const smallVal = formControl.querySelector('small');
    formControl.className = "form-control error";
    smallVal.innerText = errormsgs;
}

// define success message
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}