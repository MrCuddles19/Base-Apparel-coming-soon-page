import { emails } from "./emails.js";

const submitButton = document.querySelector('.submit-btn');
const inputField = document.querySelector('.input-field');
const inputSection = document.querySelector('.input-section');
const errorIcon = document.querySelector('.error');
const notificationRed = document.querySelector('.notification-red');
const notificationGreen = document.querySelector('.notification-green');
const loading = document.querySelector('.loading');

console.log(inputField);

inputField.addEventListener('input', () => {
    const email = inputField.value;

    // Reset states
    errorIcon.classList.remove('visible');
    notificationRed.classList.remove('appear');
    inputSection.classList.remove('red');
    notificationGreen.classList.remove('appear');

    if (!validateEmail(email) && email !== '') {
        errorIcon.classList.add('visible');
        notificationRed.classList.add('appear');
        inputSection.classList.add('red');
    }
});

submitButton.addEventListener('click', () => {
    const email = inputField.value;

    if (emails.some(emailItem => emailItem.info === email)) {
        alert('This e-mail has already been saved');
    } else {
        if (validateEmail(email)) {
            loading.classList.add('appear');
            setTimeout(() => {
                loading.classList.remove('appear');
                notificationGreen.classList.add('appear');
                setTimeout(() => {
                notificationGreen.classList.remove('appear');
                },2000)
            }, 3000);

            emails.push({ info: email });
        } else {
            errorIcon.classList.add('visible');
            notificationRed.classList.add('appear');
            inputSection.classList.add('red');
        }
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}



