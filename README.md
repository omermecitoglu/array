# Array

Provides some array utils

## Installation

Install the package using npm:

```bash
npx jsr add @omer/array
```

Or with deno:

```bash
deno add jsr:@omer/array
```

## Usage

Import the utility function and use it in your project:

```typescript
import { shuffle } from "@omer/array";

const numbers = [1, 2, 3, 4, 5];
const shuffledNumbers = shuffle(numbers);
console.log(shuffledNumbers); // Output: [3, 1, 5, 2, 4] (random order)
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
