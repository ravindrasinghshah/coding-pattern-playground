import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "prefix-sums",
  category: "patterns",
  title: "Prefix Sums",
  description:
    "Use cumulative aggregates for fast range and subarray reasoning.",
  accent: "blue",
  questionIds: [
    "prefix-sums-01",
    "prefix-sums-02",
    "prefix-sums-03",
    "prefix-sums-04",
    "prefix-sums-05",
    "prefix-sums-06",
    "prefix-sums-07",
    "prefix-sums-08",
    "prefix-sums-09",
    "prefix-sums-10",
    "prefix-sums-11",
    "prefix-sums-12",
    "prefix-sums-13",
    "prefix-sums-14",
    "prefix-sums-15",
    "prefix-sums-16",
    "prefix-sums-17",
    "prefix-sums-18",
    "prefix-sums-19",
    "prefix-sums-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "prefix-sums-01",
    topicId: "prefix-sums",
    prompt: "Which statement best describes the core purpose of Prefix Sums?",
    options: [
      "precomputed cumulative values turn repeated range sums into constant-time queries",
      "Use prefix sums only after checking every candidate combination explicitly",
      "Treat prefix sums as a way to avoid defining a problem-specific invariant",
      "Apply prefix sums whenever an input contains numbers",
    ],
    correctOption: 0,
    explanation:
      "precomputed cumulative values turn repeated range sums into constant-time queries This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-02",
    topicId: "prefix-sums",
    prompt:
      "Which interview clue most strongly suggests considering Prefix Sums?",
    options: [
      "The input is stored in a linked list",
      "many range or subarray aggregate queries are required",
      "The result must be returned as a string",
      "The programming language supports recursion",
    ],
    correctOption: 1,
    explanation:
      "many range or subarray aggregate queries are required This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-03",
    topicId: "prefix-sums",
    prompt:
      "What is the most useful invariant to maintain when applying Prefix Sums?",
    options: [
      "Make the next local choice without tracking what it invalidates",
      "Reinitialize all prefix sums state after each transition",
      "Maintain a condition that remains true as the Prefix Sums algorithm progresses",
      "Preserve the current output format rather than an algorithmic condition",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Prefix Sums algorithm progresses This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-04",
    topicId: "prefix-sums",
    prompt:
      "When using a standard efficient implementation of Prefix Sums, what should you analyze first to justify its time complexity?",
    options: [
      "Count only the visible loop headers in the code",
      "Assume repeated subproblems are free once recognized",
      "Ignore preprocessing and pointer or state movement",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-05",
    topicId: "prefix-sums",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Prefix Sums?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "The storage used by variable names",
      "Only the size of the final returned value",
      "The input itself even when it is read in place",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-06",
    topicId: "prefix-sums",
    prompt:
      "Which edge case should be checked explicitly in a robust Prefix Sums solution?",
    options: [
      "Only a typical input near the average size",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "One input whose elements are all distinct",
      "The largest value without checking boundary placement",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-07",
    topicId: "prefix-sums",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Prefix Sums solution?",
    options: [
      "Choosing an explicit invariant before writing updates",
      "Separating the termination condition from the work performed",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Testing a pointer or state boundary before accessing it",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-08",
    topicId: "prefix-sums",
    prompt:
      "What is the best reason to compare Prefix Sums with an alternative approach before coding?",
    options: [
      "The familiar pattern always has the fewest lines of code",
      "A solution with more variables must be more efficient",
      "prefix sums can replace every alternative algorithm",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-09",
    topicId: "prefix-sums",
    prompt:
      "Which input property can materially change how you implement Prefix Sums?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "The font used to display the input",
      "The order in which variables are declared",
      "Whether sample output includes explanatory text",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-10",
    topicId: "prefix-sums",
    prompt:
      "What should algorithmic state represent in a clean Prefix Sums solution?",
    options: [
      "A complete log of every decision after it is no longer useful",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "A duplicate copy of all previously processed input",
      "The source-code location of the latest update",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-11",
    topicId: "prefix-sums",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Prefix Sums?",
    options: [
      "Every state variable changes on every iteration",
      "The input is guaranteed to contain a solution",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "The algorithm uses at least two loops",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-12",
    topicId: "prefix-sums",
    prompt:
      "What is the strongest way to reason about correctness for Prefix Sums in an interview?",
    options: [
      "Show a single input for which the result looks correct",
      "State that the pattern is frequently used in interviews",
      "Argue that fewer lines of code imply correctness",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-13",
    topicId: "prefix-sums",
    prompt:
      "Before optimizing a working Prefix Sums solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "The shortest-looking implementation",
      "An optimization copied from an unrelated problem",
      "A replacement data structure before measuring the current bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-14",
    topicId: "prefix-sums",
    prompt:
      "Which implementation habit most improves reliability for Prefix Sums?",
    options: [
      "Update every state variable in one compact expression",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Use generic names so the state can be reused everywhere",
      "Move all boundaries before evaluating the current state",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-15",
    topicId: "prefix-sums",
    prompt:
      "Which test strategy is most useful for validating a Prefix Sums implementation?",
    options: [
      "One large random input only",
      "Only inputs known to have a valid answer",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "A happy-path input with no duplicates or boundaries",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-16",
    topicId: "prefix-sums",
    prompt: "When should you avoid forcing Prefix Sums onto a problem?",
    options: [
      "Whenever the input contains more than one element",
      "Whenever the output is an index rather than a value",
      "Whenever the solution needs an iterative loop",
      "When the problem lacks the assumptions or structure that make Prefix Sums correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Prefix Sums correct or efficient This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-17",
    topicId: "prefix-sums",
    prompt:
      "When explaining a Prefix Sums solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "The final code before explaining the strategy",
      "Only the result for one sample input",
      "The syntax features of the chosen language",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-18",
    topicId: "prefix-sums",
    prompt: "Why should constraints be examined before selecting Prefix Sums?",
    options: [
      "Constraints only determine variable types",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "prefix sums is optimal for every array input",
      "Constraints can be ignored once a familiar pattern is recognized",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-19",
    topicId: "prefix-sums",
    prompt:
      "What is the main value of dry-running a Prefix Sums solution on a small example?",
    options: [
      "It proves correctness for all possible inputs",
      "It removes the need to test duplicates and boundaries",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "It determines complexity without tracing state movement",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Prefix Sums.",
  },
  {
    id: "prefix-sums-20",
    topicId: "prefix-sums",
    prompt:
      "After solving a Prefix Sums problem, which review question best improves interview readiness?",
    options: [
      "Can I reproduce this exact code character for character?",
      "Did I use the fewest possible local variables?",
      "Would the code still compile after renaming its variables?",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Prefix Sums.",
  },
];
