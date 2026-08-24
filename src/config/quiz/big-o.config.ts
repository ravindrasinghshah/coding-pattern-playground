import type { QuizQuestion, QuizTopic } from "../../types";
import * as complexity_analysis from "./big-o/complexity-analysis.config";
import * as amortized_analysis from "./big-o/amortized-analysis.config";
import * as recurrence_complexity from "./big-o/recurrence-complexity.config";
import * as hash_table_complexity from "./big-o/hash-table-complexity.config";

export const bigoTopics: QuizTopic[] = [complexity_analysis.topic, amortized_analysis.topic, recurrence_complexity.topic, hash_table_complexity.topic];

export const bigoQuestions: QuizQuestion[] = [...complexity_analysis.questions, ...amortized_analysis.questions, ...recurrence_complexity.questions, ...hash_table_complexity.questions];
