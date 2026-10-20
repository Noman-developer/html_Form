// Basic client-side validation for the registration form

document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();
    clearErrors();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var terms = document.getElementById("terms").checked;

    var valid = true;

    if (name === "") {
        showError("nameError", "Please enter your name.");
        valid = false;
    }

    if (email === "") {
        showError("emailError", "Please enter your email.");
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        valid = false;
    }

    if (password === "") {
        showError("passwordError", "Please enter a password.");
        valid = false;
    } else if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters.");
        valid = false;
    }

    if (!gender) {
        showError("genderError", "Please select your gender.");
        valid = false;
    }

    if (country === "") {
        showError("countryError", "Please select your country.");
        valid = false;
    }

    if (!terms) {
        showError("termsError", "You must accept the Terms & Conditions.");
        valid = false;
    }

    if (valid) {
        showSuccess(name, email, gender.value, country, message);
    }
});

function showError(id, text) {
    document.getElementById(id).textContent = text;
}

function clearErrors() {
    var errors = document.querySelectorAll(".error");
    for (var i = 0; i < errors.length; i++) {
        errors[i].textContent = "";
    }
}

function showSuccess(name, email, gender, country, message) {
    var summary = document.getElementById("summary");
    summary.innerHTML = "";
    var items = [
        "Name: " + name,
        "Email: " + email,
        "Gender: " + gender,
        "Country: " + country,
        "Message: " + (message === "" ? "(none)" : message)
    ];
    for (var i = 0; i < items.length; i++) {
        var li = document.createElement("li");
        li.textContent = items[i];
        summary.appendChild(li);
    }
    document.getElementById("successBox").classList.remove("hidden");
}
