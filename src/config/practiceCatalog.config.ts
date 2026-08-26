import type { PatternId, TemplateDrill, ValidationRule, ValidationRuleId } from "../types";

/**
 * Static content source for the MVP.
 *
 * Components should consume this catalog rather than define practice content.
 * It can later be replaced by a database or CMS adapter that returns the same
 * PatternInfo and TemplateDrill shapes.
 */

const rule = (id: ValidationRuleId, message: string): ValidationRule => ({ id, message });
const common = [
  rule("loop-with-comparison", "Use a loop controlled by a comparison."),
  rule("returns-value", "Return the result from the template."),
] satisfies ValidationRule[];
const returns = [rule("returns-value", "Return the result from the template.")] satisfies ValidationRule[];

export interface PatternInfo {
  title: string;
  description: string;
  accent: string;
  comingSoon?: boolean;
}

export const patternInfo: Record<PatternId, PatternInfo> = {
  "two-pointers": {
    title: "Two Pointers",
    description: "Coordinate two indices to reduce repeated work.",
    accent: "coral",
  },
  "sliding-window": {
    title: "Sliding Window",
    description: "Maintain a useful contiguous range as it moves.",
    accent: "violet",
  },
  "prefix-sum": {
    title: "Prefix Sum",
    description: "Carry forward cumulative state for fast range and subarray work.",
    accent: "amber",
  },
  "string-building": {
    title: "String Building",
    description: "Assemble characters with a reusable output accumulator.",
    accent: "rose",
  },
  "linked-list": {
    title: "Linked List",
    description: "Navigate and rewire nodes without losing the remaining chain.",
    accent: "green",
  },
  "monotonic-stack": {
    title: "Monotonic Stack",
    description: "Keep only candidates that can still answer a later query.",
    accent: "blue",
  },
  "binary-search": { title: "Binary Search", description: "Discard half of an ordered search space after each check.", accent: "blue" },
  "binary-tree": {
    title: "Binary Tree",
    description: "Traverse hierarchical data recursively or with explicit worklists.",
    accent: "plum",
  },
  graph: { title: "Graph", description: "Traverse connected nodes while preventing repeated visits.", accent: "green" },
  heap: {
    title: "Find top K elements with heap",
    description: "Maintain the strongest K candidates efficiently with a bounded priority queue.",
    accent: "rose",
    comingSoon: true,
  },
  backtracking: { title: "Backtracking", description: "Explore choices recursively and restore state between branches.", accent: "coral" },
  "dynamic-programming": { title: "Dynamic Programming", description: "Cache overlapping recursive states to avoid repeated work.", accent: "violet" },
  trie: { title: "Trie", description: "Represent strings as paths through character-indexed nodes.", accent: "amber" },
  "shortest-path": {
    title: "Dijkstra's algorithm",
    description: "Find shortest paths from a source across a weighted graph with non-negative edges.",
    accent: "plum",
    comingSoon: true,
  },
};

export const drills: TemplateDrill[] = [
  {
    id: "two-pointers-opposite-ends", patternId: "two-pointers", eyebrow: "FOUNDATION 01", title: "Opposite ends",
    validation: { schemaVersion: 1, variant: "opposite-ends" },
    prompt: "Write a reusable template that starts at both ends of an array, processes a pair, and moves one pointer inward until they meet.",
    starterCode: `function solve(values: number[]) {\n  // Start at both ends\n\n  // Process pairs until the pointers meet\n\n  return 0;\n}`,
    canonicalCode: `function solve(values: number[]) {\n  let left = 0;\n  let right = values.length - 1;\n  let answer = 0;\n\n  while (left < right) {\n    if (values[left] + values[right] > 0) {\n      right--;\n    } else {\n      left++;\n    }\n  }\n\n  return answer;\n}`,
    explanation: "Opposite-end pointers are useful when ordering lets either boundary be discarded after every comparison.",
    referenceUrl: "https://leetcode.com/articles/two-pointer-technique/",
    rules: [rule("two-index-initializers", "Initialize one index at 0 and another from the input length."), rule("conditional-branch", "Choose which pointer to move with a condition."), rule("two-directional-updates", "Move one pointer forward and the other backward."), ...common],
  },
  {
    id: "sliding-window-variable", patternId: "sliding-window", eyebrow: "WINDOW 01", title: "Sliding window",
    validation: { schemaVersion: 1, variant: "variable-window" },
    prompt: "Write the expand-and-shrink template: expand right, then repeatedly move left while the window violates a condition.",
    starterCode: `function shortestWindow(values: number[], target: number) {\n  // Expand right and shrink left\n\n  return 0;\n}`,
    canonicalCode: `function shortestWindow(values: number[], target: number) {\n  let left = 0;\n  let sum = 0;\n  let best = Infinity;\n  for (let right = 0; right < values.length; right++) {\n    sum += values[right];\n    while (sum >= target) {\n      best = Math.min(best, right - left + 1);\n      sum -= values[left];\n      left++;\n    }\n  }\n  return best === Infinity ? 0 : best;\n}`,
    explanation: "The outer traversal expands the window; an inner loop restores the invariant by shrinking it as far as possible.",
    referenceUrl: "https://leetcode.com/tag/sliding-window/",
    rules: [rule("window-boundaries", "Track the left and right edges of the window."), rule("window-shrink-loop", "Use a nested loop to shrink the window while its invariant is broken."), rule("same-direction-updates", "Advance both window boundaries."), ...common],
  },
  {
    id: "two-pointers-two-inputs", patternId: "two-pointers", eyebrow: "FOUNDATION 02", title: "Two inputs, exhaust both",
    validation: { schemaVersion: 1, variant: "two-input-exhaustion" },
    prompt: "Write the two-input traversal template: process both inputs together, then finish whichever input still has values.",
    starterCode: `function traverse(first: number[], second: number[]) {
  // Track one position in each input

  // Traverse together, then exhaust each remainder

  return 0;
}`,
    canonicalCode: `function traverse(first: number[], second: number[]) {
  let i = 0;
  let j = 0;
  let answer = 0;

  while (i < first.length && j < second.length) {
    if (first[i] <= second[j]) {
      i++;
    } else {
      j++;
    }
  }

  while (i < first.length) {
    i++;
  }
  while (j < second.length) {
    j++;
  }

  return answer;
}`,
    explanation: "A shared loop handles paired work; two cleanup loops guarantee that neither input is abandoned.",
    referenceUrl: "https://leetcode.com/tag/two-pointers/",
    rules: [rule("two-index-initializers", "Initialize one index for each input."), rule("joint-traversal", "Traverse both inputs while each still has values."), rule("conditional-branch", "Choose which input index to advance."), rule("same-direction-updates", "Advance both input indices through their own data."), rule("tail-exhaustion", "Use cleanup loops to exhaust both remaining inputs."), ...common],
  },
  {
    id: "prefix-sum-build", patternId: "prefix-sum", eyebrow: "PREFIX 01", title: "Build a prefix sum",
    validation: { schemaVersion: 1, variant: "prefix-array" },
    prompt: "Build an output array whose value at each index contains the sum through that input position.",
    starterCode: `function buildPrefix(values: number[]) {
  // Seed and build the prefix array

  return [];
}`,
    canonicalCode: `function buildPrefix(values: number[]) {
  const prefix = [values[0]];
  for (let i = 1; i < values.length; i++) {
    prefix.push(prefix[prefix.length - 1] + values[i]);
  }
  return prefix;
}`,
    explanation: "Seed the first prefix, then combine the previous prefix with the current input value.",
    referenceUrl: "https://leetcode.com/tag/prefix-sum/",
    rules: [rule("prefix-seed", "Seed the prefix collection from the first input value."), rule("prefix-accumulation", "Append the previous prefix plus the current input value."), ...common],
  },
  {
    id: "prefix-sum-exact-subarrays", patternId: "prefix-sum", eyebrow: "PREFIX 02", title: "Count exact subarrays",
    validation: { schemaVersion: 1, variant: "frequency-map-count" },
    prompt: "Write the prefix-frequency template for counting subarrays whose accumulated value matches an exact target.",
    starterCode: `function countSubarrays(values: number[], target: number) {
  // Track previously seen prefix values

  return 0;
}`,
    canonicalCode: `function countSubarrays(values: number[], target: number) {
  const counts = new Map<number, number>();
  counts.set(0, 1);
  let answer = 0;
  let current = 0;

  for (const value of values) {
    current += value;
    answer += counts.get(current - target) ?? 0;
    counts.set(current, (counts.get(current) ?? 0) + 1);
  }

  return answer;
}`,
    explanation: "A previous prefix of current minus target identifies a subarray ending at the current position.",
    referenceUrl: "https://leetcode.com/tag/prefix-sum/",
    rules: [rule("frequency-map-seed", "Create a frequency map and seed the empty prefix."), rule("iterates-input", "Visit every input value."), rule("prefix-frequency-count", "Count matching earlier prefixes and record the current prefix."), ...returns],
  },
  {
    id: "string-building-array-join", patternId: "string-building", eyebrow: "STRING 01", title: "Buffer then join",
    validation: { schemaVersion: 1, variant: "array-join" },
    prompt: "Build a string by collecting characters in an array and joining the finished buffer.",
    starterCode: `function buildString(characters: string[]) {
  // Collect each character, then join the buffer

  return "";
}`,
    canonicalCode: `function buildString(characters: string[]) {
  const result: string[] = [];
  for (const character of characters) {
    result.push(character);
  }
  return result.join("");
}`,
    explanation: "An array buffer makes repeated appends explicit and converts to a string once at the end.",
    referenceUrl: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
    rules: [rule("accumulator-initializer", "Initialize an empty array accumulator."), rule("iterates-input", "Iterate over the input characters."), rule("appends-character", "Append each visited character to the accumulator."), rule("joins-characters", "Return the accumulator joined into a string."), ...returns],
  },
  {
    id: "string-building-concatenation", patternId: "string-building", eyebrow: "STRING 02", title: "Concatenate characters",
    validation: { schemaVersion: 1, variant: "concatenation" },
    prompt: "Build a string with a string accumulator that receives each character from the input.",
    starterCode: `function buildString(characters: string[]) {
  // Append every character to a string accumulator

  return "";
}`,
    canonicalCode: `function buildString(characters: string[]) {
  let result = "";
  for (const character of characters) {
    result += character;
  }
  return result;
}`,
    explanation: "A string accumulator is the compact alternative when direct concatenation is clear enough.",
    referenceUrl: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Addition_assignment",
    rules: [rule("accumulator-initializer", "Initialize an empty string accumulator."), rule("iterates-input", "Iterate over the input characters."), rule("concatenates-character", "Append each visited character to the string accumulator."), ...returns],
  },
  {
    id: "linked-list-fast-slow", patternId: "linked-list", eyebrow: "LIST 01", title: "Fast and slow pointers",
    validation: { schemaVersion: 1, variant: "fast-slow" },
    prompt: "Write the linked-list traversal where one pointer advances one node and another advances two nodes.",
    starterCode: `type ListNode = { value: number; next: ListNode | null };

function inspectList(head: ListNode | null) {
  // Add slow and fast pointers

  return 0;
}`,
    canonicalCode: `type ListNode = { value: number; next: ListNode | null };

function inspectList(head: ListNode | null) {
  let slow = head;
  let fast = head;
  let answer = 0;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return answer;
}`,
    explanation: "The guard protects the two-step pointer; the different speeds expose cycles and midpoint relationships.",
    referenceUrl: "https://leetcode.com/tag/linked-list/",
    rules: [rule("fast-slow-initializers", "Initialize two distinct pointers from the list head."), rule("fast-slow-guard", "Guard both the fast pointer and its next node."), rule("fast-slow-steps", "Advance one pointer once and the other pointer twice."), ...returns],
  },
  {
    id: "linked-list-reverse", patternId: "linked-list", eyebrow: "LIST 02", title: "Reverse a linked list",
    validation: { schemaVersion: 1, variant: "reverse" },
    prompt: "Reverse a list in place while preserving the next node before changing each link.",
    starterCode: `type ListNode = { value: number; next: ListNode | null };

function reverseList(head: ListNode | null) {
  // Reverse each next link without losing the remainder

  return head;
}`,
    canonicalCode: `type ListNode = { value: number; next: ListNode | null };

function reverseList(head: ListNode | null) {
  let current = head;
  let previous: ListNode | null = null;

  while (current) {
    const nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
  }

  return previous;
}`,
    explanation: "Save the remaining chain first, reverse the current link, then advance both working pointers.",
    referenceUrl: "https://leetcode.com/tag/linked-list/",
    rules: [rule("reversal-initializers", "Start the current pointer at head and the previous pointer at null."), rule("saves-next-node", "Save the next node before changing the current link."), rule("reverses-link", "Point the current node back to the previous node."), rule("advances-reversal", "Advance previous and current through the saved chain in order."), ...returns],
  },
  {
    id: "monotonic-stack-increasing", patternId: "monotonic-stack", eyebrow: "STACK 01", title: "Monotonic increasing stack",
    validation: { schemaVersion: 1, variant: "increasing-stack" },
    prompt: "Maintain an increasing stack by removing larger top values before pushing each new input value.",
    starterCode: `function scan(values: number[]) {
  // Maintain a monotonic stack

  return 0;
}`,
    canonicalCode: `function scan(values: number[]) {
  const stack: number[] = [];
  let answer = 0;

  for (const value of values) {
    while (stack.length && stack[stack.length - 1] > value) {
      stack.pop();
    }
    stack.push(value);
  }

  return answer;
}`,
    explanation: "Pop values that can no longer help, then add the current value after the invariant is restored.",
    referenceUrl: "https://leetcode.com/tag/monotonic-stack/",
    rules: [rule("stack-initializer", "Initialize an empty stack."), rule("iterates-input", "Visit every input value."), rule("monotonic-shrink-loop", "Shrink while the stack top violates the monotonic order."), rule("stack-pop", "Pop invalid stack candidates inside the shrink loop."), rule("stack-push", "Push the current value after shrinking."), ...returns],
  },
  {
    id: "monotonic-stack-decreasing", patternId: "monotonic-stack", eyebrow: "STACK 02", title: "Monotonic decreasing stack",
    validation: { schemaVersion: 1, variant: "decreasing-stack" },
    prompt: "Maintain a decreasing stack by removing smaller top values before pushing each new input value.",
    starterCode: `function scan(values: number[]) {
  // Maintain a decreasing monotonic stack

  return 0;
}`,
    canonicalCode: `function scan(values: number[]) {
  const stack: number[] = [];
  let answer = 0;

  for (const value of values) {
    while (stack.length && stack[stack.length - 1] < value) {
      stack.pop();
    }
    stack.push(value);
  }

  return answer;
}`,
    explanation: "Pop smaller values that violate decreasing order, then push the current value after restoring the invariant.",
    referenceUrl: "https://leetcode.com/tag/monotonic-stack/",
    rules: [rule("stack-initializer", "Initialize an empty stack."), rule("iterates-input", "Visit every input value."), rule("monotonic-shrink-loop", "Shrink while the stack top is smaller than the current value."), rule("stack-pop", "Pop invalid stack candidates inside the shrink loop."), rule("stack-push", "Push the current value after shrinking."), ...returns],
  },
  {
    id: "binary-tree-dfs-recursive", patternId: "binary-tree", eyebrow: "TREE 01", title: "DFS, recursive",
    validation: { schemaVersion: 1, variant: "dfs-recursive" },
    prompt: "Write recursive depth-first traversal with a null base case and visits to both child subtrees.",
    starterCode: `type TreeNode = { value: number; left: TreeNode | null; right: TreeNode | null };

function dfs(root: TreeNode | null): number {
  // Add the base case and visit both children

  return 0;
}`,
    canonicalCode: `type TreeNode = { value: number; left: TreeNode | null; right: TreeNode | null };

function dfs(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const leftResult = dfs(root.left);
  const rightResult = dfs(root.right);
  return 1 + leftResult + rightResult;
}`,
    explanation: "The null case ends each branch; recursive calls solve the left and right subtrees.",
    referenceUrl: "https://leetcode.com/tag/depth-first-search/",
    rules: [rule("null-base-case", "Return from a base case when the current node is absent."), rule("recursive-child-visits", "Recursively visit both left and right children."), ...returns],
  },
  {
    id: "binary-tree-dfs-iterative", patternId: "binary-tree", eyebrow: "TREE 02", title: "DFS, iterative",
    validation: { schemaVersion: 1, variant: "dfs-iterative" },
    prompt: "Write iterative depth-first traversal with a stack: pop a node and push each child that exists.",
    starterCode: `type TreeNode = { value: number; left: TreeNode | null; right: TreeNode | null };

function dfs(root: TreeNode) {
  // Traverse with an explicit stack

  return 0;
}`,
    canonicalCode: `type TreeNode = { value: number; left: TreeNode | null; right: TreeNode | null };

function dfs(root: TreeNode) {
  const stack = [root];
  let answer = 0;

  while (stack.length) {
    const node = stack.pop()!;
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  return answer;
}`,
    explanation: "The explicit stack replaces the call stack and preserves depth-first processing.",
    referenceUrl: "https://leetcode.com/tag/depth-first-search/",
    rules: [rule("traversal-stack", "Seed a stack with the root and pop nodes while it is non-empty."), rule("visits-tree-children", "Guard and add both children to the traversal stack."), ...returns],
  },
  {
    id: "binary-tree-bfs", patternId: "binary-tree", eyebrow: "TREE 03", title: "BFS by level",
    validation: { schemaVersion: 1, variant: "bfs-level-order" },
    prompt: "Write breadth-first traversal that snapshots each level size and builds the queue for the next level.",
    starterCode: `type TreeNode = { value: number; left: TreeNode | null; right: TreeNode | null };

function bfs(root: TreeNode) {
  // Process one queue level at a time

  return 0;
}`,
    canonicalCode: `type TreeNode = { value: number; left: TreeNode | null; right: TreeNode | null };

function bfs(root: TreeNode) {
  let queue = [root];
  let answer = 0;

  while (queue.length) {
    const currentLength = queue.length;
    const nextQueue: TreeNode[] = [];

    for (let i = 0; i < currentLength; i++) {
      const node = queue[i];
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    queue = nextQueue;
  }

  return answer;
}`,
    explanation: "A level-size snapshot fixes the current breadth; a fresh queue gathers the following level.",
    referenceUrl: "https://leetcode.com/tag/breadth-first-search/",
    rules: [rule("level-queue", "Seed a queue with the root and process it while non-empty."), rule("captures-level-size", "Snapshot the current queue length before processing the level."), rule("level-loop", "Use the snapshot to process exactly one level."), rule("visits-tree-children", "Guard and enqueue both children for the next level."), rule("replaces-level-queue", "Replace the current queue with the completed next-level queue."), ...returns],
  },
  {
    id: "graph-dfs-recursive", patternId: "graph", eyebrow: "GRAPH 01", title: "DFS, recursive",
    validation: { schemaVersion: 1, variant: "graph-dfs-recursive" },
    prompt: "Traverse a graph recursively, marking each neighbor before visiting it.",
    starterCode: `function traverse(graph: number[][], start: number) {\n  // Visit reachable nodes recursively\n\n  return 0;\n}`,
    canonicalCode: `function traverse(graph: number[][], start: number) {\n  const seen = new Set<number>([start]);\n  function dfs(node: number): number {\n    let answer = 0;\n    for (const neighbor of graph[node]) {\n      if (!seen.has(neighbor)) {\n        seen.add(neighbor);\n        answer += dfs(neighbor);\n      }\n    }\n    return answer;\n  }\n  return dfs(start);\n}`,
    explanation: "The visited set guarantees that recursive traversal processes every reachable vertex at most once.", referenceUrl: "https://leetcode.com/tag/depth-first-search/",
    rules: [rule("visited-set", "Seed a visited set with the start node."), rule("graph-neighbor-loop", "Iterate over the current node's neighbors."), rule("recursive-neighbor-visit", "Mark and recursively visit unseen neighbors."), ...returns],
  },
  {
    id: "graph-dfs-iterative", patternId: "graph", eyebrow: "GRAPH 02", title: "DFS, iterative",
    validation: { schemaVersion: 1, variant: "graph-dfs-iterative" },
    prompt: "Traverse a graph with a stack and add unseen neighbors to the worklist.",
    starterCode: `function traverse(graph: number[][], start: number) {\n  // Traverse with a stack and visited set\n\n  return 0;\n}`,
    canonicalCode: `function traverse(graph: number[][], start: number) {\n  const stack = [start];\n  const seen = new Set<number>([start]);\n  let answer = 0;\n  while (stack.length) {\n    const node = stack.pop()!;\n    for (const neighbor of graph[node]) {\n      if (!seen.has(neighbor)) {\n        seen.add(neighbor);\n        stack.push(neighbor);\n      }\n    }\n  }\n  return answer;\n}`,
    explanation: "An explicit LIFO worklist performs depth-first traversal without recursion.", referenceUrl: "https://leetcode.com/tag/depth-first-search/",
    rules: [rule("visited-set", "Seed a visited set with the start node."), rule("graph-worklist", "Seed and consume a stack."), rule("graph-neighbor-loop", "Iterate over neighbors and add unseen nodes."), ...returns],
  },
  {
    id: "graph-bfs", patternId: "graph", eyebrow: "GRAPH 03", title: "BFS by level",
    validation: { schemaVersion: 1, variant: "graph-bfs" },
    prompt: "Traverse a graph breadth-first, building a fresh queue for each level.",
    starterCode: `function traverse(graph: number[][], start: number) {\n  // Process graph nodes one breadth at a time\n\n  return 0;\n}`,
    canonicalCode: `function traverse(graph: number[][], start: number) {\n  let queue = [start];\n  const seen = new Set<number>([start]);\n  let answer = 0;\n  while (queue.length) {\n    const currentLength = queue.length;\n    const nextQueue: number[] = [];\n    for (let i = 0; i < currentLength; i++) {\n      const node = queue[i];\n      for (const neighbor of graph[node]) {\n        if (!seen.has(neighbor)) {\n          seen.add(neighbor);\n          nextQueue.push(neighbor);\n        }\n      }\n    }\n    queue = nextQueue;\n  }\n  return answer;\n}`,
    explanation: "Replacing the queue after each breadth preserves level boundaries.", referenceUrl: "https://leetcode.com/tag/breadth-first-search/",
    rules: [rule("visited-set", "Seed a visited set with the start node."), rule("graph-worklist", "Seed and replace a breadth-first queue."), rule("graph-neighbor-loop", "Iterate over neighbors and enqueue unseen nodes."), rule("captures-level-size", "Snapshot the current breadth."), ...returns],
  },
  ...[
    { id: "binary-search", title: "Binary search", eyebrow: "SEARCH 01", variant: "binary-search" as const, prompt: "Find a target in a sorted array and return its insertion point when absent.", code: `function search(values: number[], target: number) {\n  let left = 0, right = values.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (values[mid] === target) return mid;\n    if (values[mid] > target) right = mid - 1;\n    else left = mid + 1;\n  }\n  return left;\n}` },
    { id: "binary-search-left", title: "Left-most insertion point", eyebrow: "SEARCH 02", variant: "binary-search-left" as const, prompt: "Find the left-most insertion point among duplicate values.", code: `function lowerBound(values: number[], target: number) {\n  let left = 0, right = values.length;\n  while (left < right) {\n    const mid = Math.floor((left + right) / 2);\n    if (values[mid] >= target) right = mid;\n    else left = mid + 1;\n  }\n  return left;\n}` },
    { id: "binary-search-right", title: "Right-most insertion point", eyebrow: "SEARCH 03", variant: "binary-search-right" as const, prompt: "Find the insertion point after existing duplicate values.", code: `function upperBound(values: number[], target: number) {\n  let left = 0, right = values.length;\n  while (left < right) {\n    const mid = Math.floor((left + right) / 2);\n    if (values[mid] > target) right = mid;\n    else left = mid + 1;\n  }\n  return left;\n}` },
    { id: "binary-search-minimum", title: "Minimum feasible answer", eyebrow: "SEARCH 04", variant: "binary-search-minimum" as const, prompt: "Binary-search an answer space for the minimum value satisfying a predicate.", code: `function minimumAnswer(low: number, high: number, check: (value: number) => boolean) {\n  let left = low, right = high;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (check(mid)) right = mid - 1;\n    else left = mid + 1;\n  }\n  return left;\n}` },
    { id: "binary-search-maximum", title: "Maximum feasible answer", eyebrow: "SEARCH 05", variant: "binary-search-maximum" as const, prompt: "Binary-search an answer space for the maximum value satisfying a predicate.", code: `function maximumAnswer(low: number, high: number, check: (value: number) => boolean) {\n  let left = low, right = high;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (check(mid)) left = mid + 1;\n    else right = mid - 1;\n  }\n  return right;\n}` },
  ].map(({ id, title, eyebrow, variant, prompt, code }): TemplateDrill => ({
    id, patternId: "binary-search", eyebrow, title, validation: { schemaVersion: 1, variant }, prompt,
    starterCode: `function search(values: number[], target: number) {\n  // Narrow the search interval\n\n  return 0;\n}`,
    canonicalCode: code, explanation: "Each comparison removes a portion of the remaining ordered search space.", referenceUrl: "https://leetcode.com/tag/binary-search/",
    rules: [rule("binary-search-bounds", "Initialize and loop over two search bounds."), rule("midpoint-calculation", "Calculate a midpoint from both bounds."), rule("binary-search-updates", "Move both bounds in the correct directions."), rule(variant.includes("minimum") || variant.includes("maximum") ? "predicate-check" : "target-comparison", "Use the midpoint to choose a search half."), ...returns],
  })),
  {
    id: "backtracking", patternId: "backtracking", eyebrow: "RECURSION 01", title: "Backtracking",
    validation: { schemaVersion: 1, variant: "backtracking" }, prompt: "Explore each choice recursively, then undo its state change.",
    starterCode: `function generate(values: number[]) {\n  // Choose, recurse, and undo\n\n  return 0;\n}`,
    canonicalCode: `function generate(values: number[]) {\n  const path: number[] = [];\n  let answer = 0;\n  function backtrack(index: number) {\n    if (index === values.length) { answer++; return; }\n    for (let i = index; i < values.length; i++) {\n      path.push(values[i]);\n      backtrack(i + 1);\n      path.pop();\n    }\n  }\n  backtrack(0);\n  return answer;\n}`,
    explanation: "Every recursive choice is paired with an inverse operation so sibling branches start from the same state.", referenceUrl: "https://leetcode.com/tag/backtracking/",
    rules: [rule("base-case", "Stop recursion at a base case."), rule("recursive-call", "Recurse while exploring choices."), rule("state-change", "Modify the current state before recursion."), rule("state-restore", "Undo the modification after recursion."), ...returns],
  },
  {
    id: "dynamic-programming-top-down", patternId: "dynamic-programming", eyebrow: "DP 01", title: "Top-down memoization",
    validation: { schemaVersion: 1, variant: "top-down-memoization" }, prompt: "Cache recursive state results and reuse them before evaluating the recurrence again.",
    starterCode: `function solve(values: number[]) {\n  // Add a memoized recursive helper\n\n  return 0;\n}`,
    canonicalCode: `function solve(values: number[]) {\n  const memo = new Map<number, number>();\n  function dp(index: number): number {\n    if (index >= values.length) return 0;\n    if (memo.has(index)) return memo.get(index)!;\n    const answer = values[index] + dp(index + 1);\n    memo.set(index, answer);\n    return answer;\n  }\n  return dp(0);\n}`,
    explanation: "The cache turns repeated recursive states into constant-time lookups.", referenceUrl: "https://leetcode.com/tag/dynamic-programming/",
    rules: [rule("base-case", "Return from a terminal state."), rule("recursive-call", "Evaluate a recurrence recursively."), rule("memo-initializer", "Initialize a memo store."), rule("memo-lookup", "Return an already cached state."), rule("memo-write", "Cache a newly computed state."), ...returns],
  },
  {
    id: "trie-build", patternId: "trie", eyebrow: "TRIE 01", title: "Build a trie",
    validation: { schemaVersion: 1, variant: "trie-build" }, prompt: "Insert every word one character at a time, creating missing child nodes.",
    starterCode: `function buildTrie(words: string[]) {\n  // Build character paths for every word\n\n  return null;\n}`,
    canonicalCode: `function buildTrie(words: string[]) {\n  const root = { children: new Map<string, any>() };\n  for (const word of words) {\n    let current = root;\n    for (const character of word) {\n      if (!current.children.has(character)) {\n        current.children.set(character, { children: new Map<string, any>() });\n      }\n      current = current.children.get(character);\n    }\n  }\n  return root;\n}`,
    explanation: "Each character follows or creates one edge, so shared prefixes reuse the same path.", referenceUrl: "https://leetcode.com/tag/trie/",
    rules: [rule("trie-root", "Initialize a root with a child map."), rule("nested-character-loop", "Iterate through words and their characters."), rule("trie-child-insert", "Create a missing child entry."), rule("trie-cursor-advance", "Advance the cursor to the selected child."), ...returns],
  },
];

/** Drills implementing the current requirements in src/data/code-templates.md. */
export const codeTemplateRequirementDrillIds = [
  "two-pointers-opposite-ends",
  "two-pointers-two-inputs",
  "sliding-window-variable",
  "prefix-sum-build",
  "string-building-array-join",
  "string-building-concatenation",
  "linked-list-fast-slow",
  "linked-list-reverse",
  "prefix-sum-exact-subarrays",
  "monotonic-stack-increasing",
  "monotonic-stack-decreasing",
  "binary-tree-dfs-recursive",
  "binary-tree-dfs-iterative",
  "binary-tree-bfs",
  "graph-dfs-recursive",
  "graph-dfs-iterative",
  "graph-bfs",
  "binary-search",
  "binary-search-left",
  "binary-search-right",
  "binary-search-minimum",
  "binary-search-maximum",
  "backtracking",
  "dynamic-programming-top-down",
  "trie-build",
] as const;
