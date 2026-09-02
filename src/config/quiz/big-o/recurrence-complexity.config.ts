import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "recurrence-complexity",
  category: "big-o",
  title: "Recursive Complexity",
  description:
    "Reason about recursion trees, branching, depth, and divide-and-conquer complexity.",
  accent: "coral",
  questionIds: [
    "recurrence-complexity-01",
    "recurrence-complexity-02",
    "recurrence-complexity-03",
    "recurrence-complexity-04",
    "recurrence-complexity-05",
    "recurrence-complexity-06",
    "recurrence-complexity-07",
    "recurrence-complexity-08",
    "recurrence-complexity-09",
    "recurrence-complexity-10",
    "recurrence-complexity-11",
    "recurrence-complexity-12",
    "recurrence-complexity-13",
    "recurrence-complexity-14",
    "recurrence-complexity-15",
    "recurrence-complexity-16",
    "recurrence-complexity-17",
    "recurrence-complexity-18",
    "recurrence-complexity-19",
    "recurrence-complexity-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "recurrence-complexity-01",
    topicId: "recurrence-complexity",
    prompt:
      "Which statement best describes the core purpose of Recursive Complexity?",
    options: [
      "branching factor, work per call, and recursion depth determine total work",
      "Recursive Complexity gives an exact count of processor instructions",
      "Recursive Complexity is determined only by the programming language used",
      "Recursive Complexity measures milliseconds on one machine",
    ],
    correctOption: 0,
    explanation:
      "branching factor, work per call, and recursion depth determine total work This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-02",
    topicId: "recurrence-complexity",
    prompt:
      "Which interview clue most strongly suggests considering Recursive Complexity?",
    options: [
      "Recursive Complexity applies only after optimization is complete",
      "runtime is defined by recursive calls on smaller inputs",
      "Recursive Complexity is useful only when every input has the same size",
      "Recursive Complexity can be chosen without comparing alternatives",
    ],
    correctOption: 1,
    explanation:
      "runtime is defined by recursive calls on smaller inputs This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-03",
    topicId: "recurrence-complexity",
    prompt:
      "What is the most useful invariant to maintain when applying Recursive Complexity?",
    options: [
      "Recursive Complexity may change its assumptions at every step",
      "Recursive Complexity needs no relationship between input size and work",
      "Maintain a condition that remains true as the Recursive Complexity algorithm progresses",
      "A Recursive Complexity argument remains valid when the measured operation changes",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Recursive Complexity algorithm progresses This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-04",
    topicId: "recurrence-complexity",
    prompt:
      "When using a standard efficient implementation of Recursive Complexity, what should you analyze first to justify its time complexity?",
    options: [
      "Use the line count of a Recursive Complexity implementation as its time complexity",
      "Analyze only the first loop in Recursive Complexity code",
      "Treat nested work as constant in Recursive Complexity regardless of its repetitions",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-05",
    topicId: "recurrence-complexity",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Recursive Complexity?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Count only the returned value when measuring Recursive Complexity space",
      "Exclude temporary arrays and call frames from Recursive Complexity memory",
      "Assume input copies never affect Recursive Complexity auxiliary space",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-06",
    topicId: "recurrence-complexity",
    prompt:
      "Which edge case should be checked explicitly in a robust Recursive Complexity solution?",
    options: [
      "Check only a typical large input for Recursive Complexity",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip duplicate and boundary inputs when evaluating Recursive Complexity",
      "Use arbitrary random inputs instead of constraint-relevant Recursive Complexity cases",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-07",
    topicId: "recurrence-complexity",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Recursive Complexity solution?",
    options: [
      "Add source-code line numbers to calculate Recursive Complexity work",
      "Ignore repeated work when estimating Recursive Complexity costs",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Assume helper calls have no cost in Recursive Complexity analysis",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-08",
    topicId: "recurrence-complexity",
    prompt:
      "What is the best reason to compare Recursive Complexity with an alternative approach before coding?",
    options: [
      "Choose Recursive Complexity solely by its best-case complexity",
      "Prefer the smallest Recursive Complexity bound when its assumptions fail",
      "Compare Recursive Complexity approaches without considering space costs",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-09",
    topicId: "recurrence-complexity",
    prompt:
      "Which input property can materially change how you implement Recursive Complexity?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Input ordering never changes behavior relevant to Recursive Complexity",
      "Recursive Complexity has identical trade-offs for bounded and unbounded inputs",
      "Ignore mutability and representation in Recursive Complexity analysis",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-10",
    topicId: "recurrence-complexity",
    prompt:
      "What should algorithmic state represent in a clean Recursive Complexity solution?",
    options: [
      "Store every past intermediate result in a Recursive Complexity solution",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Keep state that cannot affect a future Recursive Complexity decision",
      "Recompute known results instead of tracking state for Recursive Complexity",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-11",
    topicId: "recurrence-complexity",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Recursive Complexity?",
    options: [
      "A Recursive Complexity process can revisit the same state forever and terminate",
      "Termination follows from adding more work at every Recursive Complexity step",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Base cases are unnecessary when discussing Recursive Complexity",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-12",
    topicId: "recurrence-complexity",
    prompt:
      "What is the strongest way to reason about correctness for Recursive Complexity in an interview?",
    options: [
      "Benchmark timings prove Recursive Complexity reasoning is correct",
      "A familiar-looking implementation proves Recursive Complexity correctness",
      "Only the final output needs justification in a Recursive Complexity argument",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-13",
    topicId: "recurrence-complexity",
    prompt:
      "Before optimizing a working Recursive Complexity solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Recursive Complexity code before finding the dominant operation",
      "Target the most visual line rather than the Recursive Complexity bottleneck",
      "Assume memory cannot limit Recursive Complexity",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-14",
    topicId: "recurrence-complexity",
    prompt:
      "Which implementation habit most improves reliability for Recursive Complexity?",
    options: [
      "Use vague names so a Recursive Complexity calculation stays concise",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Update related Recursive Complexity counters in unrelated code paths",
      "Hide boundary changes inside expressions in Recursive Complexity code",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-15",
    topicId: "recurrence-complexity",
    prompt:
      "Which test strategy is most useful for validating a Recursive Complexity implementation?",
    options: [
      "Validate Recursive Complexity with only one successful example",
      "Test Recursive Complexity only at the largest input size",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Avoid adversarial inputs when testing Recursive Complexity",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-16",
    topicId: "recurrence-complexity",
    prompt:
      "When should you avoid forcing Recursive Complexity onto a problem?",
    options: [
      "Apply Recursive Complexity when its cost model is unspecified",
      "Force a Recursive Complexity conclusion when constraints contradict it",
      "Use Recursive Complexity instead of understanding the underlying operation",
      "When the problem lacks the assumptions or structure that make Recursive Complexity correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Recursive Complexity correct or efficient This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-17",
    topicId: "recurrence-complexity",
    prompt:
      "When explaining a Recursive Complexity solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "State only the final Recursive Complexity bound and omit its causes",
      "Explain Recursive Complexity after coding instead of before choosing an approach",
      "Present Recursive Complexity without an input-size variable or assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-18",
    topicId: "recurrence-complexity",
    prompt:
      "Why should constraints be examined before selecting Recursive Complexity?",
    options: [
      "Choose Recursive Complexity before checking input limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Treat all Recursive Complexity time-space trade-offs as equally acceptable",
      "Assume brute force passes regardless of Recursive Complexity constraints",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-19",
    topicId: "recurrence-complexity",
    prompt:
      "What is the main value of dry-running a Recursive Complexity solution on a small example?",
    options: [
      "Dry-run Recursive Complexity only after fixing the complexity conclusion",
      "Use a large example that hides individual Recursive Complexity operations",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Skip state tracing when checking a Recursive Complexity argument",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Recursive Complexity.",
  },
  {
    id: "recurrence-complexity-20",
    topicId: "recurrence-complexity",
    prompt:
      "After solving a Recursive Complexity problem, which review question best improves interview readiness?",
    options: [
      "Memorize a Recursive Complexity label without deriving the work",
      "Review Recursive Complexity only by checking whether code compiles",
      "Judge Recursive Complexity readiness without explaining its cost model",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Recursive Complexity.",
  },
];
