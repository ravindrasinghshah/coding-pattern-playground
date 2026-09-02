import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "stack",
  category: "data-structures",
  title: "Stack",
  description:
    "Review LIFO behavior, parsing, monotonic stacks, and interview applications.",
  accent: "green",
  questionIds: [
    "stack-01",
    "stack-02",
    "stack-03",
    "stack-04",
    "stack-05",
    "stack-06",
    "stack-07",
    "stack-08",
    "stack-09",
    "stack-10",
    "stack-11",
    "stack-12",
    "stack-13",
    "stack-14",
    "stack-15",
    "stack-16",
    "stack-17",
    "stack-18",
    "stack-19",
    "stack-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "stack-01",
    topicId: "stack",
    prompt: "Which statement best describes the core purpose of Stack?",
    options: [
      "LIFO order preserves the most recent unresolved item",
      "Model Stack as a simple adjacent-pair scan",
      "Use only a flat array even when Stack needs structural relationships",
      "Assume Stack solves every lookup problem in constant time",
    ],
    correctOption: 0,
    explanation:
      "LIFO order preserves the most recent unresolved item This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-02",
    topicId: "stack",
    prompt: "Which interview clue most strongly suggests considering Stack?",
    options: [
      "The input is sorted and needs only one direct lookup instead of Stack",
      "nested structure, undo behavior, or nearest unresolved element matters",
      "Only neighboring elements matter, so Stack adds no value",
      "Each item is independent and has no relationships for Stack to represent",
    ],
    correctOption: 1,
    explanation:
      "nested structure, undo behavior, or nearest unresolved element matters This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-03",
    topicId: "stack",
    prompt:
      "What is the most useful invariant to maintain when applying Stack?",
    options: [
      "Never update the Stack state after a transition",
      "Track only the final result and discard all Stack intermediate state",
      "Maintain a condition that remains true as the Stack algorithm progresses",
      "Allow Stack state to violate its defining ordering or relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Stack algorithm progresses This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-04",
    topicId: "stack",
    prompt:
      "When using a standard efficient implementation of Stack, what should you analyze first to justify its time complexity?",
    options: [
      "Count only the number of method calls, ignoring the size of Stack",
      "Treat every Stack operation as O(1) regardless of input shape",
      "Analyze source-code length instead of the work Stack performs",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-05",
    topicId: "stack",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Stack?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Count only the returned value and exclude Stack's auxiliary storage",
      "Ignore the nodes, references, or buffers retained by Stack",
      "Assume Stack uses no memory when it is implemented iteratively",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-06",
    topicId: "stack",
    prompt:
      "Which edge case should be checked explicitly in a robust Stack solution?",
    options: [
      "Test only a typical Stack input and skip empty cases",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Check Stack only with distinct values and no boundary conditions",
      "Avoid testing malformed links, missing children, or disconnected Stack state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-07",
    topicId: "stack",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Stack solution?",
    options: [
      "Mutate Stack state before recording the information needed later",
      "Reuse stale Stack references after the structure changes",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update multiple Stack boundaries without checking their relationship",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-08",
    topicId: "stack",
    prompt:
      "What is the best reason to compare Stack with an alternative approach before coding?",
    options: [
      "Choose Stack solely because its implementation is familiar",
      "Prefer an approach that uses more memory than Stack without a benefit",
      "Compare only code length rather than Stack's operations and guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-09",
    topicId: "stack",
    prompt:
      "Which input property can materially change how you implement Stack?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Stack input is ordered, weighted, cyclic, or mutable",
      "Assume Stack behaves identically for sparse and dense inputs",
      "Choose Stack without checking its key or value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-10",
    topicId: "stack",
    prompt:
      "What should algorithmic state represent in a clean Stack solution?",
    options: [
      "Store every input detail even when Stack will never use it again",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Let Stack state duplicate solved work without a purpose",
      "Use unnamed global variables rather than meaningful Stack state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-11",
    topicId: "stack",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Stack?",
    options: [
      "Revisit the same Stack state indefinitely without a stopping rule",
      "Recurse through Stack without defining a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Stack processing after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-12",
    topicId: "stack",
    prompt:
      "What is the strongest way to reason about correctness for Stack in an interview?",
    options: [
      "Claim Stack is correct because it passed one example",
      "Explain Stack only with intuition and no preserved property",
      "Skip showing how Stack transitions maintain valid state",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-13",
    topicId: "stack",
    prompt:
      "Before optimizing a working Stack solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Stack before measuring time or memory use",
      "Assume Stack's slowest operation cannot be improved",
      "Focus on stylistic changes instead of Stack's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-14",
    topicId: "stack",
    prompt: "Which implementation habit most improves reliability for Stack?",
    options: [
      "Use ambiguous names for Stack nodes, pointers, and boundaries",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Stack updates across unrelated branches",
      "Rely on implicit side effects instead of clear Stack state changes",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-15",
    topicId: "stack",
    prompt:
      "Which test strategy is most useful for validating a Stack implementation?",
    options: [
      "Test Stack only on large random inputs",
      "Skip duplicate and boundary cases when validating Stack",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Stack works if it compiles without dry-running examples",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-16",
    topicId: "stack",
    prompt: "When should you avoid forcing Stack onto a problem?",
    options: [
      "Use Stack whenever the problem mentions a collection",
      "Force Stack onto input that lacks its required relationships or ordering",
      "Ignore a simpler representation that matches the problem better than Stack",
      "When the problem lacks the assumptions or structure that make Stack correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Stack correct or efficient This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-17",
    topicId: "stack",
    prompt:
      "When explaining a Stack solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Start coding Stack before stating what its state represents",
      "Describe only Stack's syntax and omit the algorithm steps",
      "Avoid discussing Stack's complexity or correctness assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-18",
    topicId: "stack",
    prompt: "Why should constraints be examined before selecting Stack?",
    options: [
      "Pick Stack before reading the input limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Stack fits memory and time limits without estimating them",
      "Treat Stack constraints as irrelevant once an approach is familiar",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-19",
    topicId: "stack",
    prompt:
      "What is the main value of dry-running a Stack solution on a small example?",
    options: [
      "Dry-run Stack only after declaring the solution complete",
      "Trace Stack values without checking state transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that cannot exercise Stack's boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Stack.",
  },
  {
    id: "stack-20",
    topicId: "stack",
    prompt:
      "After solving a Stack problem, which review question best improves interview readiness?",
    options: [
      "Memorize Stack code without revisiting its assumptions",
      "Judge Stack readiness only by whether a solution was accepted",
      "Skip reviewing how Stack would change under new constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Stack.",
  },
];
