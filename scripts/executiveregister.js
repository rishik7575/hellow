// Listen for form submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent default form submission

    // Run validation; if valid, alert and redirect
    if (validateForm()) {
        alert('Registration successful! Redirecting to login page...');
        window.location.href = "dashboard.html";
    }
});

// Validate the form fields
function validateForm() {
    let isValid = true;

    const name = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Reset previous error messages/styles
    resetErrors();

    // Full Name Validation
    if (name.value.trim() === "") {
        showError(name, 'nameError');
        isValid = false;
    }

    // Email Validation
    if (email.value.trim() === "" || !validateEmail(email.value)) {
        showError(email, 'emailError');
        isValid = false;
    }

    // Password Validation
    if (password.value.trim() === "") {
        showError(password, 'passwordError');
        isValid = false;
    }

    // Confirm Password Validation
    if (confirmPassword.value.trim() !== password.value.trim()) {
        showError(confirmPassword, 'confirmPasswordError');
        isValid = false;
    }

    return isValid;
}

// Display error for a specific field
function showError(inputElement, errorId) {
    inputElement.classList.add('error');
    document.getElementById(errorId).style.display = 'block';
}

// Reset error styles and messages for all inputs
function resetErrors() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
    const errorMessages = document.querySelectorAll('.error-msg');
    errorMessages.forEach(message => {
        message.style.display = 'none';
    });
}

// Validate email format using a regular expression
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
