import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "queue-deque",
  category: "data-structures",
  title: "Queue & Deque",
  description:
    "Review FIFO processing, deques, BFS usage, and window techniques.",
  accent: "amber",
  questionIds: [
    "queue-deque-01",
    "queue-deque-02",
    "queue-deque-03",
    "queue-deque-04",
    "queue-deque-05",
    "queue-deque-06",
    "queue-deque-07",
    "queue-deque-08",
    "queue-deque-09",
    "queue-deque-10",
    "queue-deque-11",
    "queue-deque-12",
    "queue-deque-13",
    "queue-deque-14",
    "queue-deque-15",
    "queue-deque-16",
    "queue-deque-17",
    "queue-deque-18",
    "queue-deque-19",
    "queue-deque-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "queue-deque-01",
    topicId: "queue-deque",
    prompt: "Which statement best describes the core purpose of Queue & Deque?",
    options: [
      "FIFO or double-ended access controls processing order efficiently",
      "Model Queue & Deque as a simple adjacent-pair scan",
      "Use only a flat array even when Queue & Deque needs structural relationships",
      "Assume Queue & Deque solves every lookup problem in constant time",
    ],
    correctOption: 0,
    explanation:
      "FIFO or double-ended access controls processing order efficiently This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-02",
    topicId: "queue-deque",
    prompt:
      "Which interview clue most strongly suggests considering Queue & Deque?",
    options: [
      "The input is sorted and needs only one direct lookup instead of Queue & Deque",
      "work must be processed by arrival order or both ends are useful",
      "Only neighboring elements matter, so Queue & Deque adds no value",
      "Each item is independent and has no relationships for Queue & Deque to represent",
    ],
    correctOption: 1,
    explanation:
      "work must be processed by arrival order or both ends are useful This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-03",
    topicId: "queue-deque",
    prompt:
      "What is the most useful invariant to maintain when applying Queue & Deque?",
    options: [
      "Never update the Queue & Deque state after a transition",
      "Track only the final result and discard all Queue & Deque intermediate state",
      "Maintain a condition that remains true as the Queue & Deque algorithm progresses",
      "Allow Queue & Deque state to violate its defining ordering or relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Queue & Deque algorithm progresses This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-04",
    topicId: "queue-deque",
    prompt:
      "When using a standard efficient implementation of Queue & Deque, what should you analyze first to justify its time complexity?",
    options: [
      "Count only the number of method calls, ignoring the size of Queue & Deque",
      "Treat every Queue & Deque operation as O(1) regardless of input shape",
      "Analyze source-code length instead of the work Queue & Deque performs",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-05",
    topicId: "queue-deque",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Queue & Deque?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Count only the returned value and exclude Queue & Deque's auxiliary storage",
      "Ignore the nodes, references, or buffers retained by Queue & Deque",
      "Assume Queue & Deque uses no memory when it is implemented iteratively",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-06",
    topicId: "queue-deque",
    prompt:
      "Which edge case should be checked explicitly in a robust Queue & Deque solution?",
    options: [
      "Test only a typical Queue & Deque input and skip empty cases",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Check Queue & Deque only with distinct values and no boundary conditions",
      "Avoid testing malformed links, missing children, or disconnected Queue & Deque state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-07",
    topicId: "queue-deque",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Queue & Deque solution?",
    options: [
      "Mutate Queue & Deque state before recording the information needed later",
      "Reuse stale Queue & Deque references after the structure changes",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update multiple Queue & Deque boundaries without checking their relationship",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-08",
    topicId: "queue-deque",
    prompt:
      "What is the best reason to compare Queue & Deque with an alternative approach before coding?",
    options: [
      "Choose Queue & Deque solely because its implementation is familiar",
      "Prefer an approach that uses more memory than Queue & Deque without a benefit",
      "Compare only code length rather than Queue & Deque's operations and guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-09",
    topicId: "queue-deque",
    prompt:
      "Which input property can materially change how you implement Queue & Deque?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Queue & Deque input is ordered, weighted, cyclic, or mutable",
      "Assume Queue & Deque behaves identically for sparse and dense inputs",
      "Choose Queue & Deque without checking its key or value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-10",
    topicId: "queue-deque",
    prompt:
      "What should algorithmic state represent in a clean Queue & Deque solution?",
    options: [
      "Store every input detail even when Queue & Deque will never use it again",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Let Queue & Deque state duplicate solved work without a purpose",
      "Use unnamed global variables rather than meaningful Queue & Deque state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-11",
    topicId: "queue-deque",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Queue & Deque?",
    options: [
      "Revisit the same Queue & Deque state indefinitely without a stopping rule",
      "Recurse through Queue & Deque without defining a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Queue & Deque processing after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-12",
    topicId: "queue-deque",
    prompt:
      "What is the strongest way to reason about correctness for Queue & Deque in an interview?",
    options: [
      "Claim Queue & Deque is correct because it passed one example",
      "Explain Queue & Deque only with intuition and no preserved property",
      "Skip showing how Queue & Deque transitions maintain valid state",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-13",
    topicId: "queue-deque",
    prompt:
      "Before optimizing a working Queue & Deque solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Queue & Deque before measuring time or memory use",
      "Assume Queue & Deque's slowest operation cannot be improved",
      "Focus on stylistic changes instead of Queue & Deque's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-14",
    topicId: "queue-deque",
    prompt:
      "Which implementation habit most improves reliability for Queue & Deque?",
    options: [
      "Use ambiguous names for Queue & Deque nodes, pointers, and boundaries",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Queue & Deque updates across unrelated branches",
      "Rely on implicit side effects instead of clear Queue & Deque state changes",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-15",
    topicId: "queue-deque",
    prompt:
      "Which test strategy is most useful for validating a Queue & Deque implementation?",
    options: [
      "Test Queue & Deque only on large random inputs",
      "Skip duplicate and boundary cases when validating Queue & Deque",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Queue & Deque works if it compiles without dry-running examples",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-16",
    topicId: "queue-deque",
    prompt: "When should you avoid forcing Queue & Deque onto a problem?",
    options: [
      "Use Queue & Deque whenever the problem mentions a collection",
      "Force Queue & Deque onto input that lacks its required relationships or ordering",
      "Ignore a simpler representation that matches the problem better than Queue & Deque",
      "When the problem lacks the assumptions or structure that make Queue & Deque correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Queue & Deque correct or efficient This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-17",
    topicId: "queue-deque",
    prompt:
      "When explaining a Queue & Deque solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Start coding Queue & Deque before stating what its state represents",
      "Describe only Queue & Deque's syntax and omit the algorithm steps",
      "Avoid discussing Queue & Deque's complexity or correctness assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-18",
    topicId: "queue-deque",
    prompt:
      "Why should constraints be examined before selecting Queue & Deque?",
    options: [
      "Pick Queue & Deque before reading the input limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Queue & Deque fits memory and time limits without estimating them",
      "Treat Queue & Deque constraints as irrelevant once an approach is familiar",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-19",
    topicId: "queue-deque",
    prompt:
      "What is the main value of dry-running a Queue & Deque solution on a small example?",
    options: [
      "Dry-run Queue & Deque only after declaring the solution complete",
      "Trace Queue & Deque values without checking state transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that cannot exercise Queue & Deque's boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Queue & Deque.",
  },
  {
    id: "queue-deque-20",
    topicId: "queue-deque",
    prompt:
      "After solving a Queue & Deque problem, which review question best improves interview readiness?",
    options: [
      "Memorize Queue & Deque code without revisiting its assumptions",
      "Judge Queue & Deque readiness only by whether a solution was accepted",
      "Skip reviewing how Queue & Deque would change under new constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Queue & Deque.",
  },
];
