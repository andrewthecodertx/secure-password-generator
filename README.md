# Secure Password Generator

A secure password generator written in TypeScript that generates cryptographically strong random passwords.

## Installation

```bash
npm install @andrewthecoder/secure-password-generator
```

## Usage

```typescript
import { generate } from 'secure-password-generator';

// Generate a password between 8 and 12 characters
const password = generate(8, 12);
console.log(password);
```

## Features

- Cryptographically secure random number generation
- Configurable password length range
- Unbiased character selection
- Written in TypeScript with full type definitions
- Comprehensive test suite

## API

### generate(minLength: number, maxLength: number): string

Generates a random password with length between minLength and maxLength (inclusive).

Parameters:

- minLength: Minimum password length (must be >= 1)
- maxLength: Maximum password length (must be >= minLength)

Returns:

- A random password string

Throws:

- PasswordGenerationError if parameters are invalid

## License

MIT
