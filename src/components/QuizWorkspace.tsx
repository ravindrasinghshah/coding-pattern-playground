import { useState } from "react";
import { ArrowLeft, Check, ChevronRight, CircleAlert } from "lucide-react";
import type { QuizQuestion } from "../types";
import { evaluateAnswer } from "../lib/quiz";

interface Props { topicTitle: string; questions: QuizQuestion[]; completedIds: string[]; onBack: () => void; onComplete: (id: string) => void; }

export function shuffleQuestion(question: QuizQuestion): QuizQuestion {
  const options = question.options.map((option, index) => ({ option, index }));
  for (let index = options.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
  }
  return {
    ...question,
    options: options.map(({ option }) => option),
    correctOption: options.findIndex(({ index }) => index === question.correctOption),
  };
}

export function getInitialQuizQuestionIndex(questions: QuizQuestion[], completedIds: string[]): number {
  const firstIncompleteIndex = questions.findIndex((question) => !completedIds.includes(question.id));
  return firstIncompleteIndex === -1 ? 0 : firstIncompleteIndex;
}

export function QuizWorkspace({ topicTitle, questions, completedIds, onBack, onComplete }: Props) {
  const [displayQuestions] = useState(() => questions.map(shuffleQuestion));
  const [index, setIndex] = useState(() => getInitialQuizQuestionIndex(displayQuestions, completedIds));
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);
  const question = displayQuestions[index];
  if (!question) return null;
  const correct = evaluateAnswer(question, selected);
  const knownCount = questions.filter((item) => completedIds.includes(item.id)).length;
  const submit = () => { if (selected !== null) setSubmitted(true); };
  const next = () => { setIndex((current) => current + 1); setSelected(null); setSubmitted(false); };
  const markCorrect = () => { if (correct) onComplete(question.id); next(); };
  const isLast = index === questions.length - 1;
  const finish = () => { if (correct) onComplete(question.id); setFinished(true); };

  if (finished) return <main className="workspace quiz-workspace"><header className="workspace-header"><button className="back-button" onClick={onBack}><ArrowLeft size={18} /> Topics</button><div className="crumb"><span>{topicTitle}</span><ChevronRight size={14} /><strong>Complete</strong></div><span className="completed-pill"><Check size={14} /> Reviewed</span></header><section className="quiz-result"><p className="overline">REVIEW COMPLETE</p><h1>Nice work.</h1><p>You answered {knownCount + (correct && !completedIds.includes(question.id) ? 1 : 0)} of {questions.length} questions correctly.</p><button className="validate-button" onClick={onBack}>Back to topics <ChevronRight size={16} /></button></section></main>;

  return <main className="workspace quiz-workspace">
    <header className="workspace-header"><button className="back-button" onClick={onBack}><ArrowLeft size={18} /> Topics</button><div className="crumb"><span>{topicTitle}</span><ChevronRight size={14} /><strong>Question {index + 1} of {questions.length}</strong></div><span className="practice-pill">{knownCount}/{questions.length} known</span></header>
    <div className="quiz-card-layout">
      <section className="quiz-question-card" aria-live="polite">
        <p className="overline">QUESTION {String(index + 1).padStart(2, "0")}</p>
        <h1>{question.prompt}</h1>
        <div className="quiz-options" role="radiogroup" aria-label="Answer options">
          {question.options.map((option, optionIndex) => <button key={option} className={`quiz-option ${selected === optionIndex ? "selected" : ""} ${submitted && optionIndex === question.correctOption ? "correct" : ""} ${submitted && selected === optionIndex && !correct ? "incorrect" : ""}`} role="radio" aria-checked={selected === optionIndex} disabled={submitted} onClick={() => setSelected(optionIndex)}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</button>)}
        </div>
        {!submitted ? <button className="validate-button quiz-submit" disabled={selected === null} onClick={submit}>Check answer <ChevronRight size={16} /></button> : <div className={`quiz-feedback ${correct ? "feedback-correct" : "feedback-incorrect"}`}><div className="feedback-heading">{correct ? <Check size={18} /> : <CircleAlert size={18} />}<strong>{correct ? "Correct" : "Not quite"}</strong></div><p>{question.explanation}</p><button className="validate-button" onClick={isLast ? finish : markCorrect}>{isLast ? "See results" : "Next question"} <ChevronRight size={16} /></button></div>}
      </section>
    </div>
  </main>;
}