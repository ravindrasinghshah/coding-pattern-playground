import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "recursion",
  category: "concepts",
  title: "Recursion",
  description:
    "Understand base cases, call stacks, recurrence, and recursive problem decomposition.",
  accent: "coral",
  questionIds: [
    "recursion-01",
    "recursion-02",
    "recursion-03",
    "recursion-04",
    "recursion-05",
    "recursion-06",
    "recursion-07",
    "recursion-08",
    "recursion-09",
    "recursion-10",
    "recursion-11",
    "recursion-12",
    "recursion-13",
    "recursion-14",
    "recursion-15",
    "recursion-16",
    "recursion-17",
    "recursion-18",
    "recursion-19",
    "recursion-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "recursion-01",
    topicId: "recursion",
    prompt: "Which statement best describes the core purpose of Recursion?",
    options: [
      "a problem is defined in terms of smaller instances with a terminating base case",
      "Model Recursion as a simple adjacent-pair scan",
      "Use a flat array when Recursion needs structural relationships",
      "Assume Recursion solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "a problem is defined in terms of smaller instances with a terminating base case This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-02",
    topicId: "recursion",
    prompt:
      "Which interview clue most strongly suggests considering Recursion?",
    options: [
      "The input needs one lookup instead of Recursion",
      "the structure naturally shrinks into similar subproblems",
      "Only neighboring elements matter, so Recursion adds no value",
      "Each item is independent with no Recursion relationship to model",
    ],
    correctOption: 1,
    explanation:
      "the structure naturally shrinks into similar subproblems This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-03",
    topicId: "recursion",
    prompt:
      "What is the most useful invariant to maintain when applying Recursion?",
    options: [
      "Never update Recursion state after a transition",
      "Discard all Recursion intermediate state",
      "Maintain a condition that remains true as the Recursion algorithm progresses",
      "Let Recursion violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Recursion algorithm progresses This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-04",
    topicId: "recursion",
    prompt:
      "When using a standard efficient implementation of Recursion, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Recursion's input size",
      "Treat every Recursion operation as O(1)",
      "Analyze code length instead of Recursion's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-05",
    topicId: "recursion",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Recursion?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Recursion's auxiliary storage",
      "Ignore references retained by Recursion",
      "Assume iterative Recursion uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-06",
    topicId: "recursion",
    prompt:
      "Which edge case should be checked explicitly in a robust Recursion solution?",
    options: [
      "Test only a typical Recursion input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Recursion",
      "Avoid empty or malformed Recursion state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-07",
    topicId: "recursion",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Recursion solution?",
    options: [
      "Mutate Recursion before recording needed information",
      "Reuse stale Recursion references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Recursion boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-08",
    topicId: "recursion",
    prompt:
      "What is the best reason to compare Recursion with an alternative approach before coding?",
    options: [
      "Choose Recursion because it is familiar",
      "Prefer more memory than Recursion without benefit",
      "Compare code length, not Recursion's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-09",
    topicId: "recursion",
    prompt:
      "Which input property can materially change how you implement Recursion?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Recursion input is ordered or mutable",
      "Assume Recursion works for every input shape",
      "Skip Recursion's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-10",
    topicId: "recursion",
    prompt:
      "What should algorithmic state represent in a clean Recursion solution?",
    options: [
      "Store all input details for Recursion",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Recursion state",
      "Use unnamed global Recursion state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-11",
    topicId: "recursion",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Recursion?",
    options: [
      "Revisit Recursion state with no stopping rule",
      "Recurse through Recursion without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Recursion after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-12",
    topicId: "recursion",
    prompt:
      "What is the strongest way to reason about correctness for Recursion in an interview?",
    options: [
      "Claim Recursion works because it passed one example",
      "Explain Recursion without a preserved property",
      "Skip how Recursion maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-13",
    topicId: "recursion",
    prompt:
      "Before optimizing a working Recursion solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Recursion before measuring it",
      "Assume Recursion's slowest operation cannot improve",
      "Focus on style instead of Recursion's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-14",
    topicId: "recursion",
    prompt:
      "Which implementation habit most improves reliability for Recursion?",
    options: [
      "Use ambiguous Recursion names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Recursion updates across branches",
      "Rely on implicit Recursion side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-15",
    topicId: "recursion",
    prompt:
      "Which test strategy is most useful for validating a Recursion implementation?",
    options: [
      "Test Recursion only on large random inputs",
      "Skip Recursion duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Recursion works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-16",
    topicId: "recursion",
    prompt: "When should you avoid forcing Recursion onto a problem?",
    options: [
      "Use Recursion for every collection problem",
      "Force Recursion onto input lacking required structure",
      "Ignore a simpler representation than Recursion",
      "When the problem lacks the assumptions or structure that make Recursion correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Recursion correct or efficient This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-17",
    topicId: "recursion",
    prompt:
      "When explaining a Recursion solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Recursion before stating its state",
      "Describe Recursion syntax but omit steps",
      "Avoid Recursion's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-18",
    topicId: "recursion",
    prompt: "Why should constraints be examined before selecting Recursion?",
    options: [
      "Pick Recursion before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Recursion meets limits without estimating",
      "Treat Recursion constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-19",
    topicId: "recursion",
    prompt:
      "What is the main value of dry-running a Recursion solution on a small example?",
    options: [
      "Dry-run Recursion only after finishing",
      "Trace Recursion without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Recursion boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Recursion.",
  },
  {
    id: "recursion-20",
    topicId: "recursion",
    prompt:
      "After solving a Recursion problem, which review question best improves interview readiness?",
    options: [
      "Memorize Recursion code without assumptions",
      "Judge Recursion only by acceptance",
      "Skip how Recursion changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Recursion.",
  },
];
