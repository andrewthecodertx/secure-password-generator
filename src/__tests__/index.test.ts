import { generate, PasswordGenerationError } from '../index.js';

describe('Password Generator', () => {
  test('generates password with correct length range', () => {
    const minLength = 8;
    const maxLength = 12;
    const password = generate(minLength, maxLength);
    expect(password.length).toBeGreaterThanOrEqual(minLength);
    expect(password.length).toBeLessThanOrEqual(maxLength);
  });

  test('throws error for invalid minimum length', () => {
    expect(() => generate(0, 10)).toThrow(PasswordGenerationError);
  });

  test('throws error when max length is less than min length', () => {
    expect(() => generate(10, 5)).toThrow(PasswordGenerationError);
  });

  test('generates different passwords', () => {
    const password1 = generate(10, 10);
    const password2 = generate(10, 10);
    expect(password1).not.toBe(password2);
  });
});
