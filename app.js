
const form = document.querySelector(`#form`);
const name = document.querySelector(`#name`);
const phone = document.querySelector(`#phone`);
const email = document.querySelector(`#email`);
const password = document.querySelector(`#password`);

form.addEventListener("submit", (e) => {
    const namevalue = name.value.trim();
    const phonevalue = phone.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();

    if (namevalue == "") {
        e.preventDefault();
        alert("please provide the name!");
        name.focus();
        return false;
    }

    if (!isNaN(namevalue)) {
        e.preventDefault();
        alert("please provide a valid name!");
        name.focus();
        return false;
    }

    if (emailvalue == "") {
        e.preventDefault();
        alert("please provide a email!");
        email.focus();
        return false;
    }

    if (phonevalue == "") {
        e.preventDefault();
        alert("please provide a phone number!");
        phone.focus();
        return false;
    }

    if (phonevalue.length < 10 || phonevalue.length > 10) {
        e.preventDefault();
        alert("please provide a valid phone number!");
        phone.focus();
        return false;
    }

    if (passwordvalue == "") {
        e.preventDefault();
        alert("please provide a password!");
        password.focus();
        return false;
    }

    if (passwordvalue.length < 5) {
        e.preventDefault();
        alert("password cant be less than 5 digits!");
        password.focus();
        return false;
    }

});