// List of crops for suggestions
const crops = [
  "Wheat",
  "Rice",
  "Corn",
  "Soybean",
  "Barley",
  "Sorghum",
  "Cotton",
  "Sugarcane",
  "Potato",
  "Tomato",
  "Onion",
  "Garlic",
  "Peas",
  "Carrot",
  "Cabbage",
  "Spinach",
  "Mango",
  "Banana",
  "Apple",
  "Grapes"
];

// Input and suggestion elements for crops
const cropsInput = document.getElementById('crops');
const suggestionsList = document.getElementById('crop-suggestions');

// Display suggestions as the user types
cropsInput.addEventListener('input', function () {
  const input = this.value.toLowerCase();
  suggestionsList.innerHTML = ''; // Clear existing suggestions

  if (input) {
    const filteredCrops = crops.filter(crop =>
      crop.toLowerCase().startsWith(input)
    );

    filteredCrops.forEach(crop => {
      const listItem = document.createElement('li');
      listItem.textContent = crop;
      listItem.addEventListener('click', function () {
        cropsInput.value = crop; // Set input value to the selected crop
        suggestionsList.innerHTML = ''; // Clear suggestions
      });
      suggestionsList.appendChild(listItem);
    });
  }
});

// Close the suggestions list if the user clicks outside the input field
document.addEventListener('click', function (e) {
  if (!cropsInput.contains(e.target) && !suggestionsList.contains(e.target)) {
    suggestionsList.innerHTML = '';
  }
});

// Registration Form Submission and Storage
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();
  const cropValue = document.getElementById('crops').value.trim();
  const password = document.getElementById('password').value;

  // Basic validation for empty fields
  if (!name || !email || !phone || !address || !cropValue || !password) {
    alert('Please fill in all fields.');
    return;
  }

  // Create a user object with the registration details
  const user = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    crops: cropValue,
    password: password // Reminder: Never store plain text passwords in a production environment!
  };

  // Retrieve any existing registered users from localStorage
  let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  // Optional: Check if the email is already registered
  const emailExists = registeredUsers.some(u => u.email === email);
  if (emailExists) {
    alert("This email is already registered. Please use a different email or login.");
    return;
  }

  // Add the new user and update localStorage
  registeredUsers.push(user);
  localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

  alert('Registration successful! Redirecting to login page...');
  // Redirect to login page after successful registration
  window.location.href = "dashboard.html";
});
