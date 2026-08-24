import { beforeEach, describe, expect, it, vi } from "vitest";
import { getQuizQuestions, quizQuestions, quizTopics } from "../config/quizCatalog.config";
import { shuffleQuestion } from "../components/QuizWorkspace";
import { clearQuizProgress, completeQuestion, evaluateAnswer, loadQuizProgress, QUIZ_PROGRESS_KEY, saveQuizProgress } from "./quiz";

describe("quiz catalog and progress", () => {
  beforeEach(() => localStorage.clear());

  it("contains valid topic references and answer choices", () => {
    const ids = new Set<string>();
    quizQuestions.forEach((question) => {
      expect(ids.has(question.id)).toBe(false);
      ids.add(question.id);
      expect(quizTopics.some((topic) => topic.questionIds.includes(question.id))).toBe(true);
      expect(question.options.length).toBeGreaterThan(1);
      expect(question.options[question.correctOption]).toBeTruthy();
      expect(question.explanation).toBeTruthy();
    });
    expect(getQuizQuestions("complexity-analysis")).toHaveLength(20);
  });

  it("evaluates only the selected correct option", () => {
    const question = quizQuestions.find((item) => item.id === "binary-search-01")!;
    expect(evaluateAnswer(question, question.correctOption)).toBe(true);
    expect(evaluateAnswer(question, 1)).toBe(false);
    expect(evaluateAnswer(question, null)).toBe(false);
  });

  it("shuffles displayed options without changing the correct answer", () => {
    const question = quizQuestions.find((item) => item.id === "binary-search-01")!;
    vi.spyOn(Math, "random").mockReturnValue(0);
    const shuffled = shuffleQuestion(question);
    vi.restoreAllMocks();
    expect(shuffled.options).not.toEqual(question.options);
    expect(shuffled.options[shuffled.correctOption]).toBe(question.options[question.correctOption]);
  });

  it("loads, deduplicates, saves, and clears isolated quiz progress", () => {
    expect(loadQuizProgress()).toEqual({ version: 1, completedQuestionIds: [] });
    const progress = completeQuestion(completeQuestion(loadQuizProgress(), "question-1"), "question-1");
    saveQuizProgress(progress);
    expect(localStorage.getItem(QUIZ_PROGRESS_KEY)).toContain("question-1");
    expect(loadQuizProgress().completedQuestionIds).toEqual(["question-1"]);
    expect(clearQuizProgress()).toEqual({ version: 1, completedQuestionIds: [] });
  });
});