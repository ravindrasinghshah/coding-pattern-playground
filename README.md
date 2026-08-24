# Pattern Playground

Pattern Playground is a local, browser-based practice app for rebuilding common coding-interview templates from memory. Pick a pattern, write the structure in TypeScript, and get deterministic feedback about the ideas that are present or missing.

Your submission is parsed in the browser and never executed or uploaded. The goal is to strengthen recall of the reusable shape of an algorithm, not to grade variable names or formatting.

## Live demo

Try Pattern Playground in your browser: [coding-pattern-playground.vercel.app](https://coding-pattern-playground.vercel.app/)

Bookmark the app for quick access: [https://coding-pattern-playground.vercel.app/](https://coding-pattern-playground.vercel.app/)

The deployed app and the local development version use the same client-side validation and local progress storage.

## Why use it?

- Practice the structure of a solution without copying a finished answer.
- Receive feedback on loops, pointers, accumulators, traversal order, and other essential concepts.
- Use alternate variable names and formatting; validation is based on the syntax tree.
- Reveal a canonical answer when you are stuck without automatically completing the drill.
- Track completed drills locally with no account, backend, or AI service.

## Practice library

The current library contains 13 drills across seven patterns:

| Pattern | What you practice |
| --- | --- |
| Two Pointers | Opposite ends; traversing and exhausting two inputs |
| Sliding Window | Expanding a range and shrinking it while an invariant is broken |
| Prefix Sum | Building a prefix array; counting exact subarrays with a frequency map |
| String Building | Buffering characters and joining; direct concatenation |
| Linked List | Fast/slow pointers; in-place reversal |
| Monotonic Stack | Maintaining an increasing stack |
| Binary Tree | Recursive DFS; iterative DFS; level-order BFS |

## How to use the app

1. Start the app and choose a pattern from the practice library.
2. Open a drill and read its prompt and mental model.
3. Complete the starter TypeScript template in the editor from memory.
4. Select **Validate template** to see structural feedback for each rule.
5. Fix the missing concepts and validate again until the template passes.
6. Use **Show answer** for the canonical implementation when needed. Showing it does not mark the drill complete.

Completed drill IDs are stored in your browser's `localStorage`. Use **Reset progress** on the library screen to clear them.

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Install and run

```bash
git clone https://github.com/ravindrasinghshah/coding-pattern-playground.git
cd coding-pattern-playground
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

### Verify a change

```bash
npm test       # Run the test suite once
npm run build  # Type-check and create a production build
```

Useful additional commands:

```bash
npm run test:watch  # Re-run tests while editing
npm run preview     # Preview the production build locally
```

## Contributing

Issues and pull requests are welcome. A typical contribution looks like this:

1. Fork the repository and create a focused branch.
2. Install dependencies with `npm install`.
3. Make the smallest change that addresses the problem or improves a drill.
4. Add or update tests, including adversarial cases when changing validation.
5. Run `npm test` and `npm run build` before opening a pull request.
6. Describe the user-facing result and any validation or content decisions in the pull request.

Please keep content, validation behavior, and UI behavior separate. Avoid executing submitted code, adding network-dependent validation, or treating variable names as required unless the pattern itself depends on a specific name.

## Adding a drill or pattern

### Add a drill to an existing pattern

1. Add the canonical template and its heading to [`src/data/code-templates.md`](src/data/code-templates.md).
2. Add the matching typed entry to [`src/config/practiceCatalog.config.ts`](src/config/practiceCatalog.config.ts), including its stable ID, prompt, explanation, reference link, rules, and versioned validation descriptor.
3. Add canonical, alternate-format, and adversarial fixtures where the validator has meaningful edge cases.
4. Run the test suite. Tests verify that source templates and catalog requirements stay in sync.

### Add a new pattern

1. Add its `PatternId`, types, and validation rule IDs in [`src/types.ts`](src/types.ts) and [`src/validation/types.ts`](src/validation/types.ts) as needed.
2. Add pattern metadata and drills to [`src/config/practiceCatalog.config.ts`](src/config/practiceCatalog.config.ts).
3. Implement a `PatternValidator` in [`src/validation/patterns`](src/validation/patterns).
4. Register each supported variant in [`src/validation/registry.ts`](src/validation/registry.ts).
5. Reuse the shared AST queries and common rules where possible, then add positive and negative fixtures.

## How validation works

Submitted TypeScript is parsed into an abstract syntax tree and evaluated against named structural rules. It is never run. Validators infer meaningful roles and verify that the same variables participate throughout the template, so formatting and sensible renaming are accepted while unrelated nested helper code cannot make a submission pass.

The public validation entry point is [`src/lib/validator.ts`](src/lib/validator.ts):

```text
src/validation/
  engine.ts             Parse, evaluate, and combine results
  registry.ts           Resolve pattern and variant validators
  common.validator.ts   Shared rules such as return behavior
  ast/                  Parsing, traversal, and relationship queries
  patterns/             Pattern-specific validators
```

Each drill selects a known validator through a serializable descriptor, for example:

```ts
validation: { schemaVersion: 1, variant: "opposite-ends" }
```

This keeps content data separate from executable validation logic and leaves room for a future database or CMS adapter without storing code in content records.

## Project structure

```text
src/
  components/            Dashboard and drill editor views
  config/                Typed pattern and drill catalog
  data/                  Human-maintained template source
  lib/                   Public validation and progress APIs
  validation/            AST engine and pattern validators
  test/                  Validation fixtures and test utilities
```

## Privacy and scope

Pattern Playground is intentionally a client-side MVP. It has no login, backend, analytics, or AI integration. Code entered into the editor remains in the browser, and only completed drill IDs are persisted locally.
