import { randomBytes } from 'crypto';

export class PasswordGenerationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PasswordGenerationError';
  }
}

export function generate(minLength: number, maxLength: number): string {
  // Input validation
  if (minLength < 1) throw new PasswordGenerationError('Minimum length must be at least 1');
  if (maxLength < minLength) throw new PasswordGenerationError('Maximum length must be greater than or equal to minimum length');

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+,.?/:;{}[]`~';

  // Generate random length between minLength and maxLength
  const lengthRange = maxLength - minLength + 1;
  const randomBytesForLength = randomBytes(4);
  const length = minLength + (randomBytesForLength.readUInt32BE(0) % lengthRange);

  // Calculate values needed for unbiased selection
  const charLen = chars.length;
  const maxrb = 256 - (256 % charLen);

  let result = '';

  // Generate password
  while (result.length < length) {
    const randomChunk = randomBytes(Math.ceil(length * 1.25)); // Get more bytes than needed to account for rejected values

    for (const byte of randomChunk) {
      if (byte >= maxrb) continue; // Skip values that would bias the selection

      result += chars[byte % charLen];
      if (result.length === length) break;
    }
  }

  return result;
}
