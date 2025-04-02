document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const successMessage = document.getElementById("successMessage");
    const strengthMeter = document.getElementById("strengthMeter");
    const togglePassword = document.querySelector(".toggle-password");
    const passwordError = document.getElementById("password-error"); // Create this element in HTML

    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    function checkPasswordStrength(password) {
        let strengthMeter = document.getElementById("password-strength"); // Ensure this element exists
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        let passwordValidationMessage = "";

        if (password.length < 6) {
            strengthMeter.style.background = "red"; 
            strengthMeter.textContent = "Weak";
            passwordValidationMessage = "Password is too short. Must be at least 6 characters.";
        } else if (password.length < 8) {
            strengthMeter.style.background = "orange"; 
            strengthMeter.textContent = "Medium";
            passwordValidationMessage = "Password should be at least 8 characters.";
        } else if (!/[A-Z]/.test(password)) {
            strengthMeter.style.background = "orange"; 
            strengthMeter.textContent = "Medium";
            passwordValidationMessage = "Password must contain at least one uppercase letter.";
        } else if (!/\d/.test(password)) {
            strengthMeter.style.background = "orange"; 
            strengthMeter.textContent = "Medium";
            passwordValidationMessage = "Password must contain at least one number.";
        } else if (!/[!@#$%^&*]/.test(password)) {
            strengthMeter.style.background = "orange"; 
            strengthMeter.textContent = "Medium";
            passwordValidationMessage = "Password must contain at least one special character (!@#$%^&*).";
        } else if (passwordRegex.test(password)) {
            strengthMeter.style.background = "green";
            strengthMeter.textContent = "Strong";
            passwordValidationMessage = "";
        }

       

        // Display password error message
        passwordError.textContent = passwordValidationMessage;
    }

    password.addEventListener("input", () => {
        checkPasswordStrength(password.value);
    });
    

    togglePassword.addEventListener("click", () => {
        const isPasswordHidden = password.type === "password";
        password.type = isPasswordHidden ? "text" : "password";
        confirmPassword.type = isPasswordHidden ? "text" : "password";
        togglePassword.textContent = isPasswordHidden ? "Hide" : "Show";
    });

    // Save to LocalStorage
function saveToLocal() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
}
});



