import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "tries",
  category: "data-structures",
  title: "Tries",
  description:
    "Understand prefix trees, operations, complexity, and string-search applications.",
  accent: "coral",
  questionIds: [
    "tries-01",
    "tries-02",
    "tries-03",
    "tries-04",
    "tries-05",
    "tries-06",
    "tries-07",
    "tries-08",
    "tries-09",
    "tries-10",
    "tries-11",
    "tries-12",
    "tries-13",
    "tries-14",
    "tries-15",
    "tries-16",
    "tries-17",
    "tries-18",
    "tries-19",
    "tries-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "tries-01",
    topicId: "tries",
    prompt: "Which statement best describes the core purpose of Tries?",
    options: [
      "characters are stored along prefix paths so shared prefixes reuse structure",
      "Model Tries as an adjacent-pair scan",
      "Use a flat array when Tries needs structural relationships",
      "Assume Tries solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "characters are stored along prefix paths so shared prefixes reuse structure This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-02",
    topicId: "tries",
    prompt: "Which interview clue most strongly suggests considering Tries?",
    options: [
      "The input needs one lookup instead of Tries",
      "prefix lookup or dictionary search dominates",
      "Only neighboring elements matter, so Tries adds no value",
      "Each item is independent with no Tries relationship to model",
    ],
    correctOption: 1,
    explanation:
      "prefix lookup or dictionary search dominates This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-03",
    topicId: "tries",
    prompt:
      "What is the most useful invariant to maintain when applying Tries?",
    options: [
      "Never update Tries state after a transition",
      "Discard all Tries intermediate state",
      "Maintain a condition that remains true as the Tries algorithm progresses",
      "Let Tries violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Tries algorithm progresses This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-04",
    topicId: "tries",
    prompt:
      "When using a standard efficient implementation of Tries, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Tries's input size",
      "Treat every Tries operation as O(1)",
      "Analyze code length instead of Tries's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-05",
    topicId: "tries",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Tries?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Tries's auxiliary storage",
      "Ignore references retained by Tries",
      "Assume iterative Tries uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-06",
    topicId: "tries",
    prompt:
      "Which edge case should be checked explicitly in a robust Tries solution?",
    options: [
      "Test only a typical Tries input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Tries",
      "Avoid empty or malformed Tries state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-07",
    topicId: "tries",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Tries solution?",
    options: [
      "Mutate Tries before recording needed information",
      "Reuse stale Tries references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Tries boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-08",
    topicId: "tries",
    prompt:
      "What is the best reason to compare Tries with an alternative approach before coding?",
    options: [
      "Choose Tries because it is familiar",
      "Prefer more memory than Tries without benefit",
      "Compare code length, not Tries's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-09",
    topicId: "tries",
    prompt:
      "Which input property can materially change how you implement Tries?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Tries input is ordered or mutable",
      "Assume Tries works for every input shape",
      "Skip Tries's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-10",
    topicId: "tries",
    prompt:
      "What should algorithmic state represent in a clean Tries solution?",
    options: [
      "Store all input details for Tries",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Tries state",
      "Use unnamed global Tries state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-11",
    topicId: "tries",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Tries?",
    options: [
      "Revisit Tries state with no stopping rule",
      "Recurse through Tries without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Tries after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-12",
    topicId: "tries",
    prompt:
      "What is the strongest way to reason about correctness for Tries in an interview?",
    options: [
      "Claim Tries works because it passed one example",
      "Explain Tries without a preserved property",
      "Skip how Tries maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-13",
    topicId: "tries",
    prompt:
      "Before optimizing a working Tries solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Tries before measuring it",
      "Assume Tries's slowest operation cannot improve",
      "Focus on style instead of Tries's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-14",
    topicId: "tries",
    prompt: "Which implementation habit most improves reliability for Tries?",
    options: [
      "Use ambiguous Tries names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Tries updates across branches",
      "Rely on implicit Tries side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-15",
    topicId: "tries",
    prompt:
      "Which test strategy is most useful for validating a Tries implementation?",
    options: [
      "Test Tries only on large random inputs",
      "Skip Tries duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Tries works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-16",
    topicId: "tries",
    prompt: "When should you avoid forcing Tries onto a problem?",
    options: [
      "Use Tries for every collection problem",
      "Force Tries onto input lacking required structure",
      "Ignore a simpler representation than Tries",
      "When the problem lacks the assumptions or structure that make Tries correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Tries correct or efficient This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-17",
    topicId: "tries",
    prompt:
      "When explaining a Tries solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Tries before stating its state",
      "Describe Tries syntax but omit steps",
      "Avoid Tries's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-18",
    topicId: "tries",
    prompt: "Why should constraints be examined before selecting Tries?",
    options: [
      "Pick Tries before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Tries meets limits without estimating",
      "Treat Tries constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-19",
    topicId: "tries",
    prompt:
      "What is the main value of dry-running a Tries solution on a small example?",
    options: [
      "Dry-run Tries only after finishing",
      "Trace Tries without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Tries boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Tries.",
  },
  {
    id: "tries-20",
    topicId: "tries",
    prompt:
      "After solving a Tries problem, which review question best improves interview readiness?",
    options: [
      "Memorize Tries code without assumptions",
      "Judge Tries only by acceptance",
      "Skip how Tries changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Tries.",
  },
];
