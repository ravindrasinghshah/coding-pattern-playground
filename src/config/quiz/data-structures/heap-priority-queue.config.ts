import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "heap-priority-queue",
  category: "data-structures",
  title: "Heap / Priority Queue",
  description:
    "Practice top-k, scheduling, streaming, and priority-based processing.",
  accent: "green",
  questionIds: [
    "heap-priority-queue-01",
    "heap-priority-queue-02",
    "heap-priority-queue-03",
    "heap-priority-queue-04",
    "heap-priority-queue-05",
    "heap-priority-queue-06",
    "heap-priority-queue-07",
    "heap-priority-queue-08",
    "heap-priority-queue-09",
    "heap-priority-queue-10",
    "heap-priority-queue-11",
    "heap-priority-queue-12",
    "heap-priority-queue-13",
    "heap-priority-queue-14",
    "heap-priority-queue-15",
    "heap-priority-queue-16",
    "heap-priority-queue-17",
    "heap-priority-queue-18",
    "heap-priority-queue-19",
    "heap-priority-queue-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "heap-priority-queue-01",
    topicId: "heap-priority-queue",
    prompt:
      "Which statement best describes the core purpose of Heap / Priority Queue?",
    options: [
      "the highest- or lowest-priority item can be repeatedly accessed efficiently",
      "Model Heap / Priority Queue as a simple adjacent-pair scan",
      "Use only a flat array even when Heap / Priority Queue needs structural relationships",
      "Assume Heap / Priority Queue solves every lookup problem in constant time",
    ],
    correctOption: 0,
    explanation:
      "the highest- or lowest-priority item can be repeatedly accessed efficiently This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-02",
    topicId: "heap-priority-queue",
    prompt:
      "Which interview clue most strongly suggests considering Heap / Priority Queue?",
    options: [
      "The input is sorted and needs only one direct lookup instead of Heap / Priority Queue",
      "you repeatedly need the current min, max, or top-k boundary",
      "Only neighboring elements matter, so Heap / Priority Queue adds no value",
      "Each item is independent and has no relationships for Heap / Priority Queue to represent",
    ],
    correctOption: 1,
    explanation:
      "you repeatedly need the current min, max, or top-k boundary This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-03",
    topicId: "heap-priority-queue",
    prompt:
      "What is the most useful invariant to maintain when applying Heap / Priority Queue?",
    options: [
      "Never update the Heap / Priority Queue state after a transition",
      "Track only the final result and discard all Heap / Priority Queue intermediate state",
      "Maintain a condition that remains true as the Heap / Priority Queue algorithm progresses",
      "Allow Heap / Priority Queue state to violate its defining ordering or relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Heap / Priority Queue algorithm progresses This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-04",
    topicId: "heap-priority-queue",
    prompt:
      "When using a standard efficient implementation of Heap / Priority Queue, what should you analyze first to justify its time complexity?",
    options: [
      "Count only the number of method calls, ignoring the size of Heap / Priority Queue",
      "Treat every Heap / Priority Queue operation as O(1) regardless of input shape",
      "Analyze source-code length instead of the work Heap / Priority Queue performs",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-05",
    topicId: "heap-priority-queue",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Heap / Priority Queue?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Count only the returned value and exclude Heap / Priority Queue's auxiliary storage",
      "Ignore the nodes, references, or buffers retained by Heap / Priority Queue",
      "Assume Heap / Priority Queue uses no memory when it is implemented iteratively",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-06",
    topicId: "heap-priority-queue",
    prompt:
      "Which edge case should be checked explicitly in a robust Heap / Priority Queue solution?",
    options: [
      "Test only a typical Heap / Priority Queue input and skip empty cases",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Check Heap / Priority Queue only with distinct values and no boundary conditions",
      "Avoid testing malformed links, missing children, or disconnected Heap / Priority Queue state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-07",
    topicId: "heap-priority-queue",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Heap / Priority Queue solution?",
    options: [
      "Mutate Heap / Priority Queue state before recording the information needed later",
      "Reuse stale Heap / Priority Queue references after the structure changes",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update multiple Heap / Priority Queue boundaries without checking their relationship",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-08",
    topicId: "heap-priority-queue",
    prompt:
      "What is the best reason to compare Heap / Priority Queue with an alternative approach before coding?",
    options: [
      "Choose Heap / Priority Queue solely because its implementation is familiar",
      "Prefer an approach that uses more memory than Heap / Priority Queue without a benefit",
      "Compare only code length rather than Heap / Priority Queue's operations and guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-09",
    topicId: "heap-priority-queue",
    prompt:
      "Which input property can materially change how you implement Heap / Priority Queue?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Heap / Priority Queue input is ordered, weighted, cyclic, or mutable",
      "Assume Heap / Priority Queue behaves identically for sparse and dense inputs",
      "Choose Heap / Priority Queue without checking its key or value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-10",
    topicId: "heap-priority-queue",
    prompt:
      "What should algorithmic state represent in a clean Heap / Priority Queue solution?",
    options: [
      "Store every input detail even when Heap / Priority Queue will never use it again",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Let Heap / Priority Queue state duplicate solved work without a purpose",
      "Use unnamed global variables rather than meaningful Heap / Priority Queue state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-11",
    topicId: "heap-priority-queue",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Heap / Priority Queue?",
    options: [
      "Revisit the same Heap / Priority Queue state indefinitely without a stopping rule",
      "Recurse through Heap / Priority Queue without defining a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Heap / Priority Queue processing after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-12",
    topicId: "heap-priority-queue",
    prompt:
      "What is the strongest way to reason about correctness for Heap / Priority Queue in an interview?",
    options: [
      "Claim Heap / Priority Queue is correct because it passed one example",
      "Explain Heap / Priority Queue only with intuition and no preserved property",
      "Skip showing how Heap / Priority Queue transitions maintain valid state",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-13",
    topicId: "heap-priority-queue",
    prompt:
      "Before optimizing a working Heap / Priority Queue solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Heap / Priority Queue before measuring time or memory use",
      "Assume Heap / Priority Queue's slowest operation cannot be improved",
      "Focus on stylistic changes instead of Heap / Priority Queue's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-14",
    topicId: "heap-priority-queue",
    prompt:
      "Which implementation habit most improves reliability for Heap / Priority Queue?",
    options: [
      "Use ambiguous names for Heap / Priority Queue nodes, pointers, and boundaries",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Heap / Priority Queue updates across unrelated branches",
      "Rely on implicit side effects instead of clear Heap / Priority Queue state changes",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-15",
    topicId: "heap-priority-queue",
    prompt:
      "Which test strategy is most useful for validating a Heap / Priority Queue implementation?",
    options: [
      "Test Heap / Priority Queue only on large random inputs",
      "Skip duplicate and boundary cases when validating Heap / Priority Queue",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Heap / Priority Queue works if it compiles without dry-running examples",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-16",
    topicId: "heap-priority-queue",
    prompt:
      "When should you avoid forcing Heap / Priority Queue onto a problem?",
    options: [
      "Use Heap / Priority Queue whenever the problem mentions a collection",
      "Force Heap / Priority Queue onto input that lacks its required relationships or ordering",
      "Ignore a simpler representation that matches the problem better than Heap / Priority Queue",
      "When the problem lacks the assumptions or structure that make Heap / Priority Queue correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Heap / Priority Queue correct or efficient This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-17",
    topicId: "heap-priority-queue",
    prompt:
      "When explaining a Heap / Priority Queue solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Start coding Heap / Priority Queue before stating what its state represents",
      "Describe only Heap / Priority Queue's syntax and omit the algorithm steps",
      "Avoid discussing Heap / Priority Queue's complexity or correctness assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-18",
    topicId: "heap-priority-queue",
    prompt:
      "Why should constraints be examined before selecting Heap / Priority Queue?",
    options: [
      "Pick Heap / Priority Queue before reading the input limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Heap / Priority Queue fits memory and time limits without estimating them",
      "Treat Heap / Priority Queue constraints as irrelevant once an approach is familiar",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-19",
    topicId: "heap-priority-queue",
    prompt:
      "What is the main value of dry-running a Heap / Priority Queue solution on a small example?",
    options: [
      "Dry-run Heap / Priority Queue only after declaring the solution complete",
      "Trace Heap / Priority Queue values without checking state transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that cannot exercise Heap / Priority Queue's boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
  {
    id: "heap-priority-queue-20",
    topicId: "heap-priority-queue",
    prompt:
      "After solving a Heap / Priority Queue problem, which review question best improves interview readiness?",
    options: [
      "Memorize Heap / Priority Queue code without revisiting its assumptions",
      "Judge Heap / Priority Queue readiness only by whether a solution was accepted",
      "Skip reviewing how Heap / Priority Queue would change under new constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Heap / Priority Queue.",
  },
];
