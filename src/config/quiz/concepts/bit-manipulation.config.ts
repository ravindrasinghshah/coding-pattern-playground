import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "bit-manipulation",
  category: "concepts",
  title: "Bit Manipulation",
  description:
    "Practice masks, shifts, XOR, set-bit tricks, and binary reasoning.",
  accent: "amber",
  questionIds: [
    "bit-manipulation-01",
    "bit-manipulation-02",
    "bit-manipulation-03",
    "bit-manipulation-04",
    "bit-manipulation-05",
    "bit-manipulation-06",
    "bit-manipulation-07",
    "bit-manipulation-08",
    "bit-manipulation-09",
    "bit-manipulation-10",
    "bit-manipulation-11",
    "bit-manipulation-12",
    "bit-manipulation-13",
    "bit-manipulation-14",
    "bit-manipulation-15",
    "bit-manipulation-16",
    "bit-manipulation-17",
    "bit-manipulation-18",
    "bit-manipulation-19",
    "bit-manipulation-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "bit-manipulation-01",
    topicId: "bit-manipulation",
    prompt:
      "Which statement best describes the core purpose of Bit Manipulation?",
    options: [
      "individual binary flags or bitwise identities can encode and transform state compactly",
      "Model Bit Manipulation as a simple adjacent-pair scan",
      "Use a flat array when Bit Manipulation needs structural relationships",
      "Assume Bit Manipulation solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "individual binary flags or bitwise identities can encode and transform state compactly This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-02",
    topicId: "bit-manipulation",
    prompt:
      "Which interview clue most strongly suggests considering Bit Manipulation?",
    options: [
      "The input needs one lookup instead of Bit Manipulation",
      "powers of two, parity, masks, subsets, or XOR cancellation appear",
      "Only neighboring elements matter, so Bit Manipulation adds no value",
      "Each item is independent with no Bit Manipulation relationship to model",
    ],
    correctOption: 1,
    explanation:
      "powers of two, parity, masks, subsets, or XOR cancellation appear This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-03",
    topicId: "bit-manipulation",
    prompt:
      "What is the most useful invariant to maintain when applying Bit Manipulation?",
    options: [
      "Never update Bit Manipulation state after a transition",
      "Discard all Bit Manipulation intermediate state",
      "Maintain a condition that remains true as the Bit Manipulation algorithm progresses",
      "Let Bit Manipulation violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Bit Manipulation algorithm progresses This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-04",
    topicId: "bit-manipulation",
    prompt:
      "When using a standard efficient implementation of Bit Manipulation, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Bit Manipulation's input size",
      "Treat every Bit Manipulation operation as O(1)",
      "Analyze code length instead of Bit Manipulation's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-05",
    topicId: "bit-manipulation",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Bit Manipulation?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Bit Manipulation's auxiliary storage",
      "Ignore references retained by Bit Manipulation",
      "Assume iterative Bit Manipulation uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-06",
    topicId: "bit-manipulation",
    prompt:
      "Which edge case should be checked explicitly in a robust Bit Manipulation solution?",
    options: [
      "Test only a typical Bit Manipulation input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Bit Manipulation",
      "Avoid empty or malformed Bit Manipulation state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-07",
    topicId: "bit-manipulation",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Bit Manipulation solution?",
    options: [
      "Mutate Bit Manipulation before recording needed information",
      "Reuse stale Bit Manipulation references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Bit Manipulation boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-08",
    topicId: "bit-manipulation",
    prompt:
      "What is the best reason to compare Bit Manipulation with an alternative approach before coding?",
    options: [
      "Choose Bit Manipulation because it is familiar",
      "Prefer more memory than Bit Manipulation without benefit",
      "Compare code length, not Bit Manipulation's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-09",
    topicId: "bit-manipulation",
    prompt:
      "Which input property can materially change how you implement Bit Manipulation?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Bit Manipulation input is ordered or mutable",
      "Assume Bit Manipulation works for every input shape",
      "Skip Bit Manipulation's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-10",
    topicId: "bit-manipulation",
    prompt:
      "What should algorithmic state represent in a clean Bit Manipulation solution?",
    options: [
      "Store all input details for Bit Manipulation",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Bit Manipulation state",
      "Use unnamed global Bit Manipulation state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-11",
    topicId: "bit-manipulation",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Bit Manipulation?",
    options: [
      "Revisit Bit Manipulation state with no stopping rule",
      "Recurse through Bit Manipulation without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Bit Manipulation after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-12",
    topicId: "bit-manipulation",
    prompt:
      "What is the strongest way to reason about correctness for Bit Manipulation in an interview?",
    options: [
      "Claim Bit Manipulation works because it passed one example",
      "Explain Bit Manipulation without a preserved property",
      "Skip how Bit Manipulation maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-13",
    topicId: "bit-manipulation",
    prompt:
      "Before optimizing a working Bit Manipulation solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Bit Manipulation before measuring it",
      "Assume Bit Manipulation's slowest operation cannot improve",
      "Focus on style instead of Bit Manipulation's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-14",
    topicId: "bit-manipulation",
    prompt:
      "Which implementation habit most improves reliability for Bit Manipulation?",
    options: [
      "Use ambiguous Bit Manipulation names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Bit Manipulation updates across branches",
      "Rely on implicit Bit Manipulation side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-15",
    topicId: "bit-manipulation",
    prompt:
      "Which test strategy is most useful for validating a Bit Manipulation implementation?",
    options: [
      "Test Bit Manipulation only on large random inputs",
      "Skip Bit Manipulation duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Bit Manipulation works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-16",
    topicId: "bit-manipulation",
    prompt: "When should you avoid forcing Bit Manipulation onto a problem?",
    options: [
      "Use Bit Manipulation for every collection problem",
      "Force Bit Manipulation onto input lacking required structure",
      "Ignore a simpler representation than Bit Manipulation",
      "When the problem lacks the assumptions or structure that make Bit Manipulation correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Bit Manipulation correct or efficient This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-17",
    topicId: "bit-manipulation",
    prompt:
      "When explaining a Bit Manipulation solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Bit Manipulation before stating its state",
      "Describe Bit Manipulation syntax but omit steps",
      "Avoid Bit Manipulation's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-18",
    topicId: "bit-manipulation",
    prompt:
      "Why should constraints be examined before selecting Bit Manipulation?",
    options: [
      "Pick Bit Manipulation before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Bit Manipulation meets limits without estimating",
      "Treat Bit Manipulation constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-19",
    topicId: "bit-manipulation",
    prompt:
      "What is the main value of dry-running a Bit Manipulation solution on a small example?",
    options: [
      "Dry-run Bit Manipulation only after finishing",
      "Trace Bit Manipulation without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Bit Manipulation boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Bit Manipulation.",
  },
  {
    id: "bit-manipulation-20",
    topicId: "bit-manipulation",
    prompt:
      "After solving a Bit Manipulation problem, which review question best improves interview readiness?",
    options: [
      "Memorize Bit Manipulation code without assumptions",
      "Judge Bit Manipulation only by acceptance",
      "Skip how Bit Manipulation changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Bit Manipulation.",
  },
];
