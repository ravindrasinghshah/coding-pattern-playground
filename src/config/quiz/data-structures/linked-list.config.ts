import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "linked-list",
  category: "data-structures",
  title: "Linked Lists",
  description:
    "Practice pointer manipulation, reversal, cycle detection, and list restructuring.",
  accent: "blue",
  questionIds: [
    "linked-list-01",
    "linked-list-02",
    "linked-list-03",
    "linked-list-04",
    "linked-list-05",
    "linked-list-06",
    "linked-list-07",
    "linked-list-08",
    "linked-list-09",
    "linked-list-10",
    "linked-list-11",
    "linked-list-12",
    "linked-list-13",
    "linked-list-14",
    "linked-list-15",
    "linked-list-16",
    "linked-list-17",
    "linked-list-18",
    "linked-list-19",
    "linked-list-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "linked-list-01",
    topicId: "linked-list",
    prompt: "Which statement best describes the core purpose of Linked Lists?",
    options: [
      "nodes are connected by references, so pointer rewiring changes structure without shifting elements",
      "Model Linked Lists as a simple adjacent-pair scan",
      "Use only a flat array even when Linked Lists needs structural relationships",
      "Assume Linked Lists solves every lookup problem in constant time",
    ],
    correctOption: 0,
    explanation:
      "nodes are connected by references, so pointer rewiring changes structure without shifting elements This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-02",
    topicId: "linked-list",
    prompt:
      "Which interview clue most strongly suggests considering Linked Lists?",
    options: [
      "The input is sorted and needs only one direct lookup instead of Linked Lists",
      "the problem emphasizes node relationships rather than random indexing",
      "Only neighboring elements matter, so Linked Lists adds no value",
      "Each item is independent and has no relationships for Linked Lists to represent",
    ],
    correctOption: 1,
    explanation:
      "the problem emphasizes node relationships rather than random indexing This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-03",
    topicId: "linked-list",
    prompt:
      "What is the most useful invariant to maintain when applying Linked Lists?",
    options: [
      "Never update the Linked Lists state after a transition",
      "Track only the final result and discard all Linked Lists intermediate state",
      "Maintain a condition that remains true as the Linked Lists algorithm progresses",
      "Allow Linked Lists state to violate its defining ordering or relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Linked Lists algorithm progresses This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-04",
    topicId: "linked-list",
    prompt:
      "When using a standard efficient implementation of Linked Lists, what should you analyze first to justify its time complexity?",
    options: [
      "Count only the number of method calls, ignoring the size of Linked Lists",
      "Treat every Linked Lists operation as O(1) regardless of input shape",
      "Analyze source-code length instead of the work Linked Lists performs",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-05",
    topicId: "linked-list",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Linked Lists?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Count only the returned value and exclude Linked Lists's auxiliary storage",
      "Ignore the nodes, references, or buffers retained by Linked Lists",
      "Assume Linked Lists uses no memory when it is implemented iteratively",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-06",
    topicId: "linked-list",
    prompt:
      "Which edge case should be checked explicitly in a robust Linked Lists solution?",
    options: [
      "Test only a typical Linked Lists input and skip empty cases",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Check Linked Lists only with distinct values and no boundary conditions",
      "Avoid testing malformed links, missing children, or disconnected Linked Lists state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-07",
    topicId: "linked-list",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Linked Lists solution?",
    options: [
      "Mutate Linked Lists state before recording the information needed later",
      "Reuse stale Linked Lists references after the structure changes",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update multiple Linked Lists boundaries without checking their relationship",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-08",
    topicId: "linked-list",
    prompt:
      "What is the best reason to compare Linked Lists with an alternative approach before coding?",
    options: [
      "Choose Linked Lists solely because its implementation is familiar",
      "Prefer an approach that uses more memory than Linked Lists without a benefit",
      "Compare only code length rather than Linked Lists's operations and guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-09",
    topicId: "linked-list",
    prompt:
      "Which input property can materially change how you implement Linked Lists?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Linked Lists input is ordered, weighted, cyclic, or mutable",
      "Assume Linked Lists behaves identically for sparse and dense inputs",
      "Choose Linked Lists without checking its key or value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-10",
    topicId: "linked-list",
    prompt:
      "What should algorithmic state represent in a clean Linked Lists solution?",
    options: [
      "Store every input detail even when Linked Lists will never use it again",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Let Linked Lists state duplicate solved work without a purpose",
      "Use unnamed global variables rather than meaningful Linked Lists state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-11",
    topicId: "linked-list",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Linked Lists?",
    options: [
      "Revisit the same Linked Lists state indefinitely without a stopping rule",
      "Recurse through Linked Lists without defining a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Linked Lists processing after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-12",
    topicId: "linked-list",
    prompt:
      "What is the strongest way to reason about correctness for Linked Lists in an interview?",
    options: [
      "Claim Linked Lists is correct because it passed one example",
      "Explain Linked Lists only with intuition and no preserved property",
      "Skip showing how Linked Lists transitions maintain valid state",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-13",
    topicId: "linked-list",
    prompt:
      "Before optimizing a working Linked Lists solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Linked Lists before measuring time or memory use",
      "Assume Linked Lists's slowest operation cannot be improved",
      "Focus on stylistic changes instead of Linked Lists's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-14",
    topicId: "linked-list",
    prompt:
      "Which implementation habit most improves reliability for Linked Lists?",
    options: [
      "Use ambiguous names for Linked Lists nodes, pointers, and boundaries",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Linked Lists updates across unrelated branches",
      "Rely on implicit side effects instead of clear Linked Lists state changes",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-15",
    topicId: "linked-list",
    prompt:
      "Which test strategy is most useful for validating a Linked Lists implementation?",
    options: [
      "Test Linked Lists only on large random inputs",
      "Skip duplicate and boundary cases when validating Linked Lists",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Linked Lists works if it compiles without dry-running examples",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-16",
    topicId: "linked-list",
    prompt: "When should you avoid forcing Linked Lists onto a problem?",
    options: [
      "Use Linked Lists whenever the problem mentions a collection",
      "Force Linked Lists onto input that lacks its required relationships or ordering",
      "Ignore a simpler representation that matches the problem better than Linked Lists",
      "When the problem lacks the assumptions or structure that make Linked Lists correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Linked Lists correct or efficient This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-17",
    topicId: "linked-list",
    prompt:
      "When explaining a Linked Lists solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Start coding Linked Lists before stating what its state represents",
      "Describe only Linked Lists's syntax and omit the algorithm steps",
      "Avoid discussing Linked Lists's complexity or correctness assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-18",
    topicId: "linked-list",
    prompt: "Why should constraints be examined before selecting Linked Lists?",
    options: [
      "Pick Linked Lists before reading the input limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Linked Lists fits memory and time limits without estimating them",
      "Treat Linked Lists constraints as irrelevant once an approach is familiar",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-19",
    topicId: "linked-list",
    prompt:
      "What is the main value of dry-running a Linked Lists solution on a small example?",
    options: [
      "Dry-run Linked Lists only after declaring the solution complete",
      "Trace Linked Lists values without checking state transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that cannot exercise Linked Lists's boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Linked Lists.",
  },
  {
    id: "linked-list-20",
    topicId: "linked-list",
    prompt:
      "After solving a Linked Lists problem, which review question best improves interview readiness?",
    options: [
      "Memorize Linked Lists code without revisiting its assumptions",
      "Judge Linked Lists readiness only by whether a solution was accepted",
      "Skip reviewing how Linked Lists would change under new constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Linked Lists.",
  },
];
