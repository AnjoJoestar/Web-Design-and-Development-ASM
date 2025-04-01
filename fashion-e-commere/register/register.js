// Register Form Validation and Navigation
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-msg').forEach(msg => msg.textContent = '');

    // Validate Full Name
    const name = document.getElementById('name').value.trim();
    if (name.length < 3) {
        document.getElementById('nameError').textContent = "Full name must be at least 3 characters.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
        isValid = false;
    }

    // If valid, navigate to home
    if (isValid) {
        alert("Registration successful! Redirecting...");
        window.location.href = "fashion-e-commerce.html"; // Adjust this to your homepage
    }
});

// Social Register Simulation
function socialRegister(provider) {
    alert(`Registered successfully with ${provider.toUpperCase()}! Redirecting...`);
    window.location.href = "fashion-e-commerce.html"; // Adjust this to your homepage
}
