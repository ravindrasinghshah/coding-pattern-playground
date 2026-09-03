import { useEffect, useRef } from "react";
import { ArrowRight, BarChart3, Check, X } from "lucide-react";
import { drills, patternInfo } from "../config/practiceCatalog.config";
import { getProblemsForPattern } from "../config/problemCatalog.config";
import { getQuizQuestions, quizQuestions, quizTopics } from "../config/quizCatalog.config";
import type { PatternId } from "../types";

interface Props {
  completedDrillIds: string[];
  completedProblemIds: string[];
  completedQuizIds: string[];
  onClose: () => void;
  onNavigate: (path: string) => void;
}

type RemainingItem = {
  id: string;
  title: string;
  completed: number;
  total: number;
  detail: string;
  path: string;
  order: number;
};

const percentage = (completed: number, total: number) => total === 0 ? 100 : Math.round(completed / total * 100);

export function ProgressSnapshot({ completedDrillIds, completedProblemIds, completedQuizIds, onClose, onNavigate }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const completedDrills = new Set(completedDrillIds.filter((id) => drills.some((drill) => drill.id === id)));
  const allProblems = Object.keys(patternInfo).flatMap((patternId) => getProblemsForPattern(patternId as PatternId));
  const completedProblems = new Set(completedProblemIds.filter((id) => allProblems.some((problem) => problem.id === id)));
  const completedQuestions = new Set(completedQuizIds.filter((id) => quizQuestions.some((question) => question.id === id)));
  const activePatternIds = (Object.keys(patternInfo) as PatternId[]).filter((patternId) => !patternInfo[patternId].comingSoon);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    closeRef.current?.focus();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  const templateTotal = drills.length;
  const problemTotal = allProblems.length;
  const quizTotal = quizQuestions.length;
  const completedTemplateCount = completedDrills.size;
  const completedProblemCount = completedProblems.size;
  const completedQuizCount = completedQuestions.size;
  const total = templateTotal + problemTotal + quizTotal;
  const complete = completedTemplateCount + completedProblemCount + completedQuizCount;

  const remainingPatterns: RemainingItem[] = activePatternIds.flatMap((patternId, order) => {
    const patternDrills = drills.filter((drill) => drill.patternId === patternId);
    const patternProblems = getProblemsForPattern(patternId);
    const patternTotal = patternDrills.length + patternProblems.length;
    const patternComplete = patternDrills.filter((drill) => completedDrills.has(drill.id)).length
      + patternProblems.filter((problem) => completedProblems.has(problem.id)).length;
    if (patternComplete === patternTotal) return [];
    const templatesRemaining = patternDrills.length - patternDrills.filter((drill) => completedDrills.has(drill.id)).length;
    const problemsRemaining = patternProblems.length - patternProblems.filter((problem) => completedProblems.has(problem.id)).length;
    return [{
      id: patternId,
      title: patternInfo[patternId].title,
      completed: patternComplete,
      total: patternTotal,
      detail: `${templatesRemaining} template${templatesRemaining === 1 ? "" : "s"} · ${problemsRemaining} problem${problemsRemaining === 1 ? "" : "s"} remaining`,
      path: `/practice/${patternId}`,
      order,
    }];
  });
  const remainingTopics: RemainingItem[] = quizTopics.flatMap((topic, index) => {
    const questions = getQuizQuestions(topic.id);
    const topicComplete = questions.filter((question) => completedQuestions.has(question.id)).length;
    if (topicComplete === questions.length) return [];
    return [{
      id: topic.id,
      title: topic.title,
      completed: topicComplete,
      total: questions.length,
      detail: `${questions.length - topicComplete} question${questions.length - topicComplete === 1 ? "" : "s"} remaining`,
      path: `/quiz/${topic.id}`,
      order: index,
    }];
  });
  const sortRemaining = (left: RemainingItem, right: RemainingItem) => {
    const percentDifference = percentage(left.completed, left.total) - percentage(right.completed, right.total);
    return percentDifference || left.order - right.order;
  };
  const sortedPatterns = [...remainingPatterns].sort(sortRemaining);
  const sortedTopics = [...remainingTopics].sort(sortRemaining);
  const remainingCount = sortedPatterns.length + sortedTopics.length;
  const renderRemainingItems = (items: RemainingItem[]) => <ol className="remaining-list">
    {items.map((item) => <li key={item.id}>
      <button type="button" onClick={() => onNavigate(item.path)} aria-label={`Continue ${item.title}: ${item.completed} of ${item.total} complete`}>
        <span className="remaining-item-copy"><strong>{item.title}</strong><em>{item.detail}</em></span>
        <span className="remaining-item-progress"><b>{percentage(item.completed, item.total)}%</b><progress value={item.completed} max={item.total} aria-label={`${percentage(item.completed, item.total)}% complete`} /></span>
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </li>)}
  </ol>;

  return (
    <dialog
      ref={dialogRef}
      className="progress-dialog"
      aria-labelledby="progress-snapshot-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside className="progress-drawer" aria-label="Progress snapshot">
        <header className="progress-drawer-header">
          <div><p className="overline">PROGRESS SNAPSHOT</p><h2 id="progress-snapshot-title">Your progress</h2></div>
          <button ref={closeRef} className="dialog-close" type="button" onClick={onClose} aria-label="Close progress snapshot"><X size={18} /></button>
        </header>
        <div className="progress-drawer-content">
          <section className="overall-progress" aria-label={`${complete} of ${total} learning items complete`}>
            <div className="overall-progress-icon"><BarChart3 size={20} /></div>
            <div><span>OVERALL READINESS</span><strong>{complete}<small> / {total}</small></strong><p>{percentage(complete, total)}% of your learning library complete</p></div>
          </section>

          <section className="progress-metrics" aria-label="Progress by learning area">
            <button type="button" className="progress-metric" onClick={() => onNavigate("/practice")}>
              <span>Completed</span><strong>{completedTemplateCount}<small> / {templateTotal}</small></strong><progress value={completedTemplateCount} max={templateTotal} aria-label={`${percentage(completedTemplateCount, templateTotal)}% complete`} />
            </button>
            <button type="button" className="progress-metric" onClick={() => onNavigate("/problems")}>
              <span>Solved</span><strong>{completedProblemCount}<small> / {problemTotal}</small></strong><progress value={completedProblemCount} max={problemTotal} aria-label={`${percentage(completedProblemCount, problemTotal)}% complete`} />
            </button>
            <button type="button" className="progress-metric" onClick={() => onNavigate("/quiz")}>
              <span>Completed</span><strong>{completedQuizCount}<small> / {quizTotal}</small></strong><progress value={completedQuizCount} max={quizTotal} aria-label={`${percentage(completedQuizCount, quizTotal)}% complete`} />
            </button>
          </section>

          <section className="next-up-section" aria-labelledby="next-up-title">
            <div className="progress-section-heading"><div><p className="overline">PLAN NEXT</p><h3 id="next-up-title">What is left</h3></div><span>{remainingCount} to continue</span></div>
            {remainingCount > 0 ? <div className="remaining-groups">
              {sortedPatterns.length > 0 && <details className="remaining-group" open><summary><span>Patterns</span><b>{sortedPatterns.length} remaining</b></summary>{renderRemainingItems(sortedPatterns)}</details>}
              {sortedTopics.length > 0 && <details className="remaining-group" open><summary><span>Quiz topics</span><b>{sortedTopics.length} remaining</b></summary>{renderRemainingItems(sortedTopics)}</details>}
            </div> : <div className="all-complete" role="status"><Check size={20} /><div><strong>Everything is complete.</strong><p>You have finished every available template, problem, and quiz question.</p></div></div>}
          </section>
        </div>
      </aside>
    </dialog>
  );
}
