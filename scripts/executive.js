document.getElementById('executive-login-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Validation Logic
    const email = document.getElementById('exec-email');
    const password = document.getElementById('exec-password');
    const designation = document.getElementById('exec-designation');
    const organization = document.getElementById('exec-organization');
  
    let isValid = true;
  
    // Email Validation
    if (!email.value || !email.value.includes('@')) {
      showError(email, 'Please enter a valid email address');
      isValid = false;
    } else {
      hideError(email);
    }
  
    // Password Validation
    if (!password.value || password.value.length < 6) {
      showError(password, 'Password must be at least 6 characters');
      isValid = false;
    } else {
      hideError(password);
    }
  
    // Designation Validation
    if (!designation.value) {
      showError(designation, 'Please provide your designation');
      isValid = false;
    } else {
      hideError(designation);
    }
  
    // Organization Validation
    if (!organization.value) {
      showError(organization, 'Please provide your organization name');
      isValid = false;
    } else {
      hideError(organization);
    }
  
    // Submit Form if Valid
    if (isValid) {
      alert('Login successful!');
      // Perform login logic here (e.g., AJAX request)
    }
  });
  
  function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    error.style.display = 'block';
    input.classList.add('error');
  }
  
  function hideError(input) {
    const error = input.nextElementSibling;
    error.style.display = 'none';
    input.classList.remove('error');
  }
  