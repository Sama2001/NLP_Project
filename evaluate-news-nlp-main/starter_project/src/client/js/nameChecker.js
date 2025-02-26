// src/client/js/nameChecker.js

function validateURL(url) {
    const regex = /^(http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

export { validateURL };