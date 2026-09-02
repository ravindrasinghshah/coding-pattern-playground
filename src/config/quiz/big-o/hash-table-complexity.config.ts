import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "hash-table-complexity",
  category: "big-o",
  title: "Hash Table Complexity",
  description:
    "Distinguish expected, average, and worst-case hash table behavior.",
  accent: "green",
  questionIds: [
    "hash-table-complexity-01",
    "hash-table-complexity-02",
    "hash-table-complexity-03",
    "hash-table-complexity-04",
    "hash-table-complexity-05",
    "hash-table-complexity-06",
    "hash-table-complexity-07",
    "hash-table-complexity-08",
    "hash-table-complexity-09",
    "hash-table-complexity-10",
    "hash-table-complexity-11",
    "hash-table-complexity-12",
    "hash-table-complexity-13",
    "hash-table-complexity-14",
    "hash-table-complexity-15",
    "hash-table-complexity-16",
    "hash-table-complexity-17",
    "hash-table-complexity-18",
    "hash-table-complexity-19",
    "hash-table-complexity-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "hash-table-complexity-01",
    topicId: "hash-table-complexity",
    prompt:
      "Which statement best describes the core purpose of Hash Table Complexity?",
    options: [
      "expected constant-time operations depend on hashing and controlled load, while worst-case collisions can degrade performance",
      "Hash Table Complexity gives an exact count of processor instructions",
      "Hash Table Complexity is determined only by the programming language used",
      "Hash Table Complexity measures milliseconds on one machine",
    ],
    correctOption: 0,
    explanation:
      "expected constant-time operations depend on hashing and controlled load, while worst-case collisions can degrade performance This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-02",
    topicId: "hash-table-complexity",
    prompt:
      "Which interview clue most strongly suggests considering Hash Table Complexity?",
    options: [
      "Hash Table Complexity applies only after optimization is complete",
      "a solution relies on map or set lookup complexity",
      "Hash Table Complexity is useful only when every input has the same size",
      "Hash Table Complexity can be chosen without comparing alternatives",
    ],
    correctOption: 1,
    explanation:
      "a solution relies on map or set lookup complexity This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-03",
    topicId: "hash-table-complexity",
    prompt:
      "What is the most useful invariant to maintain when applying Hash Table Complexity?",
    options: [
      "Hash Table Complexity may change its assumptions at every step",
      "Hash Table Complexity needs no relationship between input size and work",
      "Maintain a condition that remains true as the Hash Table Complexity algorithm progresses",
      "A Hash Table Complexity argument remains valid when the measured operation changes",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Hash Table Complexity algorithm progresses This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-04",
    topicId: "hash-table-complexity",
    prompt:
      "When using a standard efficient implementation of Hash Table Complexity, what should you analyze first to justify its time complexity?",
    options: [
      "Use the line count of a Hash Table Complexity implementation as its time complexity",
      "Analyze only the first loop in Hash Table Complexity code",
      "Treat nested work as constant in Hash Table Complexity regardless of its repetitions",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-05",
    topicId: "hash-table-complexity",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Hash Table Complexity?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Count only the returned value when measuring Hash Table Complexity space",
      "Exclude temporary arrays and call frames from Hash Table Complexity memory",
      "Assume input copies never affect Hash Table Complexity auxiliary space",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-06",
    topicId: "hash-table-complexity",
    prompt:
      "Which edge case should be checked explicitly in a robust Hash Table Complexity solution?",
    options: [
      "Check only a typical large input for Hash Table Complexity",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip duplicate and boundary inputs when evaluating Hash Table Complexity",
      "Use arbitrary random inputs instead of constraint-relevant Hash Table Complexity cases",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-07",
    topicId: "hash-table-complexity",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Hash Table Complexity solution?",
    options: [
      "Add source-code line numbers to calculate Hash Table Complexity work",
      "Ignore repeated work when estimating Hash Table Complexity costs",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Assume helper calls have no cost in Hash Table Complexity analysis",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-08",
    topicId: "hash-table-complexity",
    prompt:
      "What is the best reason to compare Hash Table Complexity with an alternative approach before coding?",
    options: [
      "Choose Hash Table Complexity solely by its best-case complexity",
      "Prefer the smallest Hash Table Complexity bound when its assumptions fail",
      "Compare Hash Table Complexity approaches without considering space costs",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-09",
    topicId: "hash-table-complexity",
    prompt:
      "Which input property can materially change how you implement Hash Table Complexity?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Input ordering never changes behavior relevant to Hash Table Complexity",
      "Hash Table Complexity has identical trade-offs for bounded and unbounded inputs",
      "Ignore mutability and representation in Hash Table Complexity analysis",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-10",
    topicId: "hash-table-complexity",
    prompt:
      "What should algorithmic state represent in a clean Hash Table Complexity solution?",
    options: [
      "Store every past intermediate result in a Hash Table Complexity solution",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Keep state that cannot affect a future Hash Table Complexity decision",
      "Recompute known results instead of tracking state for Hash Table Complexity",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-11",
    topicId: "hash-table-complexity",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Hash Table Complexity?",
    options: [
      "A Hash Table Complexity process can revisit the same state forever and terminate",
      "Termination follows from adding more work at every Hash Table Complexity step",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Base cases are unnecessary when discussing Hash Table Complexity",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-12",
    topicId: "hash-table-complexity",
    prompt:
      "What is the strongest way to reason about correctness for Hash Table Complexity in an interview?",
    options: [
      "Benchmark timings prove Hash Table Complexity reasoning is correct",
      "A familiar-looking implementation proves Hash Table Complexity correctness",
      "Only the final output needs justification in a Hash Table Complexity argument",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-13",
    topicId: "hash-table-complexity",
    prompt:
      "Before optimizing a working Hash Table Complexity solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Hash Table Complexity code before finding the dominant operation",
      "Target the most visual line rather than the Hash Table Complexity bottleneck",
      "Assume memory cannot limit Hash Table Complexity",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-14",
    topicId: "hash-table-complexity",
    prompt:
      "Which implementation habit most improves reliability for Hash Table Complexity?",
    options: [
      "Use vague names so a Hash Table Complexity calculation stays concise",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Update related Hash Table Complexity counters in unrelated code paths",
      "Hide boundary changes inside expressions in Hash Table Complexity code",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-15",
    topicId: "hash-table-complexity",
    prompt:
      "Which test strategy is most useful for validating a Hash Table Complexity implementation?",
    options: [
      "Validate Hash Table Complexity with only one successful example",
      "Test Hash Table Complexity only at the largest input size",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Avoid adversarial inputs when testing Hash Table Complexity",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-16",
    topicId: "hash-table-complexity",
    prompt:
      "When should you avoid forcing Hash Table Complexity onto a problem?",
    options: [
      "Apply Hash Table Complexity when its cost model is unspecified",
      "Force a Hash Table Complexity conclusion when constraints contradict it",
      "Use Hash Table Complexity instead of understanding the underlying operation",
      "When the problem lacks the assumptions or structure that make Hash Table Complexity correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Hash Table Complexity correct or efficient This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-17",
    topicId: "hash-table-complexity",
    prompt:
      "When explaining a Hash Table Complexity solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "State only the final Hash Table Complexity bound and omit its causes",
      "Explain Hash Table Complexity after coding instead of before choosing an approach",
      "Present Hash Table Complexity without an input-size variable or assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-18",
    topicId: "hash-table-complexity",
    prompt:
      "Why should constraints be examined before selecting Hash Table Complexity?",
    options: [
      "Choose Hash Table Complexity before checking input limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Treat all Hash Table Complexity time-space trade-offs as equally acceptable",
      "Assume brute force passes regardless of Hash Table Complexity constraints",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-19",
    topicId: "hash-table-complexity",
    prompt:
      "What is the main value of dry-running a Hash Table Complexity solution on a small example?",
    options: [
      "Dry-run Hash Table Complexity only after fixing the complexity conclusion",
      "Use a large example that hides individual Hash Table Complexity operations",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Skip state tracing when checking a Hash Table Complexity argument",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
  {
    id: "hash-table-complexity-20",
    topicId: "hash-table-complexity",
    prompt:
      "After solving a Hash Table Complexity problem, which review question best improves interview readiness?",
    options: [
      "Memorize a Hash Table Complexity label without deriving the work",
      "Review Hash Table Complexity only by checking whether code compiles",
      "Judge Hash Table Complexity readiness without explaining its cost model",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Hash Table Complexity.",
  },
];
