import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "math-geometry",
  category: "concepts",
  title: "Math & Geometry",
  description:
    "Review numeric, coordinate, modular, and geometry techniques used in coding rounds.",
  accent: "blue",
  questionIds: [
    "math-geometry-01",
    "math-geometry-02",
    "math-geometry-03",
    "math-geometry-04",
    "math-geometry-05",
    "math-geometry-06",
    "math-geometry-07",
    "math-geometry-08",
    "math-geometry-09",
    "math-geometry-10",
    "math-geometry-11",
    "math-geometry-12",
    "math-geometry-13",
    "math-geometry-14",
    "math-geometry-15",
    "math-geometry-16",
    "math-geometry-17",
    "math-geometry-18",
    "math-geometry-19",
    "math-geometry-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "math-geometry-01",
    topicId: "math-geometry",
    prompt:
      "Which statement best describes the core purpose of Math & Geometry?",
    options: [
      "mathematical structure can replace simulation or brute force",
      "Model Math & Geometry as a simple adjacent-pair scan",
      "Use a flat array when Math & Geometry needs structural relationships",
      "Assume Math & Geometry solves every lookup in constant time",
    ],
    correctOption: 0,
    explanation:
      "mathematical structure can replace simulation or brute force This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-02",
    topicId: "math-geometry",
    prompt:
      "Which interview clue most strongly suggests considering Math & Geometry?",
    options: [
      "The input needs one lookup instead of Math & Geometry",
      "coordinates, modular arithmetic, number properties, or geometric relationships dominate",
      "Only neighboring elements matter, so Math & Geometry adds no value",
      "Each item is independent with no Math & Geometry relationship to model",
    ],
    correctOption: 1,
    explanation:
      "coordinates, modular arithmetic, number properties, or geometric relationships dominate This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-03",
    topicId: "math-geometry",
    prompt:
      "What is the most useful invariant to maintain when applying Math & Geometry?",
    options: [
      "Never update Math & Geometry state after a transition",
      "Discard all Math & Geometry intermediate state",
      "Maintain a condition that remains true as the Math & Geometry algorithm progresses",
      "Let Math & Geometry violate its defining relationship",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Math & Geometry algorithm progresses This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-04",
    topicId: "math-geometry",
    prompt:
      "When using a standard efficient implementation of Math & Geometry, what should you analyze first to justify its time complexity?",
    options: [
      "Count calls but ignore Math & Geometry's input size",
      "Treat every Math & Geometry operation as O(1)",
      "Analyze code length instead of Math & Geometry's work",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-05",
    topicId: "math-geometry",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Math & Geometry?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "Exclude Math & Geometry's auxiliary storage",
      "Ignore references retained by Math & Geometry",
      "Assume iterative Math & Geometry uses no memory",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-06",
    topicId: "math-geometry",
    prompt:
      "Which edge case should be checked explicitly in a robust Math & Geometry solution?",
    options: [
      "Test only a typical Math & Geometry input",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "Skip boundary cases for Math & Geometry",
      "Avoid empty or malformed Math & Geometry state",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-07",
    topicId: "math-geometry",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Math & Geometry solution?",
    options: [
      "Mutate Math & Geometry before recording needed information",
      "Reuse stale Math & Geometry references",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Update Math & Geometry boundaries without checking them",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-08",
    topicId: "math-geometry",
    prompt:
      "What is the best reason to compare Math & Geometry with an alternative approach before coding?",
    options: [
      "Choose Math & Geometry because it is familiar",
      "Prefer more memory than Math & Geometry without benefit",
      "Compare code length, not Math & Geometry's guarantees",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-09",
    topicId: "math-geometry",
    prompt:
      "Which input property can materially change how you implement Math & Geometry?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Ignore whether Math & Geometry input is ordered or mutable",
      "Assume Math & Geometry works for every input shape",
      "Skip Math & Geometry's key and value constraints",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-10",
    topicId: "math-geometry",
    prompt:
      "What should algorithmic state represent in a clean Math & Geometry solution?",
    options: [
      "Store all input details for Math & Geometry",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "Duplicate solved work in Math & Geometry state",
      "Use unnamed global Math & Geometry state",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-11",
    topicId: "math-geometry",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Math & Geometry?",
    options: [
      "Revisit Math & Geometry state with no stopping rule",
      "Recurse through Math & Geometry without a base case",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "Continue Math & Geometry after its search space is exhausted",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-12",
    topicId: "math-geometry",
    prompt:
      "What is the strongest way to reason about correctness for Math & Geometry in an interview?",
    options: [
      "Claim Math & Geometry works because it passed one example",
      "Explain Math & Geometry without a preserved property",
      "Skip how Math & Geometry maintains validity",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-13",
    topicId: "math-geometry",
    prompt:
      "Before optimizing a working Math & Geometry solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "Optimize Math & Geometry before measuring it",
      "Assume Math & Geometry's slowest operation cannot improve",
      "Focus on style instead of Math & Geometry's bottleneck",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-14",
    topicId: "math-geometry",
    prompt:
      "Which implementation habit most improves reliability for Math & Geometry?",
    options: [
      "Use ambiguous Math & Geometry names",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Scatter related Math & Geometry updates across branches",
      "Rely on implicit Math & Geometry side effects",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-15",
    topicId: "math-geometry",
    prompt:
      "Which test strategy is most useful for validating a Math & Geometry implementation?",
    options: [
      "Test Math & Geometry only on large random inputs",
      "Skip Math & Geometry duplicates and boundaries",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Assume Math & Geometry works because it compiles",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-16",
    topicId: "math-geometry",
    prompt: "When should you avoid forcing Math & Geometry onto a problem?",
    options: [
      "Use Math & Geometry for every collection problem",
      "Force Math & Geometry onto input lacking required structure",
      "Ignore a simpler representation than Math & Geometry",
      "When the problem lacks the assumptions or structure that make Math & Geometry correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Math & Geometry correct or efficient This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-17",
    topicId: "math-geometry",
    prompt:
      "When explaining a Math & Geometry solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "Code Math & Geometry before stating its state",
      "Describe Math & Geometry syntax but omit steps",
      "Avoid Math & Geometry's complexity and assumptions",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-18",
    topicId: "math-geometry",
    prompt:
      "Why should constraints be examined before selecting Math & Geometry?",
    options: [
      "Pick Math & Geometry before reading limits",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Assume Math & Geometry meets limits without estimating",
      "Treat Math & Geometry constraints as irrelevant",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-19",
    topicId: "math-geometry",
    prompt:
      "What is the main value of dry-running a Math & Geometry solution on a small example?",
    options: [
      "Dry-run Math & Geometry only after finishing",
      "Trace Math & Geometry without checking transitions",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "Use an example that misses Math & Geometry boundaries",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Math & Geometry.",
  },
  {
    id: "math-geometry-20",
    topicId: "math-geometry",
    prompt:
      "After solving a Math & Geometry problem, which review question best improves interview readiness?",
    options: [
      "Memorize Math & Geometry code without assumptions",
      "Judge Math & Geometry only by acceptance",
      "Skip how Math & Geometry changes under constraints",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Math & Geometry.",
  },
];
