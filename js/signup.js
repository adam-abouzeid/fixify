document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const togglePasswords = document.querySelectorAll('.toggle-password');
    togglePasswords.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            const passwordInput = e.target.previousElementSibling;
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            toggle.classList.toggle('fa-eye');
            toggle.classList.toggle('fa-eye-slash');
        });
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullname = document.getElementById('fullname');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const terms = document.getElementById('terms');
        let isValid = true;
        if (fullname.value.trim().length < 2) {
            showError(fullname, 'Please enter your full name');
            isValid = false;
        } else {
            clearError(fullname);
        }
        if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(email);
        }
        if (password.value.length < 6) {
            showError(password, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            clearError(password);
        }

        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'Passwords do not match');
            isValid = false;
        } else {
            clearError(confirmPassword);
        }
        if (!terms.checked) {
            isValid = false;
            alert('Please accept the Terms & Conditions');
        }

        if (isValid) {
            console.log('Form submitted');
            //(phase2)
        }
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(input, message) {
    const formGroup = input.parentElement.closest('.form-group');
    formGroup.classList.add('error');
    const error = formGroup.querySelector('.error-message');
    error.textContent = message;
}

function clearError(input) {
    const formGroup = input.parentElement.closest('.form-group');
    formGroup.classList.remove('error');
    const error = formGroup.querySelector('.error-message');
    error.textContent = '';
} 