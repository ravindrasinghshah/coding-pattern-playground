import type { QuizQuestion, QuizTopic } from "../../types";
import * as stack from "./data-structures/stack.config";
import * as queue_deque from "./data-structures/queue-deque.config";
import * as linked_list from "./data-structures/linked-list.config";
import * as trees from "./data-structures/trees.config";
import * as bst from "./data-structures/bst.config";
import * as tries from "./data-structures/tries.config";
import * as heap_priority_queue from "./data-structures/heap-priority-queue.config";
import * as graphs from "./data-structures/graphs.config";
import * as union_find from "./data-structures/union-find.config";

export const datastructuresTopics: QuizTopic[] = [stack.topic, queue_deque.topic, linked_list.topic, trees.topic, bst.topic, tries.topic, heap_priority_queue.topic, graphs.topic, union_find.topic];

export const datastructuresQuestions: QuizQuestion[] = [...stack.questions, ...queue_deque.questions, ...linked_list.questions, ...trees.questions, ...bst.questions, ...tries.questions, ...heap_priority_queue.questions, ...graphs.questions, ...union_find.questions];
