// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Login Form Validation and Redirect
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    let email = document.querySelector('#email').value.trim();
    let password = document.querySelector('#password').value.trim();

    // Basic validation for empty fields
    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulating authentication (Replace this with actual backend validation)
    if (email === "farmer@example.com" && password === "password123") {
        alert('Login successful! Redirecting to dashboard...');
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
