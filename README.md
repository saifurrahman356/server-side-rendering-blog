## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.
- Git installed.

Check your Bun installation:

```bash
bun --version
```

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd server-side-rendering-blog
```

### 2. Initialize the project (if starting from scratch)

```bash
bun init
```

### 3. Install dependencies

Install the runtime dependencies:

```bash
bun add express nunjucks
```

Install development dependencies:

```bash
bun add -d typescript @types/node @types/express @types/nunjucks tsx
```

Install Bun type definitions:

```bash
bun add -d @types/bun
```

Install Chokidar for file watching:

```bash
bun add chokidar
```

### 4. Configure TypeScript

Create or update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "types": ["node", "bun"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

### 5. Configure package scripts

Add the following scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "bun --watch src/index.ts",
    "start": "bun src/index.ts",
    "typecheck": "tsc --noEmit"
  }
}
```

### 6. Run the application

Start the development server:

```bash
bun run dev
```

Run TypeScript type checking:

```bash
bun run typecheck
```

For production-style execution:

```bash
bun run start
```

### 7. Open the application

Visit:

http://localhost:3000
