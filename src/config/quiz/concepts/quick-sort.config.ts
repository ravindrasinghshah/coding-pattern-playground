import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "quick-sort",
  category: "concepts",
  title: "Quick Sort",
  description:
    "Understand partitioning, pivot choice, average/worst cases, and in-place behavior.",
  accent: "coral",
  questionIds: [
    "quick-sort-01",
    "quick-sort-02",
    "quick-sort-03",
    "quick-sort-04",
    "quick-sort-05",
    "quick-sort-06",
    "quick-sort-07",
    "quick-sort-08",
    "quick-sort-09",
    "quick-sort-10",
    "quick-sort-11",
    "quick-sort-12",
    "quick-sort-13",
    "quick-sort-14",
    "quick-sort-15",
    "quick-sort-16",
    "quick-sort-17",
    "quick-sort-18",
    "quick-sort-19",
    "quick-sort-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "quick-sort-01",
    topicId: "quick-sort",
    prompt: "Which statement best describes the core purpose of Quick Sort?",
    options: [
      "partitioning places elements around a pivot before recursively sorting partitions",
      "Model Quick Sort as a simple adjacent-pair scan",
      "Use a flat array when Quick Sort needs structural relationships",
      "Assume Quick Sort solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "partitioning places elements around a pivot before recursively sorting partitions This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-02",
    topicId: "quick-sort",
    prompt:
      "Which interview clue most strongly suggests considering Quick Sort?",
    options: [
      "The input needs one lookup instead of Quick Sort",
      "in-place average O(n log n) sorting with good practical locality is desired",
      "Only neighboring elements matter, so Quick Sort adds no value",
      "Each item is independent with no Quick Sort relationship to model",
    ],
    correctOption: 1,
    explanation:
      "in-place average O(n log n) sorting with good practical locality is desired This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-03",
    topicId: "quick-sort",
    prompt:
      "What is the most useful invariant to maintain when applying Quick Sort?",
    options: [
      "Never update Quick Sort state after a transition",
      "Discard all Quick Sort intermediate state",
      "Maintain a condition that remains true as the Quick Sort algorithm progresses",
      "Let Quick Sort violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Quick Sort algorithm progresses This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-04",
    topicId: "quick-sort",
    prompt:
      "When using a standard efficient implementation of Quick Sort, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Quick Sort's input size",
      "Treat every Quick Sort operation as O(1)",
      "Analyze code length instead of Quick Sort's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-05",
    topicId: "quick-sort",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Quick Sort?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Quick Sort's auxiliary storage",
      "Ignore references retained by Quick Sort",
      "Assume iterative Quick Sort uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-06",
    topicId: "quick-sort",
    prompt:
      "Which edge case should be checked explicitly in a robust Quick Sort solution?",
    options: [
      "Test only a typical Quick Sort input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Quick Sort",
      "Avoid empty or malformed Quick Sort state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-07",
    topicId: "quick-sort",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Quick Sort solution?",
    options: [
      "Mutate Quick Sort before recording needed information",
      "Reuse stale Quick Sort references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Quick Sort boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-08",
    topicId: "quick-sort",
    prompt:
      "What is the best reason to compare Quick Sort with an alternative approach before coding?",
    options: [
      "Choose Quick Sort because it is familiar",
      "Prefer more memory than Quick Sort without benefit",
      "Compare code length, not Quick Sort's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-09",
    topicId: "quick-sort",
    prompt:
      "Which input property can materially change how you implement Quick Sort?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Quick Sort input is ordered or mutable",
      "Assume Quick Sort works for every input shape",
      "Skip Quick Sort's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-10",
    topicId: "quick-sort",
    prompt:
      "What should algorithmic state represent in a clean Quick Sort solution?",
    options: [
      "Store all input details for Quick Sort",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Quick Sort state",
      "Use unnamed global Quick Sort state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-11",
    topicId: "quick-sort",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Quick Sort?",
    options: [
      "Revisit Quick Sort state with no stopping rule",
      "Recurse through Quick Sort without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Quick Sort after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-12",
    topicId: "quick-sort",
    prompt:
      "What is the strongest way to reason about correctness for Quick Sort in an interview?",
    options: [
      "Claim Quick Sort works because it passed one example",
      "Explain Quick Sort without a preserved property",
      "Skip how Quick Sort maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-13",
    topicId: "quick-sort",
    prompt:
      "Before optimizing a working Quick Sort solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Quick Sort before measuring it",
      "Assume Quick Sort's slowest operation cannot improve",
      "Focus on style instead of Quick Sort's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-14",
    topicId: "quick-sort",
    prompt:
      "Which implementation habit most improves reliability for Quick Sort?",
    options: [
      "Use ambiguous Quick Sort names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Quick Sort updates across branches",
      "Rely on implicit Quick Sort side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-15",
    topicId: "quick-sort",
    prompt:
      "Which test strategy is most useful for validating a Quick Sort implementation?",
    options: [
      "Test Quick Sort only on large random inputs",
      "Skip Quick Sort duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Quick Sort works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-16",
    topicId: "quick-sort",
    prompt: "When should you avoid forcing Quick Sort onto a problem?",
    options: [
      "Use Quick Sort for every collection problem",
      "Force Quick Sort onto input lacking required structure",
      "Ignore a simpler representation than Quick Sort",
      "When the problem lacks the assumptions or structure that make Quick Sort correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Quick Sort correct or efficient This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-17",
    topicId: "quick-sort",
    prompt:
      "When explaining a Quick Sort solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Quick Sort before stating its state",
      "Describe Quick Sort syntax but omit steps",
      "Avoid Quick Sort's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-18",
    topicId: "quick-sort",
    prompt: "Why should constraints be examined before selecting Quick Sort?",
    options: [
      "Pick Quick Sort before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Quick Sort meets limits without estimating",
      "Treat Quick Sort constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-19",
    topicId: "quick-sort",
    prompt:
      "What is the main value of dry-running a Quick Sort solution on a small example?",
    options: [
      "Dry-run Quick Sort only after finishing",
      "Trace Quick Sort without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Quick Sort boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Quick Sort.",
  },
  {
    id: "quick-sort-20",
    topicId: "quick-sort",
    prompt:
      "After solving a Quick Sort problem, which review question best improves interview readiness?",
    options: [
      "Memorize Quick Sort code without assumptions",
      "Judge Quick Sort only by acceptance",
      "Skip how Quick Sort changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Quick Sort.",
  },
];
