// DOM Elements
const form = document.getElementById('contactForm');
const problemSelect = document.getElementById('problem');
const customProblemGroup = document.getElementById('customProblemGroup');
const customProblemInput = document.getElementById('customProblem');

// Show/Hide Custom Problem Input
problemSelect.addEventListener('change', () => {
    if (problemSelect.value === 'other') {
        customProblemGroup.style.display = 'block';
    } else {
        customProblemGroup.style.display = 'none';
        customProblemInput.value = ''; // Clear if not needed
    }
});

// Form Validation
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const productCode = document.getElementById('productCode').value.trim();
    const problem = document.getElementById('problem').value;
    const message = document.getElementById('message').value.trim();
    const customProblem = customProblemInput.value.trim();

    // Basic Field Validation
    if (name === "" || email === "" || phone === "" || problem === "" || message === "") {
        alert("Please fill in all required fields.");
        isValid = false;
    } else if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must be 10 digits.");
        isValid = false;
    } else if (problem === "other" && customProblem === "") {
        alert("Please specify your problem.");
        isValid = false;
    } else if (message.length < 10) {
        alert("Message must be at least 10 characters.");
        isValid = false;
    }

    // If all fields are valid, navigate to homepage
    if (isValid) {
        alert("Thank you for contacting us! We will get back to you shortly.");
        form.reset(); // Clear the form
        customProblemGroup.style.display = 'none';
        window.location.href = "fashion-e-commerce.html"; // Redirect to homepage
    }
});
