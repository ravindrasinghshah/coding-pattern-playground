import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "minimum-spanning-tree",
  category: "concepts",
  title: "Minimum Spanning Tree",
  description:
    "Understand Kruskal, Prim, cut intuition, and connectivity cost.",
  accent: "green",
  questionIds: [
    "minimum-spanning-tree-01",
    "minimum-spanning-tree-02",
    "minimum-spanning-tree-03",
    "minimum-spanning-tree-04",
    "minimum-spanning-tree-05",
    "minimum-spanning-tree-06",
    "minimum-spanning-tree-07",
    "minimum-spanning-tree-08",
    "minimum-spanning-tree-09",
    "minimum-spanning-tree-10",
    "minimum-spanning-tree-11",
    "minimum-spanning-tree-12",
    "minimum-spanning-tree-13",
    "minimum-spanning-tree-14",
    "minimum-spanning-tree-15",
    "minimum-spanning-tree-16",
    "minimum-spanning-tree-17",
    "minimum-spanning-tree-18",
    "minimum-spanning-tree-19",
    "minimum-spanning-tree-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "minimum-spanning-tree-01",
    topicId: "minimum-spanning-tree",
    prompt:
      "Which statement best describes the core purpose of Minimum Spanning Tree?",
    options: [
      "a minimum-cost acyclic set of edges connects all vertices",
      "Model Minimum Spanning Tree as a simple adjacent-pair scan",
      "Use a flat array when Minimum Spanning Tree needs structural relationships",
      "Assume Minimum Spanning Tree solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "a minimum-cost acyclic set of edges connects all vertices This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-02",
    topicId: "minimum-spanning-tree",
    prompt:
      "Which interview clue most strongly suggests considering Minimum Spanning Tree?",
    options: [
      "The input needs one lookup instead of Minimum Spanning Tree",
      "all vertices must be connected with minimum total edge cost",
      "Only neighboring elements matter, so Minimum Spanning Tree adds no value",
      "Each item is independent with no Minimum Spanning Tree relationship to model",
    ],
    correctOption: 1,
    explanation:
      "all vertices must be connected with minimum total edge cost This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-03",
    topicId: "minimum-spanning-tree",
    prompt:
      "What is the most useful invariant to maintain when applying Minimum Spanning Tree?",
    options: [
      "Never update Minimum Spanning Tree state after a transition",
      "Discard all Minimum Spanning Tree intermediate state",
      "Maintain a condition that remains true as the Minimum Spanning Tree algorithm progresses",
      "Let Minimum Spanning Tree violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Minimum Spanning Tree algorithm progresses This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-04",
    topicId: "minimum-spanning-tree",
    prompt:
      "When using a standard efficient implementation of Minimum Spanning Tree, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Minimum Spanning Tree's input size",
      "Treat every Minimum Spanning Tree operation as O(1)",
      "Analyze code length instead of Minimum Spanning Tree's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-05",
    topicId: "minimum-spanning-tree",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Minimum Spanning Tree?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Minimum Spanning Tree's auxiliary storage",
      "Ignore references retained by Minimum Spanning Tree",
      "Assume iterative Minimum Spanning Tree uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-06",
    topicId: "minimum-spanning-tree",
    prompt:
      "Which edge case should be checked explicitly in a robust Minimum Spanning Tree solution?",
    options: [
      "Test only a typical Minimum Spanning Tree input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Minimum Spanning Tree",
      "Avoid empty or malformed Minimum Spanning Tree state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-07",
    topicId: "minimum-spanning-tree",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Minimum Spanning Tree solution?",
    options: [
      "Mutate Minimum Spanning Tree before recording needed information",
      "Reuse stale Minimum Spanning Tree references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Minimum Spanning Tree boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-08",
    topicId: "minimum-spanning-tree",
    prompt:
      "What is the best reason to compare Minimum Spanning Tree with an alternative approach before coding?",
    options: [
      "Choose Minimum Spanning Tree because it is familiar",
      "Prefer more memory than Minimum Spanning Tree without benefit",
      "Compare code length, not Minimum Spanning Tree's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-09",
    topicId: "minimum-spanning-tree",
    prompt:
      "Which input property can materially change how you implement Minimum Spanning Tree?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Minimum Spanning Tree input is ordered or mutable",
      "Assume Minimum Spanning Tree works for every input shape",
      "Skip Minimum Spanning Tree's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-10",
    topicId: "minimum-spanning-tree",
    prompt:
      "What should algorithmic state represent in a clean Minimum Spanning Tree solution?",
    options: [
      "Store all input details for Minimum Spanning Tree",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Minimum Spanning Tree state",
      "Use unnamed global Minimum Spanning Tree state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-11",
    topicId: "minimum-spanning-tree",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Minimum Spanning Tree?",
    options: [
      "Revisit Minimum Spanning Tree state with no stopping rule",
      "Recurse through Minimum Spanning Tree without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Minimum Spanning Tree after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-12",
    topicId: "minimum-spanning-tree",
    prompt:
      "What is the strongest way to reason about correctness for Minimum Spanning Tree in an interview?",
    options: [
      "Claim Minimum Spanning Tree works because it passed one example",
      "Explain Minimum Spanning Tree without a preserved property",
      "Skip how Minimum Spanning Tree maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-13",
    topicId: "minimum-spanning-tree",
    prompt:
      "Before optimizing a working Minimum Spanning Tree solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Minimum Spanning Tree before measuring it",
      "Assume Minimum Spanning Tree's slowest operation cannot improve",
      "Focus on style instead of Minimum Spanning Tree's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-14",
    topicId: "minimum-spanning-tree",
    prompt:
      "Which implementation habit most improves reliability for Minimum Spanning Tree?",
    options: [
      "Use ambiguous Minimum Spanning Tree names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Minimum Spanning Tree updates across branches",
      "Rely on implicit Minimum Spanning Tree side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-15",
    topicId: "minimum-spanning-tree",
    prompt:
      "Which test strategy is most useful for validating a Minimum Spanning Tree implementation?",
    options: [
      "Test Minimum Spanning Tree only on large random inputs",
      "Skip Minimum Spanning Tree duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Minimum Spanning Tree works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-16",
    topicId: "minimum-spanning-tree",
    prompt:
      "When should you avoid forcing Minimum Spanning Tree onto a problem?",
    options: [
      "Use Minimum Spanning Tree for every collection problem",
      "Force Minimum Spanning Tree onto input lacking required structure",
      "Ignore a simpler representation than Minimum Spanning Tree",
      "When the problem lacks the assumptions or structure that make Minimum Spanning Tree correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Minimum Spanning Tree correct or efficient This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-17",
    topicId: "minimum-spanning-tree",
    prompt:
      "When explaining a Minimum Spanning Tree solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Minimum Spanning Tree before stating its state",
      "Describe Minimum Spanning Tree syntax but omit steps",
      "Avoid Minimum Spanning Tree's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-18",
    topicId: "minimum-spanning-tree",
    prompt:
      "Why should constraints be examined before selecting Minimum Spanning Tree?",
    options: [
      "Pick Minimum Spanning Tree before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Minimum Spanning Tree meets limits without estimating",
      "Treat Minimum Spanning Tree constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-19",
    topicId: "minimum-spanning-tree",
    prompt:
      "What is the main value of dry-running a Minimum Spanning Tree solution on a small example?",
    options: [
      "Dry-run Minimum Spanning Tree only after finishing",
      "Trace Minimum Spanning Tree without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Minimum Spanning Tree boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
  {
    id: "minimum-spanning-tree-20",
    topicId: "minimum-spanning-tree",
    prompt:
      "After solving a Minimum Spanning Tree problem, which review question best improves interview readiness?",
    options: [
      "Memorize Minimum Spanning Tree code without assumptions",
      "Judge Minimum Spanning Tree only by acceptance",
      "Skip how Minimum Spanning Tree changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Minimum Spanning Tree.",
  },
];
