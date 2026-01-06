# Secure Password Generator

A secure password generator written in TypeScript that generates cryptographically strong random passwords.

## Installation

```bash
npm install @andrewthecoder/secure-password-generator
```

## CLI Usage

Generate passwords directly from the command line using npx:

```bash
# Generate a password with default length (16-24 characters)
npx @andrewthecoder/secure-password-generator

# Generate a password between 12 and 20 characters
npx @andrewthecoder/secure-password-generator 12 20

# Generate a password with exact length (32 characters)
npx @andrewthecoder/secure-password-generator 32 32

# Show help
npx @andrewthecoder/secure-password-generator --help
```

Or install globally:

```bash
npm install -g @andrewthecoder/secure-password-generator
secure-password-generator 16 24
```

## Library Usage

```typescript
import { generate } from '@andrewthecoder/secure-password-generator';

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
