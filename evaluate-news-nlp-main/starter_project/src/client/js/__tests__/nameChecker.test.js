// src/client/js/__tests__/nameChecker.test.js
import { validateURL } from '../nameChecker';

test('validateURL should return true for valid URLs', () => {
    expect(validateURL('https://example.com')).toBe(true);
    expect(validateURL('http://example.com')).toBe(true);
});

test('validateURL should return false for invalid URLs', () => {
    expect(validateURL('example.com')).toBe(false);
    expect(validateURL('ftp://example.com')).toBe(false);
});