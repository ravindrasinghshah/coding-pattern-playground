import type { QuizQuestion, QuizTopic } from "../../types";
import * as shortest_paths from "./concepts/shortest-paths.config";
import * as minimum_spanning_tree from "./concepts/minimum-spanning-tree.config";
import * as greedy_vs_dp from "./concepts/greedy-vs-dp.config";
import * as sorting from "./concepts/sorting.config";
import * as merge_sort from "./concepts/merge-sort.config";
import * as quick_sort from "./concepts/quick-sort.config";
import * as selection_sort from "./concepts/selection-sort.config";
import * as bit_manipulation from "./concepts/bit-manipulation.config";
import * as math_geometry from "./concepts/math-geometry.config";
import * as recursion from "./concepts/recursion.config";
import * as string_algorithms from "./concepts/string-algorithms.config";

export const conceptsTopics: QuizTopic[] = [shortest_paths.topic, minimum_spanning_tree.topic, greedy_vs_dp.topic, sorting.topic, merge_sort.topic, quick_sort.topic, selection_sort.topic, bit_manipulation.topic, math_geometry.topic, recursion.topic, string_algorithms.topic];

export const conceptsQuestions: QuizQuestion[] = [...shortest_paths.questions, ...minimum_spanning_tree.questions, ...greedy_vs_dp.questions, ...sorting.questions, ...merge_sort.questions, ...quick_sort.questions, ...selection_sort.questions, ...bit_manipulation.questions, ...math_geometry.questions, ...recursion.questions, ...string_algorithms.questions];
