import { useState } from "react";
import { Braces } from "lucide-react";
import { Dashboard } from "./components/Dashboard";
import { DrillWorkspace } from "./components/DrillWorkspace";
import { QuizDashboard } from "./components/QuizDashboard";
import { QuizWorkspace } from "./components/QuizWorkspace";
import { drills } from "./config/practiceCatalog.config";
import { getQuizQuestions, getQuizTopic, quizQuestions } from "./config/quizCatalog.config";
import {
  clearProgress,
  completeDrill,
  loadProgress,
  saveProgress,
} from "./lib/progress";
import { clearQuizProgress, clearQuizTopicProgress, completeQuestion, loadQuizProgress, saveQuizProgress } from "./lib/quiz";
import type { SavedProgressV1, SavedQuizProgressV1 } from "./types";

export default function App() {
  const [page, setPage] = useState<"practice" | "quiz">("practice");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [progress, setProgress] = useState<SavedProgressV1>(() =>
    loadProgress(),
  );
  const [quizProgress, setQuizProgress] = useState<SavedQuizProgressV1>(() => loadQuizProgress());
  const active = drills.find((drill) => drill.id === activeId);
  const activeTopic = activeTopicId ? getQuizTopic(activeTopicId) : undefined;
  const knownQuizIds = quizProgress.completedQuestionIds.filter((id) => quizQuestions.some((question) => question.id === id));
  const knownCompletedIds = progress.completedDrillIds.filter((id) =>
    drills.some((drill) => drill.id === id),
  );
  const markComplete = (id: string) =>
    setProgress((current) => {
      const next = completeDrill(current, id);
      saveProgress(next);
      return next;
    });
  const resetProgress = () => {
    if (
      !window.confirm("Reset all completed templates? This cannot be undone.")
    )
      return;
    setProgress(clearProgress());
  };
  const markQuizComplete = (id: string) => setQuizProgress((current) => {
    const next = completeQuestion(current, id);
    saveQuizProgress(next);
    return next;
  });
  const resetQuizProgress = () => {
    if (!window.confirm("Reset all quiz progress? This cannot be undone.")) return;
    setQuizProgress(clearQuizProgress());
  };
  const resetQuizTopicProgress = (topicId: string) => {
    const topic = getQuizTopic(topicId);
    if (!topic || !window.confirm(`Reset progress for ${topic.title}? This cannot be undone.`)) return;
    setQuizProgress((current) => {
      const next = clearQuizTopicProgress(current, topic.questionIds);
      saveQuizProgress(next);
      return next;
    });
  };
  const goToPage = (nextPage: "practice" | "quiz") => {
    setPage(nextPage);
    setActiveId(null);
    setActiveTopicId(null);
  };

  return (
    <div className="app-shell">
      <nav className="top-nav">
        <button className="brand" onClick={() => { setActiveId(null); setActiveTopicId(null); }}>
          <span>
            <Braces size={19} />
          </span>
          coding/pattern/playground
        </button>
        <div className="page-nav"><button className={page === "practice" ? "page-nav-button active" : "page-nav-button"} onClick={() => goToPage("practice")}>Practice</button><button className={page === "quiz" ? "page-nav-button active" : "page-nav-button"} onClick={() => goToPage("quiz")}>Quiz</button></div>
      </nav>
      {page === "practice" && active ? (
        <DrillWorkspace
          key={active.id}
          drill={active}
          completed={knownCompletedIds.includes(active.id)}
          onBack={() => setActiveId(null)}
          onComplete={markComplete}
        />
      ) : page === "practice" ? (
        <Dashboard
          completedIds={knownCompletedIds}
          onOpen={setActiveId}
          onReset={resetProgress}
        />
      ) : activeTopic ? <QuizWorkspace topicTitle={activeTopic.title} questions={getQuizQuestions(activeTopic.id)} completedIds={knownQuizIds} onBack={() => setActiveTopicId(null)} onComplete={markQuizComplete} /> : <QuizDashboard completedIds={knownQuizIds} onOpen={setActiveTopicId} onReset={resetQuizProgress} onResetTopic={resetQuizTopicProgress} />}
      <footer>
        <span>Coding Pattern Playground @ {new Date().getFullYear()}</span>
        <span>Your code never leaves this browser.</span>
      </footer>
    </div>
  );
}
