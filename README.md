![Coding Pattern Playground preview](https://raw.githubusercontent.com/ravindrasinghshah/coding-pattern-playground/refs/heads/main/public/social-preview.jpg)

# Introduction

Coding Pattern Playground is a local, browser-based interview-prep app with two complementary ways to practice: rebuild common coding templates from memory and review algorithms, data structures, and complexity concepts with multiple-choice quizzes.

Coding submissions are parsed in the browser and never executed or uploaded. The goal is to strengthen both your recall of reusable algorithm shapes and your understanding of when and why those techniques work.

## Live demo

Try Coding Pattern Playground in your browser: [interviewprep.ravindrasinghshah.com](https://interviewprep.ravindrasinghshah.com/)

Bookmark the app for quick access: [https://interviewprep.ravindrasinghshah.com/](https://interviewprep.ravindrasinghshah.com/)

The deployed app and the local development version use the same client-side validation and local progress storage. The deployed site uses Google Analytics for general usage measurement; code entered in the editor is never included in analytics events.

## Why use it?

- Practice the structure of a solution without copying a finished answer.
- Receive feedback on loops, pointers, accumulators, traversal order, and other essential concepts.
- Use alternate variable names and formatting; validation is based on the syntax tree.
- Reveal a canonical answer when you are stuck without automatically completing the drill.
- Review 42 quiz topics covering coding patterns, data structures, core concepts, and Big O analysis.
- Check each quiz answer immediately and read an explanation of the underlying reasoning.
- Track completed drills and correctly answered quiz questions locally with no account, backend, or AI service.

## Practice coding templates

1. Start the app and choose a pattern from the practice library.
2. Open a drill and read its prompt and mental model.
3. Complete the starter TypeScript template in the editor from memory.
4. Select **Validate template** to see structural feedback for each rule.
5. Fix the missing concepts and validate again until the template passes.
6. Use **Show answer** for the canonical implementation when needed. Showing it does not mark the drill complete.

Completed drill IDs are stored in your browser's `localStorage`. Use **Reset progress** on the library screen to clear them.

## Review with quizzes

1. Select **Quiz** in the app navigation.
2. Choose a topic from the quiz library. Topics are grouped across coding patterns, data structures, core concepts, and Big O analysis.
3. Select an answer and choose **Check answer**.
4. Review the correct answer and its explanation, then continue to the next question.
5. Return to a topic later to resume at its first unanswered question.

Answer choices are shuffled each time a topic is opened. A question counts toward progress only when answered correctly, and quiz progress is stored separately from coding-drill progress in your browser's `localStorage`. You can reset one topic from its card or use **Reset quiz progress** to clear all quiz results. The quiz library also remembers whether you prefer its card or list view.

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

1. Add the matching typed entry to [`src/config/practiceCatalog.config.ts`](src/config/practiceCatalog.config.ts), including its stable ID, prompt, explanation, reference link, rules, and versioned validation descriptor.
2. Add canonical, alternate-format, and adversarial fixtures where the validator has meaningful edge cases.
3. Run the test suite. Tests verify that source templates and catalog requirements stay in sync.

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
  components/            Practice and quiz dashboards and workspaces
  config/                Typed drill and quiz catalogs
    quiz/                 Quiz topics and question banks
  data/                  Human-maintained template source
  lib/                   Validation, quiz evaluation, and progress APIs
  validation/            AST engine and pattern validators
  test/                  Validation fixtures and test utilities
```

## Privacy and scope

Coding Pattern Playground is intentionally a client-side app. It has no login, backend, or AI integration. Code entered into the editor remains in the browser; completed drill IDs, correctly answered quiz question IDs, and the quiz view preference are persisted locally. The hosted site uses Google Analytics to measure general page usage and navigation; submitted code is never sent as analytics data.
