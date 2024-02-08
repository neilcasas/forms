const password = document.querySelector('#pwd');
const confirmPassword = document.querySelector('#cpwd');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {

    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
    } else {
        alert('Login success');
    }
})
