import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "trees",
  category: "data-structures",
  title: "Trees",
  description:
    "Review tree terminology, recursive structure, traversals, and common interview reasoning.",
  accent: "coral",
  questionIds: [
    "trees-01",
    "trees-02",
    "trees-03",
    "trees-04",
    "trees-05",
    "trees-06",
    "trees-07",
    "trees-08",
    "trees-09",
    "trees-10",
    "trees-11",
    "trees-12",
    "trees-13",
    "trees-14",
    "trees-15",
    "trees-16",
    "trees-17",
    "trees-18",
    "trees-19",
    "trees-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "trees-01",
    topicId: "trees",
    prompt: "Which statement best describes the core purpose of Trees?",
    options: [
      "recursive parent-child structure naturally decomposes into subtrees",
      "Model Trees as an adjacent-pair scan",
      "Use a flat array when Trees needs structural relationships",
      "Assume Trees solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "recursive parent-child structure naturally decomposes into subtrees This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-02",
    topicId: "trees",
    prompt: "Which interview clue most strongly suggests considering Trees?",
    options: [
      "The input needs one lookup instead of Trees",
      "the input is hierarchical and each node leads to child subproblems",
      "Only neighboring elements matter, so Trees adds no value",
      "Each item is independent with no Trees relationship to model",
    ],
    correctOption: 1,
    explanation:
      "the input is hierarchical and each node leads to child subproblems This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-03",
    topicId: "trees",
    prompt:
      "What is the most useful invariant to maintain when applying Trees?",
    options: [
      "Never update Trees state after a transition",
      "Discard all Trees intermediate state",
      "Maintain a condition that remains true as the Trees algorithm progresses",
      "Let Trees violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Trees algorithm progresses This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-04",
    topicId: "trees",
    prompt:
      "When using a standard efficient implementation of Trees, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Trees's input size",
      "Treat every Trees operation as O(1)",
      "Analyze code length instead of Trees's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-05",
    topicId: "trees",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Trees?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Trees's auxiliary storage",
      "Ignore references retained by Trees",
      "Assume iterative Trees uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-06",
    topicId: "trees",
    prompt:
      "Which edge case should be checked explicitly in a robust Trees solution?",
    options: [
      "Test only a typical Trees input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Trees",
      "Avoid empty or malformed Trees state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-07",
    topicId: "trees",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Trees solution?",
    options: [
      "Mutate Trees before recording needed information",
      "Reuse stale Trees references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Trees boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-08",
    topicId: "trees",
    prompt:
      "What is the best reason to compare Trees with an alternative approach before coding?",
    options: [
      "Choose Trees because it is familiar",
      "Prefer more memory than Trees without benefit",
      "Compare code length, not Trees's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-09",
    topicId: "trees",
    prompt:
      "Which input property can materially change how you implement Trees?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Trees input is ordered or mutable",
      "Assume Trees works for every input shape",
      "Skip Trees's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-10",
    topicId: "trees",
    prompt:
      "What should algorithmic state represent in a clean Trees solution?",
    options: [
      "Store all input details for Trees",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Trees state",
      "Use unnamed global Trees state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-11",
    topicId: "trees",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Trees?",
    options: [
      "Revisit Trees state with no stopping rule",
      "Recurse through Trees without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Trees after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-12",
    topicId: "trees",
    prompt:
      "What is the strongest way to reason about correctness for Trees in an interview?",
    options: [
      "Claim Trees works because it passed one example",
      "Explain Trees without a preserved property",
      "Skip how Trees maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-13",
    topicId: "trees",
    prompt:
      "Before optimizing a working Trees solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Trees before measuring it",
      "Assume Trees's slowest operation cannot improve",
      "Focus on style instead of Trees's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-14",
    topicId: "trees",
    prompt: "Which implementation habit most improves reliability for Trees?",
    options: [
      "Use ambiguous Trees names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Trees updates across branches",
      "Rely on implicit Trees side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-15",
    topicId: "trees",
    prompt:
      "Which test strategy is most useful for validating a Trees implementation?",
    options: [
      "Test Trees only on large random inputs",
      "Skip Trees duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Trees works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-16",
    topicId: "trees",
    prompt: "When should you avoid forcing Trees onto a problem?",
    options: [
      "Use Trees for every collection problem",
      "Force Trees onto input lacking required structure",
      "Ignore a simpler representation than Trees",
      "When the problem lacks the assumptions or structure that make Trees correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Trees correct or efficient This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-17",
    topicId: "trees",
    prompt:
      "When explaining a Trees solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Trees before stating its state",
      "Describe Trees syntax but omit steps",
      "Avoid Trees's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-18",
    topicId: "trees",
    prompt: "Why should constraints be examined before selecting Trees?",
    options: [
      "Pick Trees before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Trees meets limits without estimating",
      "Treat Trees constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-19",
    topicId: "trees",
    prompt:
      "What is the main value of dry-running a Trees solution on a small example?",
    options: [
      "Dry-run Trees only after finishing",
      "Trace Trees without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Trees boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Trees.",
  },
  {
    id: "trees-20",
    topicId: "trees",
    prompt:
      "After solving a Trees problem, which review question best improves interview readiness?",
    options: [
      "Memorize Trees code without assumptions",
      "Judge Trees only by acceptance",
      "Skip how Trees changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Trees.",
  },
];
