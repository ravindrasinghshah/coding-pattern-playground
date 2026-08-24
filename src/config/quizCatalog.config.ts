import type { QuizQuestion, QuizTopic } from "../types";
import { patternsQuestions, patternsTopics } from "./quiz/patterns.config";
import { datastructuresQuestions, datastructuresTopics } from "./quiz/data-structures.config";
import { conceptsQuestions, conceptsTopics } from "./quiz/concepts.config";
import { bigoQuestions, bigoTopics } from "./quiz/big-o.config";

export const quizTopics: QuizTopic[] = [...patternsTopics, ...datastructuresTopics, ...conceptsTopics, ...bigoTopics];

export const quizQuestions: QuizQuestion[] = [...patternsQuestions, ...datastructuresQuestions, ...conceptsQuestions, ...bigoQuestions];

export function getQuizTopic(topicId: string): QuizTopic | undefined {
  return quizTopics.find((topic) => topic.id === topicId);
}

export function getQuizQuestions(topicId: string): QuizQuestion[] {
  const topic = getQuizTopic(topicId);
  return topic
    ? topic.questionIds
        .map((id) => quizQuestions.find((question) => question.id === id))
        .filter((question): question is QuizQuestion => Boolean(question))
    : [];
}
