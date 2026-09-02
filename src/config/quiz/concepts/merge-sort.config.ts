import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "merge-sort",
  category: "concepts",
  title: "Merge Sort",
  description:
    "Understand divide-and-conquer sorting, merging, stability, and trade-offs.",
  accent: "blue",
  questionIds: [
    "merge-sort-01",
    "merge-sort-02",
    "merge-sort-03",
    "merge-sort-04",
    "merge-sort-05",
    "merge-sort-06",
    "merge-sort-07",
    "merge-sort-08",
    "merge-sort-09",
    "merge-sort-10",
    "merge-sort-11",
    "merge-sort-12",
    "merge-sort-13",
    "merge-sort-14",
    "merge-sort-15",
    "merge-sort-16",
    "merge-sort-17",
    "merge-sort-18",
    "merge-sort-19",
    "merge-sort-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "merge-sort-01",
    topicId: "merge-sort",
    prompt: "Which statement best describes the core purpose of Merge Sort?",
    options: [
      "sorted halves are recursively produced and merged in linear work per level",
      "Model Merge Sort as a simple adjacent-pair scan",
      "Use a flat array when Merge Sort needs structural relationships",
      "Assume Merge Sort solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "sorted halves are recursively produced and merged in linear work per level This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-02",
    topicId: "merge-sort",
    prompt:
      "Which interview clue most strongly suggests considering Merge Sort?",
    options: [
      "The input needs one lookup instead of Merge Sort",
      "stable predictable O(n log n) sorting is useful",
      "Only neighboring elements matter, so Merge Sort adds no value",
      "Each item is independent with no Merge Sort relationship to model",
    ],
    correctOption: 1,
    explanation:
      "stable predictable O(n log n) sorting is useful This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-03",
    topicId: "merge-sort",
    prompt:
      "What is the most useful invariant to maintain when applying Merge Sort?",
    options: [
      "Never update Merge Sort state after a transition",
      "Discard all Merge Sort intermediate state",
      "Maintain a condition that remains true as the Merge Sort algorithm progresses",
      "Let Merge Sort violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Merge Sort algorithm progresses This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-04",
    topicId: "merge-sort",
    prompt:
      "When using a standard efficient implementation of Merge Sort, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Merge Sort's input size",
      "Treat every Merge Sort operation as O(1)",
      "Analyze code length instead of Merge Sort's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-05",
    topicId: "merge-sort",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Merge Sort?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Merge Sort's auxiliary storage",
      "Ignore references retained by Merge Sort",
      "Assume iterative Merge Sort uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-06",
    topicId: "merge-sort",
    prompt:
      "Which edge case should be checked explicitly in a robust Merge Sort solution?",
    options: [
      "Test only a typical Merge Sort input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Merge Sort",
      "Avoid empty or malformed Merge Sort state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-07",
    topicId: "merge-sort",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Merge Sort solution?",
    options: [
      "Mutate Merge Sort before recording needed information",
      "Reuse stale Merge Sort references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Merge Sort boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-08",
    topicId: "merge-sort",
    prompt:
      "What is the best reason to compare Merge Sort with an alternative approach before coding?",
    options: [
      "Choose Merge Sort because it is familiar",
      "Prefer more memory than Merge Sort without benefit",
      "Compare code length, not Merge Sort's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-09",
    topicId: "merge-sort",
    prompt:
      "Which input property can materially change how you implement Merge Sort?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Merge Sort input is ordered or mutable",
      "Assume Merge Sort works for every input shape",
      "Skip Merge Sort's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-10",
    topicId: "merge-sort",
    prompt:
      "What should algorithmic state represent in a clean Merge Sort solution?",
    options: [
      "Store all input details for Merge Sort",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Merge Sort state",
      "Use unnamed global Merge Sort state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-11",
    topicId: "merge-sort",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Merge Sort?",
    options: [
      "Revisit Merge Sort state with no stopping rule",
      "Recurse through Merge Sort without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Merge Sort after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-12",
    topicId: "merge-sort",
    prompt:
      "What is the strongest way to reason about correctness for Merge Sort in an interview?",
    options: [
      "Claim Merge Sort works because it passed one example",
      "Explain Merge Sort without a preserved property",
      "Skip how Merge Sort maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-13",
    topicId: "merge-sort",
    prompt:
      "Before optimizing a working Merge Sort solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Merge Sort before measuring it",
      "Assume Merge Sort's slowest operation cannot improve",
      "Focus on style instead of Merge Sort's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-14",
    topicId: "merge-sort",
    prompt:
      "Which implementation habit most improves reliability for Merge Sort?",
    options: [
      "Use ambiguous Merge Sort names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Merge Sort updates across branches",
      "Rely on implicit Merge Sort side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-15",
    topicId: "merge-sort",
    prompt:
      "Which test strategy is most useful for validating a Merge Sort implementation?",
    options: [
      "Test Merge Sort only on large random inputs",
      "Skip Merge Sort duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Merge Sort works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-16",
    topicId: "merge-sort",
    prompt: "When should you avoid forcing Merge Sort onto a problem?",
    options: [
      "Use Merge Sort for every collection problem",
      "Force Merge Sort onto input lacking required structure",
      "Ignore a simpler representation than Merge Sort",
      "When the problem lacks the assumptions or structure that make Merge Sort correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Merge Sort correct or efficient This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-17",
    topicId: "merge-sort",
    prompt:
      "When explaining a Merge Sort solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Merge Sort before stating its state",
      "Describe Merge Sort syntax but omit steps",
      "Avoid Merge Sort's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-18",
    topicId: "merge-sort",
    prompt: "Why should constraints be examined before selecting Merge Sort?",
    options: [
      "Pick Merge Sort before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Merge Sort meets limits without estimating",
      "Treat Merge Sort constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-19",
    topicId: "merge-sort",
    prompt:
      "What is the main value of dry-running a Merge Sort solution on a small example?",
    options: [
      "Dry-run Merge Sort only after finishing",
      "Trace Merge Sort without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Merge Sort boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Merge Sort.",
  },
  {
    id: "merge-sort-20",
    topicId: "merge-sort",
    prompt:
      "After solving a Merge Sort problem, which review question best improves interview readiness?",
    options: [
      "Memorize Merge Sort code without assumptions",
      "Judge Merge Sort only by acceptance",
      "Skip how Merge Sort changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Merge Sort.",
  },
];
