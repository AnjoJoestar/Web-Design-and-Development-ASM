document.getElementById('login-form').addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (!email || !password) {
        e.preventDefault();
        error.innerText = "All fields are required.";
        return;
    }
    if (password.length < 6) {
        e.preventDefault();
        error.innerText = "Password must be at least 6 characters.";
    }
});
