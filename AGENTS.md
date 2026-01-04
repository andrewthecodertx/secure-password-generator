# AGENTS.md - Guidelines for AI Coding Agents

Guidelines for AI agents working on `@andrewthecoder/secure-password-generator`.

## Project Overview

Cryptographically secure password generator using Node.js `crypto.randomBytes()`.
Small ESM package with a single main function and custom error class.

## Repository Structure

```
src/
  index.ts              # Main library (generate function, PasswordGenerationError)
  __tests__/
    index.test.ts       # Jest test suite
dist/                   # Compiled output (gitignored)
```

## Build Commands

```bash
npm install             # Install dependencies
npm run build           # Build TypeScript to JavaScript
npm test                # Run all tests
npx tsc --noEmit        # Type check without emitting
```

### Running Single Tests

```bash
# Run a single test file
npx jest src/__tests__/index.test.ts

# Run a single test by name pattern
npx jest -t "generates password with correct length range"

# Run tests in watch mode
npx jest --watch

# Run tests with coverage
npx jest --coverage
```

## TypeScript Configuration

- **Target:** ES2018 | **Module:** ESNext (ESM) | **Strict Mode:** Enabled
- **Declaration Files:** Generated | **Output:** `./dist`
- Maintain `esModuleInterop: true` and `moduleResolution: node`

## Testing

- **Framework:** Jest with ts-jest, Node environment
- Test files: `src/__tests__/*.test.ts`
- Import from source using `.js` extension: `import { generate } from '../index.js'`

```typescript
import { generate, PasswordGenerationError } from '../index.js';

describe('Feature Name', () => {
  test('descriptive test name', () => {
    const result = generate(8, 12);
    expect(result.length).toBeGreaterThanOrEqual(8);
  });

  test('throws error for invalid input', () => {
    expect(() => generate(0, 10)).toThrow(PasswordGenerationError);
  });
});
```

## Code Style

### Imports

- ESM syntax: `import { x } from 'module'`
- Node.js built-ins first: `import { randomBytes } from 'crypto'`
- Local imports use `.js` extension (ESM requirement)

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Functions | camelCase | `generate` |
| Classes | PascalCase | `PasswordGenerationError` |
| Constants | camelCase/UPPER_SNAKE | `chars`, `MAX_LENGTH` |
| Variables | camelCase | `minLength` |

### Error Handling

```typescript
export class PasswordGenerationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PasswordGenerationError';
  }
}

// Validate early, throw with clear message
if (minLength < 1) {
  throw new PasswordGenerationError('Minimum length must be at least 1');
}
```

### Function Structure

1. Input validation first
2. Variable declarations
3. Main logic
4. Return statement

### Type Annotations

- Always annotate function parameters and return types
- Let TypeScript infer simple variable types

```typescript
export function generate(minLength: number, maxLength: number): string {
  const chars = 'ABC...';  // inference works here
  return result;
}
```

### Comments

- Use `//` for single-line comments
- Comment non-obvious logic (e.g., bias prevention)
- No JSDoc needed - types are self-documenting

## Security Considerations

This is a security-focused library:

1. **Always use `crypto.randomBytes()`** - Never `Math.random()`
2. **Prevent modulo bias** - Reject values that would bias selection
3. **Validate all inputs** - Check bounds before processing
4. **No external dependencies** - Only Node.js built-in crypto

## Common Tasks

### Adding a Feature

1. Implement in `src/index.ts`
2. Export from the module
3. Add tests in `src/__tests__/index.test.ts`
4. Run `npm test` then `npm run build`

### Fixing a Bug

1. Write a failing test first
2. Fix the issue
3. Verify test passes
4. Run full test suite

## Publishing

```bash
npm run prepare         # Runs build automatically
npm publish             # Publish to npm (requires auth)
```

## Files to Never Commit

- `node_modules/`
- `dist/`
- `.DS_Store`
- `.env` or credentials
