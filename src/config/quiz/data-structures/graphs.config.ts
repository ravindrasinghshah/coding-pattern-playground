import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "graphs",
  category: "data-structures",
  title: "Graphs",
  description:
    "Review representations, traversal, connectivity, cycles, and graph modeling.",
  accent: "green",
  questionIds: [
    "graphs-01",
    "graphs-02",
    "graphs-03",
    "graphs-04",
    "graphs-05",
    "graphs-06",
    "graphs-07",
    "graphs-08",
    "graphs-09",
    "graphs-10",
    "graphs-11",
    "graphs-12",
    "graphs-13",
    "graphs-14",
    "graphs-15",
    "graphs-16",
    "graphs-17",
    "graphs-18",
    "graphs-19",
    "graphs-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "graphs-01",
    topicId: "graphs",
    prompt: "Which statement best describes the core purpose of Graphs?",
    options: [
      "vertices and edges model arbitrary relationships and connectivity",
      "Model Graphs as a simple adjacent-pair scan",
      "Use only a flat array even when Graphs needs structural relationships",
      "Assume Graphs solves every lookup problem in constant time",
    ],
    correctOption: 0,
    explanation:
      "vertices and edges model arbitrary relationships and connectivity This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-02",
    topicId: "graphs",
    prompt: "Which interview clue most strongly suggests considering Graphs?",
    options: [
      "The input is sorted and needs only one direct lookup instead of Graphs",
      "entities have many-to-many relationships, dependencies, routes, or connections",
      "Only neighboring elements matter, so Graphs adds no value",
      "Each item is independent and has no relationships for Graphs to represent",
    ],
    correctOption: 1,
    explanation:
      "entities have many-to-many relationships, dependencies, routes, or connections This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-03",
    topicId: "graphs",
    prompt:
      "What is the most useful invariant to maintain when applying Graphs?",
    options: [
      "Never update the Graphs state after a transition",
      "Track only the final result and discard all Graphs intermediate state",
      "Maintain a condition that remains true as the Graphs algorithm progresses",
      "Allow Graphs state to violate its defining ordering or relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Graphs algorithm progresses This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-04",
    topicId: "graphs",
    prompt:
      "When using a standard efficient implementation of Graphs, what should you analyze first to justify its time complexity?",
    options: [
      "Count only the number of method calls, ignoring the size of Graphs",
      "Treat every Graphs operation as O(1) regardless of input shape",
      "Analyze source-code length instead of the work Graphs performs",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-05",
    topicId: "graphs",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Graphs?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Count only the returned value and exclude Graphs's auxiliary storage",
      "Ignore the nodes, references, or buffers retained by Graphs",
      "Assume Graphs uses no memory when it is implemented iteratively",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-06",
    topicId: "graphs",
    prompt:
      "Which edge case should be checked explicitly in a robust Graphs solution?",
    options: [
      "Test only a typical Graphs input and skip empty cases",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Check Graphs only with distinct values and no boundary conditions",
      "Avoid testing malformed links, missing children, or disconnected Graphs state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-07",
    topicId: "graphs",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Graphs solution?",
    options: [
      "Mutate Graphs state before recording the information needed later",
      "Reuse stale Graphs references after the structure changes",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update multiple Graphs boundaries without checking their relationship",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-08",
    topicId: "graphs",
    prompt:
      "What is the best reason to compare Graphs with an alternative approach before coding?",
    options: [
      "Choose Graphs solely because its implementation is familiar",
      "Prefer an approach that uses more memory than Graphs without a benefit",
      "Compare only code length rather than Graphs's operations and guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-09",
    topicId: "graphs",
    prompt:
      "Which input property can materially change how you implement Graphs?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Graphs input is ordered, weighted, cyclic, or mutable",
      "Assume Graphs behaves identically for sparse and dense inputs",
      "Choose Graphs without checking its key or value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-10",
    topicId: "graphs",
    prompt:
      "What should algorithmic state represent in a clean Graphs solution?",
    options: [
      "Store every input detail even when Graphs will never use it again",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Let Graphs state duplicate solved work without a purpose",
      "Use unnamed global variables rather than meaningful Graphs state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-11",
    topicId: "graphs",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Graphs?",
    options: [
      "Revisit the same Graphs state indefinitely without a stopping rule",
      "Recurse through Graphs without defining a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Graphs processing after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-12",
    topicId: "graphs",
    prompt:
      "What is the strongest way to reason about correctness for Graphs in an interview?",
    options: [
      "Claim Graphs is correct because it passed one example",
      "Explain Graphs only with intuition and no preserved property",
      "Skip showing how Graphs transitions maintain valid state",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-13",
    topicId: "graphs",
    prompt:
      "Before optimizing a working Graphs solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Graphs before measuring time or memory use",
      "Assume Graphs's slowest operation cannot be improved",
      "Focus on stylistic changes instead of Graphs's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-14",
    topicId: "graphs",
    prompt: "Which implementation habit most improves reliability for Graphs?",
    options: [
      "Use ambiguous names for Graphs nodes, pointers, and boundaries",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Graphs updates across unrelated branches",
      "Rely on implicit side effects instead of clear Graphs state changes",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-15",
    topicId: "graphs",
    prompt:
      "Which test strategy is most useful for validating a Graphs implementation?",
    options: [
      "Test Graphs only on large random inputs",
      "Skip duplicate and boundary cases when validating Graphs",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Graphs works if it compiles without dry-running examples",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-16",
    topicId: "graphs",
    prompt: "When should you avoid forcing Graphs onto a problem?",
    options: [
      "Use Graphs whenever the problem mentions a collection",
      "Force Graphs onto input that lacks its required relationships or ordering",
      "Ignore a simpler representation that matches the problem better than Graphs",
      "When the problem lacks the assumptions or structure that make Graphs correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Graphs correct or efficient This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-17",
    topicId: "graphs",
    prompt:
      "When explaining a Graphs solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Start coding Graphs before stating what its state represents",
      "Describe only Graphs's syntax and omit the algorithm steps",
      "Avoid discussing Graphs's complexity or correctness assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-18",
    topicId: "graphs",
    prompt: "Why should constraints be examined before selecting Graphs?",
    options: [
      "Pick Graphs before reading the input limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Graphs fits memory and time limits without estimating them",
      "Treat Graphs constraints as irrelevant once an approach is familiar",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-19",
    topicId: "graphs",
    prompt:
      "What is the main value of dry-running a Graphs solution on a small example?",
    options: [
      "Dry-run Graphs only after declaring the solution complete",
      "Trace Graphs values without checking state transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that cannot exercise Graphs's boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Graphs.",
  },
  {
    id: "graphs-20",
    topicId: "graphs",
    prompt:
      "After solving a Graphs problem, which review question best improves interview readiness?",
    options: [
      "Memorize Graphs code without revisiting its assumptions",
      "Judge Graphs readiness only by whether a solution was accepted",
      "Skip reviewing how Graphs would change under new constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Graphs.",
  },
];
