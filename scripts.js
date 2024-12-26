document.addEventListener('DOMContentLoaded', () => {
    // Handle Login Form Submission
    const loginForm = document.querySelector('form[action="login"]');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate authentication (for demonstration purposes)
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'dashboard.html';
        });
    }

    // Handle Registration Form Submission
    const registerForm = document.querySelector('form[action="register"]');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate registration (for demonstration purposes)
            alert('Registration successful! Redirecting to dashboard...');
            window.location.href = 'dashboard.html';
        });
    }
});
