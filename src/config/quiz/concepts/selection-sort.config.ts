import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "selection-sort",
  category: "concepts",
  title: "Selection Sort",
  description:
    "Review selection-based sorting, swaps, invariants, and complexity.",
  accent: "green",
  questionIds: [
    "selection-sort-01",
    "selection-sort-02",
    "selection-sort-03",
    "selection-sort-04",
    "selection-sort-05",
    "selection-sort-06",
    "selection-sort-07",
    "selection-sort-08",
    "selection-sort-09",
    "selection-sort-10",
    "selection-sort-11",
    "selection-sort-12",
    "selection-sort-13",
    "selection-sort-14",
    "selection-sort-15",
    "selection-sort-16",
    "selection-sort-17",
    "selection-sort-18",
    "selection-sort-19",
    "selection-sort-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "selection-sort-01",
    topicId: "selection-sort",
    prompt:
      "Which statement best describes the core purpose of Selection Sort?",
    options: [
      "each pass selects an extreme element for the next final position",
      "Model Selection Sort as a simple adjacent-pair scan",
      "Use a flat array when Selection Sort needs structural relationships",
      "Assume Selection Sort solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "each pass selects an extreme element for the next final position This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-02",
    topicId: "selection-sort",
    prompt:
      "Which interview clue most strongly suggests considering Selection Sort?",
    options: [
      "The input needs one lookup instead of Selection Sort",
      "you are studying simple in-place comparison sorting with few swaps",
      "Only neighboring elements matter, so Selection Sort adds no value",
      "Each item is independent with no Selection Sort relationship to model",
    ],
    correctOption: 1,
    explanation:
      "you are studying simple in-place comparison sorting with few swaps This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-03",
    topicId: "selection-sort",
    prompt:
      "What is the most useful invariant to maintain when applying Selection Sort?",
    options: [
      "Never update Selection Sort state after a transition",
      "Discard all Selection Sort intermediate state",
      "Maintain a condition that remains true as the Selection Sort algorithm progresses",
      "Let Selection Sort violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Selection Sort algorithm progresses This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-04",
    topicId: "selection-sort",
    prompt:
      "When using a standard efficient implementation of Selection Sort, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Selection Sort's input size",
      "Treat every Selection Sort operation as O(1)",
      "Analyze code length instead of Selection Sort's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-05",
    topicId: "selection-sort",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Selection Sort?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Selection Sort's auxiliary storage",
      "Ignore references retained by Selection Sort",
      "Assume iterative Selection Sort uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-06",
    topicId: "selection-sort",
    prompt:
      "Which edge case should be checked explicitly in a robust Selection Sort solution?",
    options: [
      "Test only a typical Selection Sort input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Selection Sort",
      "Avoid empty or malformed Selection Sort state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-07",
    topicId: "selection-sort",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Selection Sort solution?",
    options: [
      "Mutate Selection Sort before recording needed information",
      "Reuse stale Selection Sort references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Selection Sort boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-08",
    topicId: "selection-sort",
    prompt:
      "What is the best reason to compare Selection Sort with an alternative approach before coding?",
    options: [
      "Choose Selection Sort because it is familiar",
      "Prefer more memory than Selection Sort without benefit",
      "Compare code length, not Selection Sort's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-09",
    topicId: "selection-sort",
    prompt:
      "Which input property can materially change how you implement Selection Sort?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Selection Sort input is ordered or mutable",
      "Assume Selection Sort works for every input shape",
      "Skip Selection Sort's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-10",
    topicId: "selection-sort",
    prompt:
      "What should algorithmic state represent in a clean Selection Sort solution?",
    options: [
      "Store all input details for Selection Sort",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Selection Sort state",
      "Use unnamed global Selection Sort state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-11",
    topicId: "selection-sort",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Selection Sort?",
    options: [
      "Revisit Selection Sort state with no stopping rule",
      "Recurse through Selection Sort without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Selection Sort after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-12",
    topicId: "selection-sort",
    prompt:
      "What is the strongest way to reason about correctness for Selection Sort in an interview?",
    options: [
      "Claim Selection Sort works because it passed one example",
      "Explain Selection Sort without a preserved property",
      "Skip how Selection Sort maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-13",
    topicId: "selection-sort",
    prompt:
      "Before optimizing a working Selection Sort solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Selection Sort before measuring it",
      "Assume Selection Sort's slowest operation cannot improve",
      "Focus on style instead of Selection Sort's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-14",
    topicId: "selection-sort",
    prompt:
      "Which implementation habit most improves reliability for Selection Sort?",
    options: [
      "Use ambiguous Selection Sort names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Selection Sort updates across branches",
      "Rely on implicit Selection Sort side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-15",
    topicId: "selection-sort",
    prompt:
      "Which test strategy is most useful for validating a Selection Sort implementation?",
    options: [
      "Test Selection Sort only on large random inputs",
      "Skip Selection Sort duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Selection Sort works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-16",
    topicId: "selection-sort",
    prompt: "When should you avoid forcing Selection Sort onto a problem?",
    options: [
      "Use Selection Sort for every collection problem",
      "Force Selection Sort onto input lacking required structure",
      "Ignore a simpler representation than Selection Sort",
      "When the problem lacks the assumptions or structure that make Selection Sort correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Selection Sort correct or efficient This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-17",
    topicId: "selection-sort",
    prompt:
      "When explaining a Selection Sort solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Selection Sort before stating its state",
      "Describe Selection Sort syntax but omit steps",
      "Avoid Selection Sort's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-18",
    topicId: "selection-sort",
    prompt:
      "Why should constraints be examined before selecting Selection Sort?",
    options: [
      "Pick Selection Sort before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Selection Sort meets limits without estimating",
      "Treat Selection Sort constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-19",
    topicId: "selection-sort",
    prompt:
      "What is the main value of dry-running a Selection Sort solution on a small example?",
    options: [
      "Dry-run Selection Sort only after finishing",
      "Trace Selection Sort without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Selection Sort boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Selection Sort.",
  },
  {
    id: "selection-sort-20",
    topicId: "selection-sort",
    prompt:
      "After solving a Selection Sort problem, which review question best improves interview readiness?",
    options: [
      "Memorize Selection Sort code without assumptions",
      "Judge Selection Sort only by acceptance",
      "Skip how Selection Sort changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Selection Sort.",
  },
];
