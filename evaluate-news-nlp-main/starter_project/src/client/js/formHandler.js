import { validateURL } from './nameChecker.js';

const serverURL = 'http://localhost:8000/analyze-url';

export function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // Validate the URL
    if (validateURL(formText)) {
        // Send the URL to the server
        fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: formText }), // Ensure this matches the server's expected format
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // Display the results in the #results div
                document.getElementById('results').innerHTML = `
                    <p><strong>Analysis Results:</strong></p>
                    <p>${JSON.stringify(data)}</p>
                `;
            })
            .catch((error) => {
                console.error('Error:', error);
                document.getElementById('results').innerHTML = `
                    <p><strong>Error:</strong> ${error.message}</p>
                `;
            });
    } else {
        alert('Please enter a valid URL.');
    }
}