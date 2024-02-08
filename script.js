const password = document.querySelector('#pwd');
const confirmPassword = document.querySelector('#cpwd');
const form = document.querySelector('form');
const inputFields = document.querySelectorAll('input[type="text"], input[type="email"], input[type="number"], input[type="password"]');
const required = document.querySelectorAll('span');

form.addEventListener('submit', (event) => {
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
    } else {
        alert('Login success');
    }
});
