import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "union-find",
  category: "data-structures",
  title: "Union Find",
  description:
    "Use disjoint sets for connectivity, cycle detection, and component merging.",
  accent: "blue",
  questionIds: [
    "union-find-01",
    "union-find-02",
    "union-find-03",
    "union-find-04",
    "union-find-05",
    "union-find-06",
    "union-find-07",
    "union-find-08",
    "union-find-09",
    "union-find-10",
    "union-find-11",
    "union-find-12",
    "union-find-13",
    "union-find-14",
    "union-find-15",
    "union-find-16",
    "union-find-17",
    "union-find-18",
    "union-find-19",
    "union-find-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "union-find-01",
    topicId: "union-find",
    prompt: "Which statement best describes the core purpose of Union Find?",
    options: [
      "disjoint-set representatives efficiently track merging connectivity components",
      "Model Union Find as an adjacent-pair scan",
      "Use a flat array when Union Find needs structural relationships",
      "Assume Union Find solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "disjoint-set representatives efficiently track merging connectivity components This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-02",
    topicId: "union-find",
    prompt:
      "Which interview clue most strongly suggests considering Union Find?",
    options: [
      "The input needs one lookup instead of Union Find",
      "edges arrive while you need fast connectivity or cycle checks",
      "Only neighboring elements matter, so Union Find adds no value",
      "Each item is independent with no Union Find relationship to model",
    ],
    correctOption: 1,
    explanation:
      "edges arrive while you need fast connectivity or cycle checks This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-03",
    topicId: "union-find",
    prompt:
      "What is the most useful invariant to maintain when applying Union Find?",
    options: [
      "Never update Union Find state after a transition",
      "Discard all Union Find intermediate state",
      "Maintain a condition that remains true as the Union Find algorithm progresses",
      "Let Union Find violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Union Find algorithm progresses This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-04",
    topicId: "union-find",
    prompt:
      "When using a standard efficient implementation of Union Find, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Union Find's input size",
      "Treat every Union Find operation as O(1)",
      "Analyze code length instead of Union Find's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-05",
    topicId: "union-find",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Union Find?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Union Find's auxiliary storage",
      "Ignore references retained by Union Find",
      "Assume iterative Union Find uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-06",
    topicId: "union-find",
    prompt:
      "Which edge case should be checked explicitly in a robust Union Find solution?",
    options: [
      "Test only a typical Union Find input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Union Find",
      "Avoid empty or malformed Union Find state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-07",
    topicId: "union-find",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Union Find solution?",
    options: [
      "Mutate Union Find before recording needed information",
      "Reuse stale Union Find references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Union Find boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-08",
    topicId: "union-find",
    prompt:
      "What is the best reason to compare Union Find with an alternative approach before coding?",
    options: [
      "Choose Union Find because it is familiar",
      "Prefer more memory than Union Find without benefit",
      "Compare code length, not Union Find's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-09",
    topicId: "union-find",
    prompt:
      "Which input property can materially change how you implement Union Find?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Union Find input is ordered or mutable",
      "Assume Union Find works for every input shape",
      "Skip Union Find's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-10",
    topicId: "union-find",
    prompt:
      "What should algorithmic state represent in a clean Union Find solution?",
    options: [
      "Store all input details for Union Find",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Union Find state",
      "Use unnamed global Union Find state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-11",
    topicId: "union-find",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Union Find?",
    options: [
      "Revisit Union Find state with no stopping rule",
      "Recurse through Union Find without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Union Find after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-12",
    topicId: "union-find",
    prompt:
      "What is the strongest way to reason about correctness for Union Find in an interview?",
    options: [
      "Claim Union Find works because it passed one example",
      "Explain Union Find without a preserved property",
      "Skip how Union Find maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-13",
    topicId: "union-find",
    prompt:
      "Before optimizing a working Union Find solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Union Find before measuring it",
      "Assume Union Find's slowest operation cannot improve",
      "Focus on style instead of Union Find's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-14",
    topicId: "union-find",
    prompt:
      "Which implementation habit most improves reliability for Union Find?",
    options: [
      "Use ambiguous Union Find names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Union Find updates across branches",
      "Rely on implicit Union Find side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-15",
    topicId: "union-find",
    prompt:
      "Which test strategy is most useful for validating a Union Find implementation?",
    options: [
      "Test Union Find only on large random inputs",
      "Skip Union Find duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Union Find works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-16",
    topicId: "union-find",
    prompt: "When should you avoid forcing Union Find onto a problem?",
    options: [
      "Use Union Find for every collection problem",
      "Force Union Find onto input lacking required structure",
      "Ignore a simpler representation than Union Find",
      "When the problem lacks the assumptions or structure that make Union Find correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Union Find correct or efficient This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-17",
    topicId: "union-find",
    prompt:
      "When explaining a Union Find solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Union Find before stating its state",
      "Describe Union Find syntax but omit steps",
      "Avoid Union Find's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-18",
    topicId: "union-find",
    prompt: "Why should constraints be examined before selecting Union Find?",
    options: [
      "Pick Union Find before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Union Find meets limits without estimating",
      "Treat Union Find constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-19",
    topicId: "union-find",
    prompt:
      "What is the main value of dry-running a Union Find solution on a small example?",
    options: [
      "Dry-run Union Find only after finishing",
      "Trace Union Find without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Union Find boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Union Find.",
  },
  {
    id: "union-find-20",
    topicId: "union-find",
    prompt:
      "After solving a Union Find problem, which review question best improves interview readiness?",
    options: [
      "Memorize Union Find code without assumptions",
      "Judge Union Find only by acceptance",
      "Skip how Union Find changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Union Find.",
  },
];
