import { generate, PasswordGenerationError } from "./index.js";

const args = process.argv.slice(2);

// Default values
let minLength = 16;
let maxLength = 24;

// Parse arguments
if (args.includes("--help") || args.includes("-h")) {
  console.log(`Usage: password [minLength] [maxLength]

Generate a cryptographically secure random password.

Arguments:
  minLength    Minimum password length (default: 16)
  maxLength    Maximum password length (default: 24)

Options:
  -h, --help   Show this help message

Examples:
  npx @andrewthecoder/password
  npx @andrewthecoder/password 12 20
  password 32 32  # if installed globally`);
  process.exit(0);
}

if (args.length >= 1) {
  minLength = parseInt(args[0], 10);
}
if (args.length >= 2) {
  maxLength = parseInt(args[1], 10);
}

if (isNaN(minLength) || isNaN(maxLength)) {
  console.error("Error: Arguments must be valid numbers");
  process.exit(1);
}

try {
  const password = generate(minLength, maxLength);
  console.log(password);
} catch (error) {
  if (error instanceof PasswordGenerationError) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error("An unexpected error occurred");
  }
  process.exit(1);
}
