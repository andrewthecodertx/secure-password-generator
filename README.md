# Secure Password Generator

A secure password generator written in TypeScript that generates cryptographically
strong random passwords.

## Installation

```bash
npm install @andrewthecoder/password
```

## CLI Usage

Generate passwords directly from the command line using npx:

```bash
# Generate a password with default length (16-24 characters)
npx @andrewthecoder/password

# Generate a password between 12 and 20 characters
npx @andrewthecoder/password 12 20

# Generate a password with exact length (32 characters)
npx @andrewthecoder/password 32 32

# Show help
npx @andrewthecoder/password --help
```

Or install globally:

```bash
npm install -g @andrewthecoder/password
password 16 24
```

## Library Usage

```typescript
import { generate } from "@andrewthecoder/password";

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
