import type { QuizQuestion, SavedQuizProgressV1 } from "../types";

export const QUIZ_PROGRESS_KEY = "pattern-playground:quiz-progress";
export const QUIZ_VIEW_KEY = "pattern-playground:quiz-view";

export type QuizView = "card" | "list";

const emptyProgress = (): SavedQuizProgressV1 => ({ version: 1, completedQuestionIds: [] });

export function loadQuizView(storage: Pick<Storage, "getItem"> = localStorage): QuizView {
  return storage.getItem(QUIZ_VIEW_KEY) === "list" ? "list" : "card";
}

export function saveQuizView(view: QuizView, storage: Pick<Storage, "setItem"> = localStorage): void {
  storage.setItem(QUIZ_VIEW_KEY, view);
}

export function loadQuizProgress(storage: Pick<Storage, "getItem"> = localStorage): SavedQuizProgressV1 {
  try {
    const value: unknown = JSON.parse(storage.getItem(QUIZ_PROGRESS_KEY) ?? "null");
    if (!value || typeof value !== "object") return emptyProgress();
    const record = value as Partial<SavedQuizProgressV1>;
    if (record.version !== 1 || !Array.isArray(record.completedQuestionIds) || !record.completedQuestionIds.every((id) => typeof id === "string")) return emptyProgress();
    return { version: 1, completedQuestionIds: [...new Set(record.completedQuestionIds)] };
  } catch {
    return emptyProgress();
  }
}

export function saveQuizProgress(progress: SavedQuizProgressV1, storage: Pick<Storage, "setItem"> = localStorage): void {
  storage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(progress));
}

export function completeQuestion(progress: SavedQuizProgressV1, questionId: string): SavedQuizProgressV1 {
  return progress.completedQuestionIds.includes(questionId)
    ? progress
    : { version: 1, completedQuestionIds: [...progress.completedQuestionIds, questionId] };
}

export function clearQuizProgress(storage: Pick<Storage, "removeItem"> = localStorage): SavedQuizProgressV1 {
  storage.removeItem(QUIZ_PROGRESS_KEY);
  return emptyProgress();
}

export function clearQuizTopicProgress(progress: SavedQuizProgressV1, questionIds: string[]): SavedQuizProgressV1 {
  const topicQuestionIds = new Set(questionIds);
  return {
    version: 1,
    completedQuestionIds: progress.completedQuestionIds.filter((id) => !topicQuestionIds.has(id)),
  };
}

export function evaluateAnswer(question: QuizQuestion, selectedOption: number | null): boolean {
  return selectedOption !== null && selectedOption === question.correctOption;
}