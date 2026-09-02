import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "binary-search",
  category: "patterns",
  title: "Binary Search",
  description:
    "Master search-space reduction, boundaries, variants, and binary search on answers.",
  accent: "coral",
  questionIds: [
    "binary-search-01",
    "binary-search-02",
    "binary-search-03",
    "binary-search-04",
    "binary-search-05",
    "binary-search-06",
    "binary-search-07",
    "binary-search-08",
    "binary-search-09",
    "binary-search-10",
    "binary-search-11",
    "binary-search-12",
    "binary-search-13",
    "binary-search-14",
    "binary-search-15",
    "binary-search-16",
    "binary-search-17",
    "binary-search-18",
    "binary-search-19",
    "binary-search-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "binary-search-01",
    topicId: "binary-search",
    prompt: "Which statement best describes the core purpose of Binary Search?",
    options: [
      "each decision discards a large portion of an ordered or monotonic search space",
      "Use binary search only after checking every candidate combination explicitly",
      "Treat binary search as a way to avoid defining a problem-specific invariant",
      "Apply binary search whenever an input contains numbers",
    ],
    correctOption: 0,
    explanation:
      "each decision discards a large portion of an ordered or monotonic search space This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-02",
    topicId: "binary-search",
    prompt:
      "Which interview clue most strongly suggests considering Binary Search?",
    options: [
      "The input is stored in a linked list",
      "a sorted domain or monotonic predicate lets you eliminate half the candidates",
      "The result must be returned as a string",
      "The programming language supports recursion",
    ],
    correctOption: 1,
    explanation:
      "a sorted domain or monotonic predicate lets you eliminate half the candidates This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-03",
    topicId: "binary-search",
    prompt:
      "What is the most useful invariant to maintain when applying Binary Search?",
    options: [
      "Make the next local choice without tracking what it invalidates",
      "Reinitialize all binary search state after each transition",
      "Maintain a condition that remains true as the Binary Search algorithm progresses",
      "Preserve the current output format rather than an algorithmic condition",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Binary Search algorithm progresses This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-04",
    topicId: "binary-search",
    prompt:
      "When using a standard efficient implementation of Binary Search, what should you analyze first to justify its time complexity?",
    options: [
      "Count only the visible loop headers in the code",
      "Assume repeated subproblems are free once recognized",
      "Ignore preprocessing and pointer or state movement",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-05",
    topicId: "binary-search",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Binary Search?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "The storage used by variable names",
      "Only the size of the final returned value",
      "The input itself even when it is read in place",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-06",
    topicId: "binary-search",
    prompt:
      "Which edge case should be checked explicitly in a robust Binary Search solution?",
    options: [
      "Only a typical input near the average size",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "One input whose elements are all distinct",
      "The largest value without checking boundary placement",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-07",
    topicId: "binary-search",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Binary Search solution?",
    options: [
      "Choosing an explicit invariant before writing updates",
      "Separating the termination condition from the work performed",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Testing a pointer or state boundary before accessing it",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-08",
    topicId: "binary-search",
    prompt:
      "What is the best reason to compare Binary Search with an alternative approach before coding?",
    options: [
      "The familiar pattern always has the fewest lines of code",
      "A solution with more variables must be more efficient",
      "binary search can replace every alternative algorithm",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-09",
    topicId: "binary-search",
    prompt:
      "Which input property can materially change how you implement Binary Search?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "The font used to display the input",
      "The order in which variables are declared",
      "Whether sample output includes explanatory text",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-10",
    topicId: "binary-search",
    prompt:
      "What should algorithmic state represent in a clean Binary Search solution?",
    options: [
      "A complete log of every decision after it is no longer useful",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "A duplicate copy of all previously processed input",
      "The source-code location of the latest update",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-11",
    topicId: "binary-search",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Binary Search?",
    options: [
      "Every state variable changes on every iteration",
      "The input is guaranteed to contain a solution",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "The algorithm uses at least two loops",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-12",
    topicId: "binary-search",
    prompt:
      "What is the strongest way to reason about correctness for Binary Search in an interview?",
    options: [
      "Show a single input for which the result looks correct",
      "State that the pattern is frequently used in interviews",
      "Argue that fewer lines of code imply correctness",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-13",
    topicId: "binary-search",
    prompt:
      "Before optimizing a working Binary Search solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "The shortest-looking implementation",
      "An optimization copied from an unrelated problem",
      "A replacement data structure before measuring the current bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-14",
    topicId: "binary-search",
    prompt:
      "Which implementation habit most improves reliability for Binary Search?",
    options: [
      "Update every state variable in one compact expression",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Use generic names so the state can be reused everywhere",
      "Move all boundaries before evaluating the current state",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-15",
    topicId: "binary-search",
    prompt:
      "Which test strategy is most useful for validating a Binary Search implementation?",
    options: [
      "One large random input only",
      "Only inputs known to have a valid answer",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "A happy-path input with no duplicates or boundaries",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-16",
    topicId: "binary-search",
    prompt: "When should you avoid forcing Binary Search onto a problem?",
    options: [
      "Whenever the input contains more than one element",
      "Whenever the output is an index rather than a value",
      "Whenever the solution needs an iterative loop",
      "When the problem lacks the assumptions or structure that make Binary Search correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Binary Search correct or efficient This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-17",
    topicId: "binary-search",
    prompt:
      "When explaining a Binary Search solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "The final code before explaining the strategy",
      "Only the result for one sample input",
      "The syntax features of the chosen language",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-18",
    topicId: "binary-search",
    prompt:
      "Why should constraints be examined before selecting Binary Search?",
    options: [
      "Constraints only determine variable types",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "binary search is optimal for every array input",
      "Constraints can be ignored once a familiar pattern is recognized",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-19",
    topicId: "binary-search",
    prompt:
      "What is the main value of dry-running a Binary Search solution on a small example?",
    options: [
      "It proves correctness for all possible inputs",
      "It removes the need to test duplicates and boundaries",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "It determines complexity without tracing state movement",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Binary Search.",
  },
  {
    id: "binary-search-20",
    topicId: "binary-search",
    prompt:
      "After solving a Binary Search problem, which review question best improves interview readiness?",
    options: [
      "Can I reproduce this exact code character for character?",
      "Did I use the fewest possible local variables?",
      "Would the code still compile after renaming its variables?",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Binary Search.",
  },
];
