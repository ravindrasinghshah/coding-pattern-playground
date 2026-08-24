import type { QuizQuestion, QuizTopic } from "../../types";
import * as arrays_hashing from "./patterns/arrays-hashing.config";
import * as two_pointers from "./patterns/two-pointers.config";
import * as sliding_window from "./patterns/sliding-window.config";
import * as prefix_sums from "./patterns/prefix-sums.config";
import * as binary_search from "./patterns/binary-search.config";
import * as bfs from "./patterns/bfs.config";
import * as dfs from "./patterns/dfs.config";
import * as backtracking from "./patterns/backtracking.config";
import * as intervals from "./patterns/intervals.config";
import * as greedy from "./patterns/greedy.config";
import * as topological_sort from "./patterns/topological-sort.config";
import * as dynamic_programming_1d from "./patterns/dynamic-programming-1d.config";
import * as dynamic_programming_2d from "./patterns/dynamic-programming-2d.config";
import * as knapsack from "./patterns/knapsack.config";
import * as divide_conquer from "./patterns/divide-conquer.config";
import * as monotonic_stack from "./patterns/monotonic-stack.config";
import * as monotonic_queue from "./patterns/monotonic-queue.config";
import * as matrix_grid from "./patterns/matrix-grid.config";

export const patternsTopics: QuizTopic[] = [arrays_hashing.topic, two_pointers.topic, sliding_window.topic, prefix_sums.topic, binary_search.topic, bfs.topic, dfs.topic, backtracking.topic, intervals.topic, greedy.topic, topological_sort.topic, dynamic_programming_1d.topic, dynamic_programming_2d.topic, knapsack.topic, divide_conquer.topic, monotonic_stack.topic, monotonic_queue.topic, matrix_grid.topic];

export const patternsQuestions: QuizQuestion[] = [...arrays_hashing.questions, ...two_pointers.questions, ...sliding_window.questions, ...prefix_sums.questions, ...binary_search.questions, ...bfs.questions, ...dfs.questions, ...backtracking.questions, ...intervals.questions, ...greedy.questions, ...topological_sort.questions, ...dynamic_programming_1d.questions, ...dynamic_programming_2d.questions, ...knapsack.questions, ...divide_conquer.questions, ...monotonic_stack.questions, ...monotonic_queue.questions, ...matrix_grid.questions];
