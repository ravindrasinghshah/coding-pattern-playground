import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "bst",
  category: "data-structures",
  title: "Binary Search Trees",
  description:
    "Practice BST ordering, search, insertion, deletion, and traversal properties.",
  accent: "green",
  questionIds: [
    "bst-01",
    "bst-02",
    "bst-03",
    "bst-04",
    "bst-05",
    "bst-06",
    "bst-07",
    "bst-08",
    "bst-09",
    "bst-10",
    "bst-11",
    "bst-12",
    "bst-13",
    "bst-14",
    "bst-15",
    "bst-16",
    "bst-17",
    "bst-18",
    "bst-19",
    "bst-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "bst-01",
    topicId: "bst",
    prompt:
      "Which statement best describes the core purpose of Binary Search Trees?",
    options: [
      "ordered subtrees allow directed search and inorder traversal yields sorted keys",
      "Model Binary Search Trees as a simple adjacent-pair scan",
      "Use only a flat array even when Binary Search Trees needs structural relationships",
      "Assume Binary Search Trees solves every lookup problem in constant time",
    ],
    correctOption: 0,
    explanation:
      "ordered subtrees allow directed search and inorder traversal yields sorted keys This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-02",
    topicId: "bst",
    prompt:
      "Which interview clue most strongly suggests considering Binary Search Trees?",
    options: [
      "The input is sorted and needs only one direct lookup instead of Binary Search Trees",
      "tree nodes obey a left-smaller/right-larger ordering rule",
      "Only neighboring elements matter, so Binary Search Trees adds no value",
      "Each item is independent and has no relationships for Binary Search Trees to represent",
    ],
    correctOption: 1,
    explanation:
      "tree nodes obey a left-smaller/right-larger ordering rule This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-03",
    topicId: "bst",
    prompt:
      "What is the most useful invariant to maintain when applying Binary Search Trees?",
    options: [
      "Never update the Binary Search Trees state after a transition",
      "Track only the final result and discard all Binary Search Trees intermediate state",
      "Maintain a condition that remains true as the Binary Search Trees algorithm progresses",
      "Allow Binary Search Trees state to violate its defining ordering or relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Binary Search Trees algorithm progresses This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-04",
    topicId: "bst",
    prompt:
      "When using a standard efficient implementation of Binary Search Trees, what should you analyze first to justify its time complexity?",
    options: [
      "Count only the number of method calls, ignoring the size of Binary Search Trees",
      "Treat every Binary Search Trees operation as O(1) regardless of input shape",
      "Analyze source-code length instead of the work Binary Search Trees performs",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-05",
    topicId: "bst",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Binary Search Trees?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Count only the returned value and exclude Binary Search Trees's auxiliary storage",
      "Ignore the nodes, references, or buffers retained by Binary Search Trees",
      "Assume Binary Search Trees uses no memory when it is implemented iteratively",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-06",
    topicId: "bst",
    prompt:
      "Which edge case should be checked explicitly in a robust Binary Search Trees solution?",
    options: [
      "Test only a typical Binary Search Trees input and skip empty cases",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Check Binary Search Trees only with distinct values and no boundary conditions",
      "Avoid testing malformed links, missing children, or disconnected Binary Search Trees state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-07",
    topicId: "bst",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Binary Search Trees solution?",
    options: [
      "Mutate Binary Search Trees state before recording the information needed later",
      "Reuse stale Binary Search Trees references after the structure changes",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update multiple Binary Search Trees boundaries without checking their relationship",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-08",
    topicId: "bst",
    prompt:
      "What is the best reason to compare Binary Search Trees with an alternative approach before coding?",
    options: [
      "Choose Binary Search Trees solely because its implementation is familiar",
      "Prefer an approach that uses more memory than Binary Search Trees without a benefit",
      "Compare only code length rather than Binary Search Trees's operations and guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-09",
    topicId: "bst",
    prompt:
      "Which input property can materially change how you implement Binary Search Trees?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Binary Search Trees input is ordered, weighted, cyclic, or mutable",
      "Assume Binary Search Trees behaves identically for sparse and dense inputs",
      "Choose Binary Search Trees without checking its key or value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-10",
    topicId: "bst",
    prompt:
      "What should algorithmic state represent in a clean Binary Search Trees solution?",
    options: [
      "Store every input detail even when Binary Search Trees will never use it again",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Let Binary Search Trees state duplicate solved work without a purpose",
      "Use unnamed global variables rather than meaningful Binary Search Trees state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-11",
    topicId: "bst",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Binary Search Trees?",
    options: [
      "Revisit the same Binary Search Trees state indefinitely without a stopping rule",
      "Recurse through Binary Search Trees without defining a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Binary Search Trees processing after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-12",
    topicId: "bst",
    prompt:
      "What is the strongest way to reason about correctness for Binary Search Trees in an interview?",
    options: [
      "Claim Binary Search Trees is correct because it passed one example",
      "Explain Binary Search Trees only with intuition and no preserved property",
      "Skip showing how Binary Search Trees transitions maintain valid state",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-13",
    topicId: "bst",
    prompt:
      "Before optimizing a working Binary Search Trees solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Binary Search Trees before measuring time or memory use",
      "Assume Binary Search Trees's slowest operation cannot be improved",
      "Focus on stylistic changes instead of Binary Search Trees's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-14",
    topicId: "bst",
    prompt:
      "Which implementation habit most improves reliability for Binary Search Trees?",
    options: [
      "Use ambiguous names for Binary Search Trees nodes, pointers, and boundaries",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Binary Search Trees updates across unrelated branches",
      "Rely on implicit side effects instead of clear Binary Search Trees state changes",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-15",
    topicId: "bst",
    prompt:
      "Which test strategy is most useful for validating a Binary Search Trees implementation?",
    options: [
      "Test Binary Search Trees only on large random inputs",
      "Skip duplicate and boundary cases when validating Binary Search Trees",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Binary Search Trees works if it compiles without dry-running examples",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-16",
    topicId: "bst",
    prompt: "When should you avoid forcing Binary Search Trees onto a problem?",
    options: [
      "Use Binary Search Trees whenever the problem mentions a collection",
      "Force Binary Search Trees onto input that lacks its required relationships or ordering",
      "Ignore a simpler representation that matches the problem better than Binary Search Trees",
      "When the problem lacks the assumptions or structure that make Binary Search Trees correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Binary Search Trees correct or efficient This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-17",
    topicId: "bst",
    prompt:
      "When explaining a Binary Search Trees solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Start coding Binary Search Trees before stating what its state represents",
      "Describe only Binary Search Trees's syntax and omit the algorithm steps",
      "Avoid discussing Binary Search Trees's complexity or correctness assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-18",
    topicId: "bst",
    prompt:
      "Why should constraints be examined before selecting Binary Search Trees?",
    options: [
      "Pick Binary Search Trees before reading the input limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Binary Search Trees fits memory and time limits without estimating them",
      "Treat Binary Search Trees constraints as irrelevant once an approach is familiar",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-19",
    topicId: "bst",
    prompt:
      "What is the main value of dry-running a Binary Search Trees solution on a small example?",
    options: [
      "Dry-run Binary Search Trees only after declaring the solution complete",
      "Trace Binary Search Trees values without checking state transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that cannot exercise Binary Search Trees's boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Binary Search Trees.",
  },
  {
    id: "bst-20",
    topicId: "bst",
    prompt:
      "After solving a Binary Search Trees problem, which review question best improves interview readiness?",
    options: [
      "Memorize Binary Search Trees code without revisiting its assumptions",
      "Judge Binary Search Trees readiness only by whether a solution was accepted",
      "Skip reviewing how Binary Search Trees would change under new constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Binary Search Trees.",
  },
];
