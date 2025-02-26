import { handleSubmit } from './formHandler.js'; // Correct path

// Attach the event listener to the form
const form = document.getElementById('urlForm');
if (form) {
    form.addEventListener('submit', handleSubmit);
}