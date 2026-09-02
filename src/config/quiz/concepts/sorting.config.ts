import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "sorting",
  category: "concepts",
  title: "Sorting",
  description:
    "Compare sorting algorithms, stability, in-place behavior, and complexity.",
  accent: "amber",
  questionIds: [
    "sorting-01",
    "sorting-02",
    "sorting-03",
    "sorting-04",
    "sorting-05",
    "sorting-06",
    "sorting-07",
    "sorting-08",
    "sorting-09",
    "sorting-10",
    "sorting-11",
    "sorting-12",
    "sorting-13",
    "sorting-14",
    "sorting-15",
    "sorting-16",
    "sorting-17",
    "sorting-18",
    "sorting-19",
    "sorting-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "sorting-01",
    topicId: "sorting",
    prompt: "Which statement best describes the core purpose of Sorting?",
    options: [
      "reordering data can expose structure and simplify later processing",
      "Model Sorting as a simple adjacent-pair scan",
      "Use a flat array when Sorting needs structural relationships",
      "Assume Sorting solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "reordering data can expose structure and simplify later processing This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-02",
    topicId: "sorting",
    prompt: "Which interview clue most strongly suggests considering Sorting?",
    options: [
      "The input needs one lookup instead of Sorting",
      "relative order makes duplicates, intervals, pairs, or binary search easier",
      "Only neighboring elements matter, so Sorting adds no value",
      "Each item is independent with no Sorting relationship to model",
    ],
    correctOption: 1,
    explanation:
      "relative order makes duplicates, intervals, pairs, or binary search easier This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-03",
    topicId: "sorting",
    prompt:
      "What is the most useful invariant to maintain when applying Sorting?",
    options: [
      "Never update Sorting state after a transition",
      "Discard all Sorting intermediate state",
      "Maintain a condition that remains true as the Sorting algorithm progresses",
      "Let Sorting violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Sorting algorithm progresses This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-04",
    topicId: "sorting",
    prompt:
      "When using a standard efficient implementation of Sorting, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Sorting's input size",
      "Treat every Sorting operation as O(1)",
      "Analyze code length instead of Sorting's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-05",
    topicId: "sorting",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Sorting?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Sorting's auxiliary storage",
      "Ignore references retained by Sorting",
      "Assume iterative Sorting uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-06",
    topicId: "sorting",
    prompt:
      "Which edge case should be checked explicitly in a robust Sorting solution?",
    options: [
      "Test only a typical Sorting input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Sorting",
      "Avoid empty or malformed Sorting state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-07",
    topicId: "sorting",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Sorting solution?",
    options: [
      "Mutate Sorting before recording needed information",
      "Reuse stale Sorting references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Sorting boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-08",
    topicId: "sorting",
    prompt:
      "What is the best reason to compare Sorting with an alternative approach before coding?",
    options: [
      "Choose Sorting because it is familiar",
      "Prefer more memory than Sorting without benefit",
      "Compare code length, not Sorting's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-09",
    topicId: "sorting",
    prompt:
      "Which input property can materially change how you implement Sorting?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Sorting input is ordered or mutable",
      "Assume Sorting works for every input shape",
      "Skip Sorting's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-10",
    topicId: "sorting",
    prompt:
      "What should algorithmic state represent in a clean Sorting solution?",
    options: [
      "Store all input details for Sorting",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Sorting state",
      "Use unnamed global Sorting state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-11",
    topicId: "sorting",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Sorting?",
    options: [
      "Revisit Sorting state with no stopping rule",
      "Recurse through Sorting without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Sorting after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-12",
    topicId: "sorting",
    prompt:
      "What is the strongest way to reason about correctness for Sorting in an interview?",
    options: [
      "Claim Sorting works because it passed one example",
      "Explain Sorting without a preserved property",
      "Skip how Sorting maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-13",
    topicId: "sorting",
    prompt:
      "Before optimizing a working Sorting solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Sorting before measuring it",
      "Assume Sorting's slowest operation cannot improve",
      "Focus on style instead of Sorting's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-14",
    topicId: "sorting",
    prompt: "Which implementation habit most improves reliability for Sorting?",
    options: [
      "Use ambiguous Sorting names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Sorting updates across branches",
      "Rely on implicit Sorting side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-15",
    topicId: "sorting",
    prompt:
      "Which test strategy is most useful for validating a Sorting implementation?",
    options: [
      "Test Sorting only on large random inputs",
      "Skip Sorting duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Sorting works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-16",
    topicId: "sorting",
    prompt: "When should you avoid forcing Sorting onto a problem?",
    options: [
      "Use Sorting for every collection problem",
      "Force Sorting onto input lacking required structure",
      "Ignore a simpler representation than Sorting",
      "When the problem lacks the assumptions or structure that make Sorting correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Sorting correct or efficient This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-17",
    topicId: "sorting",
    prompt:
      "When explaining a Sorting solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Sorting before stating its state",
      "Describe Sorting syntax but omit steps",
      "Avoid Sorting's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-18",
    topicId: "sorting",
    prompt: "Why should constraints be examined before selecting Sorting?",
    options: [
      "Pick Sorting before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Sorting meets limits without estimating",
      "Treat Sorting constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-19",
    topicId: "sorting",
    prompt:
      "What is the main value of dry-running a Sorting solution on a small example?",
    options: [
      "Dry-run Sorting only after finishing",
      "Trace Sorting without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Sorting boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Sorting.",
  },
  {
    id: "sorting-20",
    topicId: "sorting",
    prompt:
      "After solving a Sorting problem, which review question best improves interview readiness?",
    options: [
      "Memorize Sorting code without assumptions",
      "Judge Sorting only by acceptance",
      "Skip how Sorting changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Sorting.",
  },
];
