import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "greedy-vs-dp",
  category: "concepts",
  title: "Greedy vs Dynamic Programming",
  description:
    "Learn when local choices suffice and when stateful optimization is required.",
  accent: "green",
  questionIds: [
    "greedy-vs-dp-01",
    "greedy-vs-dp-02",
    "greedy-vs-dp-03",
    "greedy-vs-dp-04",
    "greedy-vs-dp-05",
    "greedy-vs-dp-06",
    "greedy-vs-dp-07",
    "greedy-vs-dp-08",
    "greedy-vs-dp-09",
    "greedy-vs-dp-10",
    "greedy-vs-dp-11",
    "greedy-vs-dp-12",
    "greedy-vs-dp-13",
    "greedy-vs-dp-14",
    "greedy-vs-dp-15",
    "greedy-vs-dp-16",
    "greedy-vs-dp-17",
    "greedy-vs-dp-18",
    "greedy-vs-dp-19",
    "greedy-vs-dp-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "greedy-vs-dp-01",
    topicId: "greedy-vs-dp",
    prompt:
      "Which statement best describes the core purpose of Greedy vs Dynamic Programming?",
    options: [
      "the key distinction is whether local decisions are safely irreversible or future choices require remembered state",
      "Model Greedy vs Dynamic Programming as a simple adjacent-pair scan",
      "Use a flat array when Greedy vs Dynamic Programming needs structural relationships",
      "Assume Greedy vs Dynamic Programming solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "the key distinction is whether local decisions are safely irreversible or future choices require remembered state This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-02",
    topicId: "greedy-vs-dp",
    prompt:
      "Which interview clue most strongly suggests considering Greedy vs Dynamic Programming?",
    options: [
      "The input needs one lookup instead of Greedy vs Dynamic Programming",
      "an optimization problem tempts a local choice but its global safety is uncertain",
      "Only neighboring elements matter, so Greedy vs Dynamic Programming adds no value",
      "Each item is independent with no Greedy vs Dynamic Programming relationship to model",
    ],
    correctOption: 1,
    explanation:
      "an optimization problem tempts a local choice but its global safety is uncertain This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-03",
    topicId: "greedy-vs-dp",
    prompt:
      "What is the most useful invariant to maintain when applying Greedy vs Dynamic Programming?",
    options: [
      "Never update Greedy vs Dynamic Programming state after a transition",
      "Discard all Greedy vs Dynamic Programming intermediate state",
      "Maintain a condition that remains true as the Greedy vs Dynamic Programming algorithm progresses",
      "Let Greedy vs Dynamic Programming violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Greedy vs Dynamic Programming algorithm progresses This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-04",
    topicId: "greedy-vs-dp",
    prompt:
      "When using a standard efficient implementation of Greedy vs Dynamic Programming, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Greedy vs Dynamic Programming's input size",
      "Treat every Greedy vs Dynamic Programming operation as O(1)",
      "Analyze code length instead of Greedy vs Dynamic Programming's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-05",
    topicId: "greedy-vs-dp",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Greedy vs Dynamic Programming?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Greedy vs Dynamic Programming's auxiliary storage",
      "Ignore references retained by Greedy vs Dynamic Programming",
      "Assume iterative Greedy vs Dynamic Programming uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-06",
    topicId: "greedy-vs-dp",
    prompt:
      "Which edge case should be checked explicitly in a robust Greedy vs Dynamic Programming solution?",
    options: [
      "Test only a typical Greedy vs Dynamic Programming input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Greedy vs Dynamic Programming",
      "Avoid empty or malformed Greedy vs Dynamic Programming state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-07",
    topicId: "greedy-vs-dp",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Greedy vs Dynamic Programming solution?",
    options: [
      "Mutate Greedy vs Dynamic Programming before recording needed information",
      "Reuse stale Greedy vs Dynamic Programming references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Greedy vs Dynamic Programming boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-08",
    topicId: "greedy-vs-dp",
    prompt:
      "What is the best reason to compare Greedy vs Dynamic Programming with an alternative approach before coding?",
    options: [
      "Choose Greedy vs Dynamic Programming because it is familiar",
      "Prefer more memory than Greedy vs Dynamic Programming without benefit",
      "Compare code length, not Greedy vs Dynamic Programming's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-09",
    topicId: "greedy-vs-dp",
    prompt:
      "Which input property can materially change how you implement Greedy vs Dynamic Programming?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Greedy vs Dynamic Programming input is ordered or mutable",
      "Assume Greedy vs Dynamic Programming works for every input shape",
      "Skip Greedy vs Dynamic Programming's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-10",
    topicId: "greedy-vs-dp",
    prompt:
      "What should algorithmic state represent in a clean Greedy vs Dynamic Programming solution?",
    options: [
      "Store all input details for Greedy vs Dynamic Programming",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Greedy vs Dynamic Programming state",
      "Use unnamed global Greedy vs Dynamic Programming state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-11",
    topicId: "greedy-vs-dp",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Greedy vs Dynamic Programming?",
    options: [
      "Revisit Greedy vs Dynamic Programming state with no stopping rule",
      "Recurse through Greedy vs Dynamic Programming without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Greedy vs Dynamic Programming after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-12",
    topicId: "greedy-vs-dp",
    prompt:
      "What is the strongest way to reason about correctness for Greedy vs Dynamic Programming in an interview?",
    options: [
      "Claim Greedy vs Dynamic Programming works because it passed one example",
      "Explain Greedy vs Dynamic Programming without a preserved property",
      "Skip how Greedy vs Dynamic Programming maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-13",
    topicId: "greedy-vs-dp",
    prompt:
      "Before optimizing a working Greedy vs Dynamic Programming solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Greedy vs Dynamic Programming before measuring it",
      "Assume Greedy vs Dynamic Programming's slowest operation cannot improve",
      "Focus on style instead of Greedy vs Dynamic Programming's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-14",
    topicId: "greedy-vs-dp",
    prompt:
      "Which implementation habit most improves reliability for Greedy vs Dynamic Programming?",
    options: [
      "Use ambiguous Greedy vs Dynamic Programming names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Greedy vs Dynamic Programming updates across branches",
      "Rely on implicit Greedy vs Dynamic Programming side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-15",
    topicId: "greedy-vs-dp",
    prompt:
      "Which test strategy is most useful for validating a Greedy vs Dynamic Programming implementation?",
    options: [
      "Test Greedy vs Dynamic Programming only on large random inputs",
      "Skip Greedy vs Dynamic Programming duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Greedy vs Dynamic Programming works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-16",
    topicId: "greedy-vs-dp",
    prompt:
      "When should you avoid forcing Greedy vs Dynamic Programming onto a problem?",
    options: [
      "Use Greedy vs Dynamic Programming for every collection problem",
      "Force Greedy vs Dynamic Programming onto input lacking required structure",
      "Ignore a simpler representation than Greedy vs Dynamic Programming",
      "When the problem lacks the assumptions or structure that make Greedy vs Dynamic Programming correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Greedy vs Dynamic Programming correct or efficient This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-17",
    topicId: "greedy-vs-dp",
    prompt:
      "When explaining a Greedy vs Dynamic Programming solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Greedy vs Dynamic Programming before stating its state",
      "Describe Greedy vs Dynamic Programming syntax but omit steps",
      "Avoid Greedy vs Dynamic Programming's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-18",
    topicId: "greedy-vs-dp",
    prompt:
      "Why should constraints be examined before selecting Greedy vs Dynamic Programming?",
    options: [
      "Pick Greedy vs Dynamic Programming before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Greedy vs Dynamic Programming meets limits without estimating",
      "Treat Greedy vs Dynamic Programming constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-19",
    topicId: "greedy-vs-dp",
    prompt:
      "What is the main value of dry-running a Greedy vs Dynamic Programming solution on a small example?",
    options: [
      "Dry-run Greedy vs Dynamic Programming only after finishing",
      "Trace Greedy vs Dynamic Programming without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Greedy vs Dynamic Programming boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
  {
    id: "greedy-vs-dp-20",
    topicId: "greedy-vs-dp",
    prompt:
      "After solving a Greedy vs Dynamic Programming problem, which review question best improves interview readiness?",
    options: [
      "Memorize Greedy vs Dynamic Programming code without assumptions",
      "Judge Greedy vs Dynamic Programming only by acceptance",
      "Skip how Greedy vs Dynamic Programming changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Greedy vs Dynamic Programming.",
  },
];
