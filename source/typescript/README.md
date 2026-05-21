# How to Create a TypeScript Project

This guide walks through the steps to create a new TypeScript project from scratch, based on the actual setup used in this project.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

Verify installation:

```bash
node --version
npm --version
```

## Step 1: Create Project Directory

```bash
mkdir my-typescript-project
cd my-typescript-project
```

## Step 2: Initialize npm Project

```bash
npm init -y
```

Then update `package.json` with the following scripts and settings:

```json
{
  "name": "my-typescript-project",
  "version": "1.0.0",
  "main": "dist/index.js",
  "type": "commonjs",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsx src/index.ts",
    "test": "jest"
  }
}
```

## Step 3: Install TypeScript and Dependencies

```bash
npm install --save-dev typescript @types/node
```

- `typescript` - the TypeScript compiler
- `@types/node` - Node.js type definitions (required when using `"types": ["node"]` in tsconfig)

For running TypeScript directly without compiling (used by the `dev` script):

```bash
npm install --save-dev tsx
```

## Step 4: Initialize TypeScript Configuration

```bash
npx tsc --init
```

Then update `tsconfig.json` to match the project configuration:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "types": ["node"]
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

Key settings:

- `target: "ES2022"` - compiles to modern JavaScript
- `module: "nodenext"` - uses Node.js native ESM/CJS module resolution
- `types: ["node"]` - includes Node.js built-in type definitions
- `outDir: "dist"` - compiled output goes to `dist/`
- `rootDir: "src"` - all source files live in `src/`

## Step 5: Create Your Entry Point

Create `src/index.ts`:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("World"));
```

## Step 6: Build and Run

**Build** (compile TypeScript → JavaScript):

```bash
npm run build
```

This generates `dist/index.js` from `src/index.ts`.

**Run** the compiled output:

```bash
npm start
```

Output:

```
Hello, World!
```

**Dev mode** (run TypeScript directly without compiling):

```bash
npm run dev
```

## Project Structure

```
my-typescript-project/
├── src/
│   └── index.ts
├── dist/                    (generated after npm run build)
├── node_modules/            (generated after npm install)
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## .gitignore

```
node_modules/
dist/
*.log
.env
```

## Tips and Best Practices

1. **Use strict mode** - `"strict": true` enables all strict type checks
2. **Use `tsx` for development** - avoids rebuilding on every change
3. **Keep `src/` and `dist/` separate** - never edit files in `dist/` directly
4. **Use `@types/node`** - required when accessing Node.js APIs with type safety
5. **Version control** - commit `package.json`, `tsconfig.json`, and `src/`; exclude `dist/` and `node_modules/`

## Next Steps

- Read the [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- Add testing with [Jest](https://jestjs.io/) (`npm install --save-dev jest @types/jest ts-jest`)
- Add linting with [ESLint](https://eslint.org/) (`npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`)

## Run inspector

```bash
npx @modelcontextprotocol/inspector node build/index.js
```
