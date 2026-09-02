import type { QuizQuestion, QuizTopic } from "../../../types";

export const topic: QuizTopic = {
  id: "two-pointers",
  category: "patterns",
  title: "Two Pointers",
  description:
    "Practice pointer movement, invariants, sorted-input clues, and common two-pointer problems.",
  accent: "green",
  questionIds: [
    "two-pointers-01",
    "two-pointers-02",
    "two-pointers-03",
    "two-pointers-04",
    "two-pointers-05",
    "two-pointers-06",
    "two-pointers-07",
    "two-pointers-08",
    "two-pointers-09",
    "two-pointers-10",
    "two-pointers-11",
    "two-pointers-12",
    "two-pointers-13",
    "two-pointers-14",
    "two-pointers-15",
    "two-pointers-16",
    "two-pointers-17",
    "two-pointers-18",
    "two-pointers-19",
    "two-pointers-20",
  ],
};

export const questions: QuizQuestion[] = [
  {
    id: "two-pointers-01",
    topicId: "two-pointers",
    prompt: "Which statement best describes the core purpose of Two Pointers?",
    options: [
      "two indices move according to an invariant instead of exploring all pairs",
      "Use a nested loop to compare every possible pair",
      "Split the input into fixed-size groups before processing it",
      "Build a frequency table for every problem involving an array",
    ],
    correctOption: 0,
    explanation:
      "two indices move according to an invariant instead of exploring all pairs This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-02",
    topicId: "two-pointers",
    prompt:
      "Which interview clue most strongly suggests considering Two Pointers?",
    options: [
      "The input contains only positive integers",
      "the input is ordered or the problem compares elements from two ends",
      "The problem asks for the single largest element",
      "The input is small enough to use recursion",
    ],
    correctOption: 1,
    explanation:
      "the input is ordered or the problem compares elements from two ends This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-03",
    topicId: "two-pointers",
    prompt:
      "What is the most useful invariant to maintain when applying Two Pointers?",
    options: [
      "Keep both pointers at the same index after each comparison",
      "Ensure the current pair is always the numerically smallest pair",
      "Maintain a condition that remains true as the Two Pointers algorithm progresses",
      "Store every pair examined so it can be revisited later",
    ],
    correctOption: 2,
    explanation:
      "Maintain a condition that remains true as the Two Pointers algorithm progresses This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-04",
    topicId: "two-pointers",
    prompt:
      "When using a standard efficient implementation of Two Pointers, what should you analyze first to justify its time complexity?",
    options: [
      "Count only the number of pointer variables in the implementation",
      "Assume one loop is linear even when a pointer can move backward",
      "Measure the time needed to sort the source code alphabetically",
      "Count how many times each input element or state can participate in the dominant work",
    ],
    correctOption: 3,
    explanation:
      "Count how many times each input element or state can participate in the dominant work This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-05",
    topicId: "two-pointers",
    prompt:
      "Which memory cost is easiest to overlook when reasoning about Two Pointers?",
    options: [
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output",
      "The two integer indices used as pointers",
      "The space occupied by the returned result only",
      "The input array, even when the algorithm does not copy it",
    ],
    correctOption: 0,
    explanation:
      "Auxiliary structures plus recursion/call-stack usage, not only the returned output This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-06",
    topicId: "two-pointers",
    prompt:
      "Which edge case should be checked explicitly in a robust Two Pointers solution?",
    options: [
      "Only inputs whose length is a power of two",
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes",
      "A random input of average size",
      "The largest possible value without considering its position",
    ],
    correctOption: 1,
    explanation:
      "Empty/minimal input, boundary positions, duplicates, and other constraint-relevant extremes This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-07",
    topicId: "two-pointers",
    prompt:
      "Which mistake most commonly breaks an otherwise reasonable Two Pointers solution?",
    options: [
      "Using descriptive names for the left and right indices",
      "Checking whether the pointers have crossed before reading values",
      "Changing state without preserving the condition that made earlier decisions valid",
      "Writing the loop condition before the pointer-update rules",
    ],
    correctOption: 2,
    explanation:
      "Changing state without preserving the condition that made earlier decisions valid This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-08",
    topicId: "two-pointers",
    prompt:
      "What is the best reason to compare Two Pointers with an alternative approach before coding?",
    options: [
      "Two Pointers always has fewer lines of code than any alternative",
      "The approach with more pointer variables is necessarily faster",
      "Any array problem can be converted to Two Pointers without changing the input",
      "Different approaches can have different correctness assumptions, time, space, and implementation risk",
    ],
    correctOption: 3,
    explanation:
      "Different approaches can have different correctness assumptions, time, space, and implementation risk This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-09",
    topicId: "two-pointers",
    prompt:
      "Which input property can materially change how you implement Two Pointers?",
    options: [
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured",
      "Whether values fit in a 32-bit integer",
      "Whether the input arrives from standard input or a file",
      "Whether the variable names use camelCase or snake_case",
    ],
    correctOption: 0,
    explanation:
      "Whether the data is sorted, weighted, contiguous, mutable, bounded, or otherwise structured This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-10",
    topicId: "two-pointers",
    prompt:
      "What should algorithmic state represent in a clean Two Pointers solution?",
    options: [
      "A complete history of every comparison, even after it is irrelevant",
      "Only the information needed to make future decisions and avoid recomputing solved work",
      "A separate copy of each element already passed by a pointer",
      "The source-code line number of the latest pointer move",
    ],
    correctOption: 1,
    explanation:
      "Only the information needed to make future decisions and avoid recomputing solved work This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-11",
    topicId: "two-pointers",
    prompt:
      "What should guarantee termination in an iterative or recursive use of Two Pointers?",
    options: [
      "Both pointers must move on every iteration",
      "The array must contain a valid answer",
      "Each step must make measurable progress toward a base case or exhausted search space",
      "The pointers must begin at adjacent positions",
    ],
    correctOption: 2,
    explanation:
      "Each step must make measurable progress toward a base case or exhausted search space This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-12",
    topicId: "two-pointers",
    prompt:
      "What is the strongest way to reason about correctness for Two Pointers in an interview?",
    options: [
      "Show one example where the code returns the expected result",
      "Claim that two loops are avoided, so the answer must be correct",
      "Explain that the algorithm is common in interviews",
      "State an invariant or induction-style argument showing each transition preserves validity",
    ],
    correctOption: 3,
    explanation:
      "State an invariant or induction-style argument showing each transition preserves validity This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-13",
    topicId: "two-pointers",
    prompt:
      "Before optimizing a working Two Pointers solution, what should you identify?",
    options: [
      "The actual bottleneck in time or memory under the given constraints",
      "A micro-optimization that reduces the number of variable names",
      "A replacement data structure before measuring the current solution",
      "The fastest approach used on an unrelated problem",
    ],
    correctOption: 0,
    explanation:
      "The actual bottleneck in time or memory under the given constraints This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-14",
    topicId: "two-pointers",
    prompt:
      "Which implementation habit most improves reliability for Two Pointers?",
    options: [
      "Increment both pointers at the top of every loop",
      "Use explicit names for state/boundaries and update them in one logically consistent place",
      "Combine all pointer moves into one compact expression",
      "Rename both pointers to a single generic counter",
    ],
    correctOption: 1,
    explanation:
      "Use explicit names for state/boundaries and update them in one logically consistent place This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-15",
    topicId: "two-pointers",
    prompt:
      "Which test strategy is most useful for validating a Two Pointers implementation?",
    options: [
      "Test only a sorted input with distinct values",
      "Test one large random input because it covers every case",
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case",
      "Test only inputs guaranteed to contain an answer",
    ],
    correctOption: 2,
    explanation:
      "Test tiny cases, boundary cases, duplicates, adversarial structure, and a normal representative case This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-16",
    topicId: "two-pointers",
    prompt: "When should you avoid forcing Two Pointers onto a problem?",
    options: [
      "When the input contains more than two elements",
      "When the problem asks for an index rather than a value",
      "When a solution requires a loop",
      "When the problem lacks the assumptions or structure that make Two Pointers correct or efficient",
    ],
    correctOption: 3,
    explanation:
      "When the problem lacks the assumptions or structure that make Two Pointers correct or efficient This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-17",
    topicId: "two-pointers",
    prompt:
      "When explaining a Two Pointers solution, what should you communicate before writing code?",
    options: [
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity",
      "The complete implementation before describing the idea",
      "Only the final answer produced for one example",
      "The programming language syntax you plan to use",
    ],
    correctOption: 0,
    explanation:
      "The recognition clue, invariant/state meaning, algorithm steps, and expected complexity This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-18",
    topicId: "two-pointers",
    prompt: "Why should constraints be examined before selecting Two Pointers?",
    options: [
      "Constraints only affect how variable types are declared",
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable",
      "Two Pointers is optimal whenever the input is an array",
      "Constraints can be ignored after identifying a familiar pattern",
    ],
    correctOption: 1,
    explanation:
      "Constraints determine whether brute force passes and which time/space trade-offs are acceptable This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-19",
    topicId: "two-pointers",
    prompt:
      "What is the main value of dry-running a Two Pointers solution on a small example?",
    options: [
      "It proves the algorithm works for every possible input",
      "It eliminates the need to test duplicate values",
      "It exposes state transitions, boundary errors, and whether the invariant remains true",
      "It determines the runtime without examining pointer movement",
    ],
    correctOption: 2,
    explanation:
      "It exposes state transitions, boundary errors, and whether the invariant remains true This is the interview-relevant principle to remember for Two Pointers.",
  },
  {
    id: "two-pointers-20",
    topicId: "two-pointers",
    prompt:
      "After solving a Two Pointers problem, which review question best improves interview readiness?",
    options: [
      "Can I reproduce this exact implementation character for character?",
      "Did I use the fewest possible local variables?",
      "Would this code still compile if I renamed the pointers?",
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code?",
    ],
    correctOption: 3,
    explanation:
      "Could I recognize the pattern earlier, explain why it works, and derive its complexity without memorizing code? This is the interview-relevant principle to remember for Two Pointers.",
  },
];
