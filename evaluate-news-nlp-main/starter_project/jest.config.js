module.exports = {
    testEnvironment: 'jsdom', // Use jsdom to simulate a browser environment
    transform: {
        '^.+\\.js$': 'babel-jest', // Use Babel to transform JavaScript files
    },
    moduleFileExtensions: ['js'], // Specify the file extensions Jest should handle
};