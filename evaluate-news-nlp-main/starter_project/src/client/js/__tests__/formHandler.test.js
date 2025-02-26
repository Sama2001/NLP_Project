// Mock the DOM
beforeAll(() => {
    document.body.innerHTML = `
        <form id="urlForm">
            <input id="name" type="text" value="https://example.com">
            <button type="submit">Submit</button>
        </form>
        <div id="results"></div>
    `;
});

// Import formHandler after the DOM is mocked
import { handleSubmit } from '../formHandler';

// Mock the fetch API
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ message: 'NLP analysis result' }),
    })
);

beforeEach(() => {
    fetch.mockClear();
});

test('handleSubmit should call fetch with the correct URL and data', () => {
    const event = { preventDefault: jest.fn() };
    handleSubmit(event);

    // Check if fetch was called with the correct arguments
    expect(fetch).toHaveBeenCalledWith('http://localhost:8000/analyze-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: 'https://example.com' }),
    });
});

test('handleSubmit should display results in the #results div', async () => {
    const event = { preventDefault: jest.fn() };
    await handleSubmit(event);

    // Check if the results are displayed
    expect(document.getElementById('results').innerHTML).toContain('NLP analysis result');
});