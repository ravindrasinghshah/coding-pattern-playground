import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "string-algorithms",
  category: "concepts",
  title: "Strings",
  description:
    "Review string traversal, frequency, matching, parsing, and common interview patterns.",
  accent: "green",
  questionIds: [
    "string-algorithms-01",
    "string-algorithms-02",
    "string-algorithms-03",
    "string-algorithms-04",
    "string-algorithms-05",
    "string-algorithms-06",
    "string-algorithms-07",
    "string-algorithms-08",
    "string-algorithms-09",
    "string-algorithms-10",
    "string-algorithms-11",
    "string-algorithms-12",
    "string-algorithms-13",
    "string-algorithms-14",
    "string-algorithms-15",
    "string-algorithms-16",
    "string-algorithms-17",
    "string-algorithms-18",
    "string-algorithms-19",
    "string-algorithms-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "string-algorithms-01",
    topicId: "string-algorithms",
    prompt: "Which statement best describes the core purpose of Strings?",
    options: [
      "character order and frequency structure guide matching, parsing, and substring reasoning",
      "Model Strings as a simple adjacent-pair scan",
      "Use a flat array when Strings needs structural relationships",
      "Assume Strings solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "character order and frequency structure guide matching, parsing, and substring reasoning This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-02",
    topicId: "string-algorithms",
    prompt: "Which interview clue most strongly suggests considering Strings?",
    options: [
      "The input needs one lookup instead of Strings",
      "the problem focuses on substrings, prefixes, character counts, or parsing",
      "Only neighboring elements matter, so Strings adds no value",
      "Each item is independent with no Strings relationship to model",
    ],
    correctOption: 1,
    explanation:
      "the problem focuses on substrings, prefixes, character counts, or parsing This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-03",
    topicId: "string-algorithms",
    prompt:
      "What is the most useful invariant to maintain when applying Strings?",
    options: [
      "Never update Strings state after a transition",
      "Discard all Strings intermediate state",
      "Maintain a condition that remains true as the Strings algorithm progresses",
      "Let Strings violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Strings algorithm progresses This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-04",
    topicId: "string-algorithms",
    prompt:
      "When using a standard efficient implementation of Strings, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Strings's input size",
      "Treat every Strings operation as O(1)",
      "Analyze code length instead of Strings's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-05",
    topicId: "string-algorithms",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Strings?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Strings's auxiliary storage",
      "Ignore references retained by Strings",
      "Assume iterative Strings uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-06",
    topicId: "string-algorithms",
    prompt:
      "Which edge case should be checked explicitly in a robust Strings solution?",
    options: [
      "Test only a typical Strings input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Strings",
      "Avoid empty or malformed Strings state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-07",
    topicId: "string-algorithms",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Strings solution?",
    options: [
      "Mutate Strings before recording needed information",
      "Reuse stale Strings references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Strings boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-08",
    topicId: "string-algorithms",
    prompt:
      "What is the best reason to compare Strings with an alternative approach before coding?",
    options: [
      "Choose Strings because it is familiar",
      "Prefer more memory than Strings without benefit",
      "Compare code length, not Strings's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-09",
    topicId: "string-algorithms",
    prompt:
      "Which input property can materially change how you implement Strings?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Strings input is ordered or mutable",
      "Assume Strings works for every input shape",
      "Skip Strings's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-10",
    topicId: "string-algorithms",
    prompt:
      "What should algorithmic state represent in a clean Strings solution?",
    options: [
      "Store all input details for Strings",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Strings state",
      "Use unnamed global Strings state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-11",
    topicId: "string-algorithms",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Strings?",
    options: [
      "Revisit Strings state with no stopping rule",
      "Recurse through Strings without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Strings after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-12",
    topicId: "string-algorithms",
    prompt:
      "What is the strongest way to reason about correctness for Strings in an interview?",
    options: [
      "Claim Strings works because it passed one example",
      "Explain Strings without a preserved property",
      "Skip how Strings maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-13",
    topicId: "string-algorithms",
    prompt:
      "Before optimizing a working Strings solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Strings before measuring it",
      "Assume Strings's slowest operation cannot improve",
      "Focus on style instead of Strings's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-14",
    topicId: "string-algorithms",
    prompt: "Which implementation habit most improves reliability for Strings?",
    options: [
      "Use ambiguous Strings names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Strings updates across branches",
      "Rely on implicit Strings side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-15",
    topicId: "string-algorithms",
    prompt:
      "Which test strategy is most useful for validating a Strings implementation?",
    options: [
      "Test Strings only on large random inputs",
      "Skip Strings duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Strings works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-16",
    topicId: "string-algorithms",
    prompt: "When should you avoid forcing Strings onto a problem?",
    options: [
      "Use Strings for every collection problem",
      "Force Strings onto input lacking required structure",
      "Ignore a simpler representation than Strings",
      "When the problem lacks the assumptions or structure that make Strings correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Strings correct or efficient This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-17",
    topicId: "string-algorithms",
    prompt:
      "When explaining a Strings solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Strings before stating its state",
      "Describe Strings syntax but omit steps",
      "Avoid Strings's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-18",
    topicId: "string-algorithms",
    prompt: "Why should constraints be examined before selecting Strings?",
    options: [
      "Pick Strings before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Strings meets limits without estimating",
      "Treat Strings constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-19",
    topicId: "string-algorithms",
    prompt:
      "What is the main value of dry-running a Strings solution on a small example?",
    options: [
      "Dry-run Strings only after finishing",
      "Trace Strings without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Strings boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Strings.",
  },
  {
    id: "string-algorithms-20",
    topicId: "string-algorithms",
    prompt:
      "After solving a Strings problem, which review question best improves interview readiness?",
    options: [
      "Memorize Strings code without assumptions",
      "Judge Strings only by acceptance",
      "Skip how Strings changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Strings.",
  },
];
