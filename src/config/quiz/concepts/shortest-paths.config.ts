import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "shortest-paths",
  category: "concepts",
  title: "Shortest Paths",
  description:
    "Choose BFS, Dijkstra, Bellman-Ford, or DAG techniques based on edge properties.",
  accent: "coral",
  questionIds: [
    "shortest-paths-01",
    "shortest-paths-02",
    "shortest-paths-03",
    "shortest-paths-04",
    "shortest-paths-05",
    "shortest-paths-06",
    "shortest-paths-07",
    "shortest-paths-08",
    "shortest-paths-09",
    "shortest-paths-10",
    "shortest-paths-11",
    "shortest-paths-12",
    "shortest-paths-13",
    "shortest-paths-14",
    "shortest-paths-15",
    "shortest-paths-16",
    "shortest-paths-17",
    "shortest-paths-18",
    "shortest-paths-19",
    "shortest-paths-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "shortest-paths-01",
    topicId: "shortest-paths",
    prompt:
      "Which statement best describes the core purpose of Shortest Paths?",
    options: [
      "the algorithm must match edge weights and graph properties",
      "Model Shortest Paths as a simple adjacent-pair scan",
      "Use a flat array when Shortest Paths needs structural relationships",
      "Assume Shortest Paths solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "the algorithm must match edge weights and graph properties This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-02",
    topicId: "shortest-paths",
    prompt:
      "Which interview clue most strongly suggests considering Shortest Paths?",
    options: [
      "The input needs one lookup instead of Shortest Paths",
      "the goal is minimum path cost or distance between graph states",
      "Only neighboring elements matter, so Shortest Paths adds no value",
      "Each item is independent with no Shortest Paths relationship to model",
    ],
    correctOption: 1,
    explanation:
      "the goal is minimum path cost or distance between graph states This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-03",
    topicId: "shortest-paths",
    prompt:
      "What is the most useful invariant to maintain when applying Shortest Paths?",
    options: [
      "Never update Shortest Paths state after a transition",
      "Discard all Shortest Paths intermediate state",
      "Maintain a condition that remains true as the Shortest Paths algorithm progresses",
      "Let Shortest Paths violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Shortest Paths algorithm progresses This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-04",
    topicId: "shortest-paths",
    prompt:
      "When using a standard efficient implementation of Shortest Paths, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Shortest Paths's input size",
      "Treat every Shortest Paths operation as O(1)",
      "Analyze code length instead of Shortest Paths's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-05",
    topicId: "shortest-paths",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Shortest Paths?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Shortest Paths's auxiliary storage",
      "Ignore references retained by Shortest Paths",
      "Assume iterative Shortest Paths uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-06",
    topicId: "shortest-paths",
    prompt:
      "Which edge case should be checked explicitly in a robust Shortest Paths solution?",
    options: [
      "Test only a typical Shortest Paths input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Shortest Paths",
      "Avoid empty or malformed Shortest Paths state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-07",
    topicId: "shortest-paths",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Shortest Paths solution?",
    options: [
      "Mutate Shortest Paths before recording needed information",
      "Reuse stale Shortest Paths references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Shortest Paths boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-08",
    topicId: "shortest-paths",
    prompt:
      "What is the best reason to compare Shortest Paths with an alternative approach before coding?",
    options: [
      "Choose Shortest Paths because it is familiar",
      "Prefer more memory than Shortest Paths without benefit",
      "Compare code length, not Shortest Paths's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-09",
    topicId: "shortest-paths",
    prompt:
      "Which input property can materially change how you implement Shortest Paths?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Shortest Paths input is ordered or mutable",
      "Assume Shortest Paths works for every input shape",
      "Skip Shortest Paths's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-10",
    topicId: "shortest-paths",
    prompt:
      "What should algorithmic state represent in a clean Shortest Paths solution?",
    options: [
      "Store all input details for Shortest Paths",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Shortest Paths state",
      "Use unnamed global Shortest Paths state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-11",
    topicId: "shortest-paths",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Shortest Paths?",
    options: [
      "Revisit Shortest Paths state with no stopping rule",
      "Recurse through Shortest Paths without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Shortest Paths after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-12",
    topicId: "shortest-paths",
    prompt:
      "What is the strongest way to reason about correctness for Shortest Paths in an interview?",
    options: [
      "Claim Shortest Paths works because it passed one example",
      "Explain Shortest Paths without a preserved property",
      "Skip how Shortest Paths maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-13",
    topicId: "shortest-paths",
    prompt:
      "Before optimizing a working Shortest Paths solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Shortest Paths before measuring it",
      "Assume Shortest Paths's slowest operation cannot improve",
      "Focus on style instead of Shortest Paths's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-14",
    topicId: "shortest-paths",
    prompt:
      "Which implementation habit most improves reliability for Shortest Paths?",
    options: [
      "Use ambiguous Shortest Paths names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Shortest Paths updates across branches",
      "Rely on implicit Shortest Paths side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-15",
    topicId: "shortest-paths",
    prompt:
      "Which test strategy is most useful for validating a Shortest Paths implementation?",
    options: [
      "Test Shortest Paths only on large random inputs",
      "Skip Shortest Paths duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Shortest Paths works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-16",
    topicId: "shortest-paths",
    prompt: "When should you avoid forcing Shortest Paths onto a problem?",
    options: [
      "Use Shortest Paths for every collection problem",
      "Force Shortest Paths onto input lacking required structure",
      "Ignore a simpler representation than Shortest Paths",
      "When the problem lacks the assumptions or structure that make Shortest Paths correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Shortest Paths correct or efficient This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-17",
    topicId: "shortest-paths",
    prompt:
      "When explaining a Shortest Paths solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Shortest Paths before stating its state",
      "Describe Shortest Paths syntax but omit steps",
      "Avoid Shortest Paths's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-18",
    topicId: "shortest-paths",
    prompt:
      "Why should constraints be examined before selecting Shortest Paths?",
    options: [
      "Pick Shortest Paths before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Shortest Paths meets limits without estimating",
      "Treat Shortest Paths constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-19",
    topicId: "shortest-paths",
    prompt:
      "What is the main value of dry-running a Shortest Paths solution on a small example?",
    options: [
      "Dry-run Shortest Paths only after finishing",
      "Trace Shortest Paths without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Shortest Paths boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Shortest Paths.",
  },
  {
    id: "shortest-paths-20",
    topicId: "shortest-paths",
    prompt:
      "After solving a Shortest Paths problem, which review question best improves interview readiness?",
    options: [
      "Memorize Shortest Paths code without assumptions",
      "Judge Shortest Paths only by acceptance",
      "Skip how Shortest Paths changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Shortest Paths.",
  },
];
