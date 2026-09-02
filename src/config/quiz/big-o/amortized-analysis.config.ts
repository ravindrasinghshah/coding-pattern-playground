import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "amortized-analysis",
  category: "big-o",
  title: "Amortized Analysis",
  description:
    "Understand aggregate costs such as dynamic arrays and stack-based techniques.",
  accent: "blue",
  questionIds: [
    "amortized-analysis-01",
    "amortized-analysis-02",
    "amortized-analysis-03",
    "amortized-analysis-04",
    "amortized-analysis-05",
    "amortized-analysis-06",
    "amortized-analysis-07",
    "amortized-analysis-08",
    "amortized-analysis-09",
    "amortized-analysis-10",
    "amortized-analysis-11",
    "amortized-analysis-12",
    "amortized-analysis-13",
    "amortized-analysis-14",
    "amortized-analysis-15",
    "amortized-analysis-16",
    "amortized-analysis-17",
    "amortized-analysis-18",
    "amortized-analysis-19",
    "amortized-analysis-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "amortized-analysis-01",
    topicId: "amortized-analysis",
    prompt:
      "Which statement best describes the core purpose of Amortized Analysis?",
    options: [
      "rare expensive operations are averaged over a sequence of operations",
      "Amortized Analysis gives an exact count of processor instructions",
      "Amortized Analysis is determined only by the programming language used",
      "Amortized Analysis measures milliseconds on one machine",
    ],
    correctOption: 0,
    explanation:
      "rare expensive operations are averaged over a sequence of operations This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-02",
    topicId: "amortized-analysis",
    prompt:
      "Which interview clue most strongly suggests considering Amortized Analysis?",
    options: [
      "Amortized Analysis applies only after optimization is complete",
      "an operation is usually cheap but occasionally triggers costly resizing or cleanup",
      "Amortized Analysis is useful only when every input has the same size",
      "Amortized Analysis can be chosen without comparing alternatives",
    ],
    correctOption: 1,
    explanation:
      "an operation is usually cheap but occasionally triggers costly resizing or cleanup This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-03",
    topicId: "amortized-analysis",
    prompt:
      "What is the most useful invariant to maintain when applying Amortized Analysis?",
    options: [
      "Amortized Analysis may change its assumptions at every step",
      "Amortized Analysis needs no relationship between input size and work",
      "Maintain a condition that remains true as the Amortized Analysis algorithm progresses",
      "A Amortized Analysis argument remains valid when the measured operation changes",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Amortized Analysis algorithm progresses This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-04",
    topicId: "amortized-analysis",
    prompt:
      "When using a standard efficient implementation of Amortized Analysis, what should you analyze first to justify its time complexity?",
    options: [
      "Use the line count of a Amortized Analysis implementation as its time complexity",
      "Analyze only the first loop in Amortized Analysis code",
      "Treat nested work as constant in Amortized Analysis regardless of its repetitions",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-05",
    topicId: "amortized-analysis",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Amortized Analysis?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Count only the returned value when measuring Amortized Analysis space",
      "Exclude temporary arrays and call frames from Amortized Analysis memory",
      "Assume input copies never affect Amortized Analysis auxiliary space",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-06",
    topicId: "amortized-analysis",
    prompt:
      "Which edge case should be checked explicitly in a robust Amortized Analysis solution?",
    options: [
      "Check only a typical large input for Amortized Analysis",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip duplicate and boundary inputs when evaluating Amortized Analysis",
      "Use arbitrary random inputs instead of constraint-relevant Amortized Analysis cases",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-07",
    topicId: "amortized-analysis",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Amortized Analysis solution?",
    options: [
      "Add source-code line numbers to calculate Amortized Analysis work",
      "Ignore repeated work when estimating Amortized Analysis costs",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Assume helper calls have no cost in Amortized Analysis analysis",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-08",
    topicId: "amortized-analysis",
    prompt:
      "What is the best reason to compare Amortized Analysis with an alternative approach before coding?",
    options: [
      "Choose Amortized Analysis solely by its best-case complexity",
      "Prefer the smallest Amortized Analysis bound when its assumptions fail",
      "Compare Amortized Analysis approaches without considering space costs",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-09",
    topicId: "amortized-analysis",
    prompt:
      "Which input property can materially change how you implement Amortized Analysis?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Input ordering never changes behavior relevant to Amortized Analysis",
      "Amortized Analysis has identical trade-offs for bounded and unbounded inputs",
      "Ignore mutability and representation in Amortized Analysis analysis",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-10",
    topicId: "amortized-analysis",
    prompt:
      "What should algorithmic state represent in a clean Amortized Analysis solution?",
    options: [
      "Store every past intermediate result in a Amortized Analysis solution",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Keep state that cannot affect a future Amortized Analysis decision",
      "Recompute known results instead of tracking state for Amortized Analysis",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-11",
    topicId: "amortized-analysis",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Amortized Analysis?",
    options: [
      "A Amortized Analysis process can revisit the same state forever and terminate",
      "Termination follows from adding more work at every Amortized Analysis step",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Base cases are unnecessary when discussing Amortized Analysis",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-12",
    topicId: "amortized-analysis",
    prompt:
      "What is the strongest way to reason about correctness for Amortized Analysis in an interview?",
    options: [
      "Benchmark timings prove Amortized Analysis reasoning is correct",
      "A familiar-looking implementation proves Amortized Analysis correctness",
      "Only the final output needs justification in a Amortized Analysis argument",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-13",
    topicId: "amortized-analysis",
    prompt:
      "Before optimizing a working Amortized Analysis solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Amortized Analysis code before finding the dominant operation",
      "Target the most visual line rather than the Amortized Analysis bottleneck",
      "Assume memory cannot limit Amortized Analysis",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-14",
    topicId: "amortized-analysis",
    prompt:
      "Which implementation habit most improves reliability for Amortized Analysis?",
    options: [
      "Use vague names so a Amortized Analysis calculation stays concise",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Update related Amortized Analysis counters in unrelated code paths",
      "Hide boundary changes inside expressions in Amortized Analysis code",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-15",
    topicId: "amortized-analysis",
    prompt:
      "Which test strategy is most useful for validating a Amortized Analysis implementation?",
    options: [
      "Validate Amortized Analysis with only one successful example",
      "Test Amortized Analysis only at the largest input size",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Avoid adversarial inputs when testing Amortized Analysis",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-16",
    topicId: "amortized-analysis",
    prompt: "When should you avoid forcing Amortized Analysis onto a problem?",
    options: [
      "Apply Amortized Analysis when its cost model is unspecified",
      "Force a Amortized Analysis conclusion when constraints contradict it",
      "Use Amortized Analysis instead of understanding the underlying operation",
      "When the problem lacks the assumptions or structure that make Amortized Analysis correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Amortized Analysis correct or efficient This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-17",
    topicId: "amortized-analysis",
    prompt:
      "When explaining a Amortized Analysis solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "State only the final Amortized Analysis bound and omit its causes",
      "Explain Amortized Analysis after coding instead of before choosing an approach",
      "Present Amortized Analysis without an input-size variable or assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-18",
    topicId: "amortized-analysis",
    prompt:
      "Why should constraints be examined before selecting Amortized Analysis?",
    options: [
      "Choose Amortized Analysis before checking input limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Treat all Amortized Analysis time-space trade-offs as equally acceptable",
      "Assume brute force passes regardless of Amortized Analysis constraints",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-19",
    topicId: "amortized-analysis",
    prompt:
      "What is the main value of dry-running a Amortized Analysis solution on a small example?",
    options: [
      "Dry-run Amortized Analysis only after fixing the complexity conclusion",
      "Use a large example that hides individual Amortized Analysis operations",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Skip state tracing when checking a Amortized Analysis argument",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Amortized Analysis.",
  },
  {
    id: "amortized-analysis-20",
    topicId: "amortized-analysis",
    prompt:
      "After solving a Amortized Analysis problem, which review question best improves interview readiness?",
    options: [
      "Memorize a Amortized Analysis label without deriving the work",
      "Review Amortized Analysis only by checking whether code compiles",
      "Judge Amortized Analysis readiness without explaining its cost model",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Amortized Analysis.",
  },
];
