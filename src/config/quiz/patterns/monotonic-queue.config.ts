import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "monotonic-queue",
  category: "patterns",
  title: "Monotonic Queue",
  description: "Maintain window extrema efficiently with an ordered deque.",
  accent: "blue",
  questionIds: [
    "monotonic-queue-01",
    "monotonic-queue-02",
    "monotonic-queue-03",
    "monotonic-queue-04",
    "monotonic-queue-05",
    "monotonic-queue-06",
    "monotonic-queue-07",
    "monotonic-queue-08",
    "monotonic-queue-09",
    "monotonic-queue-10",
    "monotonic-queue-11",
    "monotonic-queue-12",
    "monotonic-queue-13",
    "monotonic-queue-14",
    "monotonic-queue-15",
    "monotonic-queue-16",
    "monotonic-queue-17",
    "monotonic-queue-18",
    "monotonic-queue-19",
    "monotonic-queue-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "monotonic-queue-01",
    topicId: "monotonic-queue",
    prompt:
      "Which statement best describes the core purpose of Monotonic Queue?",
    options: [
      "a deque removes dominated candidates while preserving the best value for a moving window",
      "Use monotonic queue only after checking every candidate combination explicitly",
      "Treat monotonic queue as a way to avoid defining a problem-specific invariant",
      "Apply monotonic queue whenever an input contains numbers",
    ],
    correctOption: 0,
    explanation:
      "a deque removes dominated candidates while preserving the best value for a moving window This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-02",
    topicId: "monotonic-queue",
    prompt:
      "Which interview clue most strongly suggests considering Monotonic Queue?",
    options: [
      "The input is stored in a linked list",
      "you need repeated min or max over a sliding window",
      "The result must be returned as a string",
      "The programming language supports recursion",
    ],
    correctOption: 1,
    explanation:
      "you need repeated min or max over a sliding window This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-03",
    topicId: "monotonic-queue",
    prompt:
      "What is the most useful invariant to maintain when applying Monotonic Queue?",
    options: [
      "Make the next local choice without tracking what it invalidates",
      "Reinitialize all monotonic queue state after each transition",
      "Maintain a condition that remains true as the Monotonic Queue algorithm progresses",
      "Preserve the current output format rather than an algorithmic condition",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Monotonic Queue algorithm progresses This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-04",
    topicId: "monotonic-queue",
    prompt:
      "When using a standard efficient implementation of Monotonic Queue, what should you analyze first to justify its time complexity?",
    options: [
      "Count only the visible loop headers in the code",
      "Assume repeated subproblems are free once recognized",
      "Ignore preprocessing and pointer or state movement",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-05",
    topicId: "monotonic-queue",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Monotonic Queue?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "The storage used by variable names",
      "Only the size of the final returned value",
      "The input itself even when it is read in place",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-06",
    topicId: "monotonic-queue",
    prompt:
      "Which edge case should be checked explicitly in a robust Monotonic Queue solution?",
    options: [
      "Only a typical input near the average size",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "One input whose elements are all distinct",
      "The largest value without checking boundary placement",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-07",
    topicId: "monotonic-queue",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Monotonic Queue solution?",
    options: [
      "Choosing an explicit invariant before writing updates",
      "Separating the termination condition from the work performed",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Testing a pointer or state boundary before accessing it",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-08",
    topicId: "monotonic-queue",
    prompt:
      "What is the best reason to compare Monotonic Queue with an alternative approach before coding?",
    options: [
      "The familiar pattern always has the fewest lines of code",
      "A solution with more variables must be more efficient",
      "monotonic queue can replace every alternative algorithm",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-09",
    topicId: "monotonic-queue",
    prompt:
      "Which input property can materially change how you implement Monotonic Queue?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "The font used to display the input",
      "The order in which variables are declared",
      "Whether sample output includes explanatory text",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-10",
    topicId: "monotonic-queue",
    prompt:
      "What should algorithmic state represent in a clean Monotonic Queue solution?",
    options: [
      "A complete log of every decision after it is no longer useful",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "A duplicate copy of all previously processed input",
      "The source-code location of the latest update",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-11",
    topicId: "monotonic-queue",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Monotonic Queue?",
    options: [
      "Every state variable changes on every iteration",
      "The input is guaranteed to contain a solution",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "The algorithm uses at least two loops",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-12",
    topicId: "monotonic-queue",
    prompt:
      "What is the strongest way to reason about correctness for Monotonic Queue in an interview?",
    options: [
      "Show a single input for which the result looks correct",
      "State that the pattern is frequently used in interviews",
      "Argue that fewer lines of code imply correctness",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-13",
    topicId: "monotonic-queue",
    prompt:
      "Before optimizing a working Monotonic Queue solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "The shortest-looking implementation",
      "An optimization copied from an unrelated problem",
      "A replacement data structure before measuring the current bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-14",
    topicId: "monotonic-queue",
    prompt:
      "Which implementation habit most improves reliability for Monotonic Queue?",
    options: [
      "Update every state variable in one compact expression",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Use generic names so the state can be reused everywhere",
      "Move all boundaries before evaluating the current state",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-15",
    topicId: "monotonic-queue",
    prompt:
      "Which test strategy is most useful for validating a Monotonic Queue implementation?",
    options: [
      "One large random input only",
      "Only inputs known to have a valid answer",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "A happy-path input with no duplicates or boundaries",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-16",
    topicId: "monotonic-queue",
    prompt: "When should you avoid forcing Monotonic Queue onto a problem?",
    options: [
      "Whenever the input contains more than one element",
      "Whenever the output is an index rather than a value",
      "Whenever the solution needs an iterative loop",
      "When the problem lacks the assumptions or structure that make Monotonic Queue correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Monotonic Queue correct or efficient This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-17",
    topicId: "monotonic-queue",
    prompt:
      "When explaining a Monotonic Queue solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "The final code before explaining the strategy",
      "Only the result for one sample input",
      "The syntax features of the chosen language",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-18",
    topicId: "monotonic-queue",
    prompt:
      "Why should constraints be examined before selecting Monotonic Queue?",
    options: [
      "Constraints only determine variable types",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "monotonic queue is optimal for every array input",
      "Constraints can be ignored once a familiar pattern is recognized",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-19",
    topicId: "monotonic-queue",
    prompt:
      "What is the main value of dry-running a Monotonic Queue solution on a small example?",
    options: [
      "It proves correctness for all possible inputs",
      "It removes the need to test duplicates and boundaries",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "It determines complexity without tracing state movement",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Monotonic Queue.",
  },
  {
    id: "monotonic-queue-20",
    topicId: "monotonic-queue",
    prompt:
      "After solving a Monotonic Queue problem, which review question best improves interview readiness?",
    options: [
      "Can I reproduce this exact code character for character?",
      "Did I use the fewest possible local variables?",
      "Would the code still compile after renaming its variables?",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Monotonic Queue.",
  },
];
