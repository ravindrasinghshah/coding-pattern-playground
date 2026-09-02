import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "complexity-analysis",
  category: "big-o",
  title: "Big-O Fundamentals",
  description:
    "Analyze time and space complexity precisely across common code patterns.",
  accent: "amber",
  questionIds: [
    "complexity-analysis-01",
    "complexity-analysis-02",
    "complexity-analysis-03",
    "complexity-analysis-04",
    "complexity-analysis-05",
    "complexity-analysis-06",
    "complexity-analysis-07",
    "complexity-analysis-08",
    "complexity-analysis-09",
    "complexity-analysis-10",
    "complexity-analysis-11",
    "complexity-analysis-12",
    "complexity-analysis-13",
    "complexity-analysis-14",
    "complexity-analysis-15",
    "complexity-analysis-16",
    "complexity-analysis-17",
    "complexity-analysis-18",
    "complexity-analysis-19",
    "complexity-analysis-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "complexity-analysis-01",
    topicId: "complexity-analysis",
    prompt:
      "Which statement best describes the core purpose of Big-O Fundamentals?",
    options: [
      "growth is expressed as input size increases while constants and lower-order terms are ignored",
      "Big-O Fundamentals gives an exact count of processor instructions",
      "Big-O Fundamentals is determined only by the programming language used",
      "Big-O Fundamentals measures milliseconds on one machine",
    ],
    correctOption: 0,
    explanation:
      "growth is expressed as input size increases while constants and lower-order terms are ignored This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-02",
    topicId: "complexity-analysis",
    prompt:
      "Which interview clue most strongly suggests considering Big-O Fundamentals?",
    options: [
      "Big-O Fundamentals applies only after optimization is complete",
      "you must compare scalability of candidate solutions",
      "Big-O Fundamentals is useful only when every input has the same size",
      "Big-O Fundamentals can be chosen without comparing alternatives",
    ],
    correctOption: 1,
    explanation:
      "you must compare scalability of candidate solutions This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-03",
    topicId: "complexity-analysis",
    prompt:
      "What is the most useful invariant to maintain when applying Big-O Fundamentals?",
    options: [
      "Big-O Fundamentals may change its assumptions at every step",
      "Big-O Fundamentals needs no relationship between input size and work",
      "Maintain a condition that remains true as the Big-O Fundamentals algorithm progresses",
      "A Big-O Fundamentals argument remains valid when the measured operation changes",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Big-O Fundamentals algorithm progresses This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-04",
    topicId: "complexity-analysis",
    prompt:
      "When using a standard efficient implementation of Big-O Fundamentals, what should you analyze first to justify its time complexity?",
    options: [
      "Use the line count of a Big-O Fundamentals implementation as its time complexity",
      "Analyze only the first loop in Big-O Fundamentals code",
      "Treat nested work as constant in Big-O Fundamentals regardless of its repetitions",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-05",
    topicId: "complexity-analysis",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Big-O Fundamentals?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Count only the returned value when measuring Big-O Fundamentals space",
      "Exclude temporary arrays and call frames from Big-O Fundamentals memory",
      "Assume input copies never affect Big-O Fundamentals auxiliary space",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-06",
    topicId: "complexity-analysis",
    prompt:
      "Which edge case should be checked explicitly in a robust Big-O Fundamentals solution?",
    options: [
      "Check only a typical large input for Big-O Fundamentals",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip duplicate and boundary inputs when evaluating Big-O Fundamentals",
      "Use arbitrary random inputs instead of constraint-relevant Big-O Fundamentals cases",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-07",
    topicId: "complexity-analysis",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Big-O Fundamentals solution?",
    options: [
      "Add source-code line numbers to calculate Big-O Fundamentals work",
      "Ignore repeated work when estimating Big-O Fundamentals costs",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Assume helper calls have no cost in Big-O Fundamentals analysis",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-08",
    topicId: "complexity-analysis",
    prompt:
      "What is the best reason to compare Big-O Fundamentals with an alternative approach before coding?",
    options: [
      "Choose Big-O Fundamentals solely by its best-case complexity",
      "Prefer the smallest Big-O Fundamentals bound when its assumptions fail",
      "Compare Big-O Fundamentals approaches without considering space costs",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-09",
    topicId: "complexity-analysis",
    prompt:
      "Which input property can materially change how you implement Big-O Fundamentals?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Input ordering never changes behavior relevant to Big-O Fundamentals",
      "Big-O Fundamentals has identical trade-offs for bounded and unbounded inputs",
      "Ignore mutability and representation in Big-O Fundamentals analysis",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-10",
    topicId: "complexity-analysis",
    prompt:
      "What should algorithmic state represent in a clean Big-O Fundamentals solution?",
    options: [
      "Store every past intermediate result in a Big-O Fundamentals solution",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Keep state that cannot affect a future Big-O Fundamentals decision",
      "Recompute known results instead of tracking state for Big-O Fundamentals",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-11",
    topicId: "complexity-analysis",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Big-O Fundamentals?",
    options: [
      "A Big-O Fundamentals process can revisit the same state forever and terminate",
      "Termination follows from adding more work at every Big-O Fundamentals step",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Base cases are unnecessary when discussing Big-O Fundamentals",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-12",
    topicId: "complexity-analysis",
    prompt:
      "What is the strongest way to reason about correctness for Big-O Fundamentals in an interview?",
    options: [
      "Benchmark timings prove Big-O Fundamentals reasoning is correct",
      "A familiar-looking implementation proves Big-O Fundamentals correctness",
      "Only the final output needs justification in a Big-O Fundamentals argument",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-13",
    topicId: "complexity-analysis",
    prompt:
      "Before optimizing a working Big-O Fundamentals solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Big-O Fundamentals code before finding the dominant operation",
      "Target the most visual line rather than the Big-O Fundamentals bottleneck",
      "Assume memory cannot limit Big-O Fundamentals",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-14",
    topicId: "complexity-analysis",
    prompt:
      "Which implementation habit most improves reliability for Big-O Fundamentals?",
    options: [
      "Use vague names so a Big-O Fundamentals calculation stays concise",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Update related Big-O Fundamentals counters in unrelated code paths",
      "Hide boundary changes inside expressions in Big-O Fundamentals code",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-15",
    topicId: "complexity-analysis",
    prompt:
      "Which test strategy is most useful for validating a Big-O Fundamentals implementation?",
    options: [
      "Validate Big-O Fundamentals with only one successful example",
      "Test Big-O Fundamentals only at the largest input size",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Avoid adversarial inputs when testing Big-O Fundamentals",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-16",
    topicId: "complexity-analysis",
    prompt: "When should you avoid forcing Big-O Fundamentals onto a problem?",
    options: [
      "Apply Big-O Fundamentals when its cost model is unspecified",
      "Force a Big-O Fundamentals conclusion when constraints contradict it",
      "Use Big-O Fundamentals instead of understanding the underlying operation",
      "When the problem lacks the assumptions or structure that make Big-O Fundamentals correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Big-O Fundamentals correct or efficient This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-17",
    topicId: "complexity-analysis",
    prompt:
      "When explaining a Big-O Fundamentals solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "State only the final Big-O Fundamentals bound and omit its causes",
      "Explain Big-O Fundamentals after coding instead of before choosing an approach",
      "Present Big-O Fundamentals without an input-size variable or assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-18",
    topicId: "complexity-analysis",
    prompt:
      "Why should constraints be examined before selecting Big-O Fundamentals?",
    options: [
      "Choose Big-O Fundamentals before checking input limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Treat all Big-O Fundamentals time-space trade-offs as equally acceptable",
      "Assume brute force passes regardless of Big-O Fundamentals constraints",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-19",
    topicId: "complexity-analysis",
    prompt:
      "What is the main value of dry-running a Big-O Fundamentals solution on a small example?",
    options: [
      "Dry-run Big-O Fundamentals only after fixing the complexity conclusion",
      "Use a large example that hides individual Big-O Fundamentals operations",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Skip state tracing when checking a Big-O Fundamentals argument",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
  {
    id: "complexity-analysis-20",
    topicId: "complexity-analysis",
    prompt:
      "After solving a Big-O Fundamentals problem, which review question best improves interview readiness?",
    options: [
      "Memorize a Big-O Fundamentals label without deriving the work",
      "Review Big-O Fundamentals only by checking whether code compiles",
      "Judge Big-O Fundamentals readiness without explaining its cost model",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Big-O Fundamentals.",
  },
];
