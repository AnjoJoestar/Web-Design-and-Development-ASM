// Form Validation and Navigation
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-msg').forEach(msg => msg.textContent = '');

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

    // If valid, navigate to home
    if (isValid) {
        alert("Login successful! Redirecting...");
        window.location.href = "fashion-e-commerce.html"; // Adjust this to your homepage
    }
});

// Social Login Simulation
function socialLogin(provider) {
    alert(`Login successful with ${provider.toUpperCase()}! Redirecting...`);
    window.location.href = "fashion-e-commerce.html"; // Adjust this to your homepage
}
