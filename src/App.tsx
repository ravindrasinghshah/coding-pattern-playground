import { useEffect, useState } from "react";
import { Github, Quote } from "lucide-react";
import { Dashboard } from "./components/Dashboard";
import { DrillWorkspace } from "./components/DrillWorkspace";
import { QuizDashboard } from "./components/QuizDashboard";
import { QuizWorkspace } from "./components/QuizWorkspace";
import { InfoDialog } from "./components/InfoDialog";
import { drills } from "./config/practiceCatalog.config";
import {
  getQuizQuestions,
  getQuizTopic,
  quizQuestions,
} from "./config/quizCatalog.config";
import {
  clearProgress,
  completeDrill,
  loadProgress,
  saveProgress,
} from "./lib/progress";
import {
  clearQuizProgress,
  clearQuizTopicProgress,
  completeQuestion,
  loadQuizProgress,
  saveQuizProgress,
} from "./lib/quiz";
import { trackPageView } from "./lib/analytics";
import type { SavedProgressV1, SavedQuizProgressV1 } from "./types";

export default function App() {
  const [openInfo, setOpenInfo] = useState<"disclaimer" | "faq" | null>(null);
  const [page, setPage] = useState<"practice" | "quiz">("practice");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [progress, setProgress] = useState<SavedProgressV1>(() =>
    loadProgress(),
  );
  const [quizProgress, setQuizProgress] = useState<SavedQuizProgressV1>(() =>
    loadQuizProgress(),
  );
  const active = drills.find((drill) => drill.id === activeId);
  const activeTopic = activeTopicId ? getQuizTopic(activeTopicId) : undefined;
  useEffect(() => {
    if (page === "practice" && active) {
      trackPageView(`/practice/${active.id}`, `${active.title} | Coding Pattern Playground`);
    } else if (page === "quiz" && activeTopic) {
      trackPageView(`/quiz/${activeTopic.id}`, `${activeTopic.title} Quiz | Coding Pattern Playground`);
    } else {
      const section = page === "practice" ? "Practice" : "Quiz";
      trackPageView(`/${page}`, `${section} | Coding Pattern Playground`);
    }
  }, [page, active, activeTopic]);
  const knownQuizIds = quizProgress.completedQuestionIds.filter((id) =>
    quizQuestions.some((question) => question.id === id),
  );
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
  const markQuizComplete = (id: string) =>
    setQuizProgress((current) => {
      const next = completeQuestion(current, id);
      saveQuizProgress(next);
      return next;
    });
  const resetQuizProgress = () => {
    if (!window.confirm("Reset all quiz progress? This cannot be undone."))
      return;
    setQuizProgress(clearQuizProgress());
  };
  const resetQuizTopicProgress = (topicId: string) => {
    const topic = getQuizTopic(topicId);
    if (
      !topic ||
      !window.confirm(
        `Reset progress for ${topic.title}? This cannot be undone.`,
      )
    )
      return;
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
        <button
          className="brand"
          onClick={() => {
            setActiveId(null);
            setActiveTopicId(null);
          }}
        >
          <span>
            <img src="/app-logo.jpg" alt="" />
          </span>
          coding/pattern/playground
        </button>
        <div className="page-nav">
          <button
            className={
              page === "practice" ? "page-nav-button active" : "page-nav-button"
            }
            onClick={() => goToPage("practice")}
          >
            Practice
          </button>
          <button
            className={
              page === "quiz" ? "page-nav-button active" : "page-nav-button"
            }
            onClick={() => goToPage("quiz")}
          >
            Quiz
          </button>
        </div>
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
      ) : activeTopic ? (
        <QuizWorkspace
          topicTitle={activeTopic.title}
          questions={getQuizQuestions(activeTopic.id)}
          completedIds={knownQuizIds}
          onBack={() => setActiveTopicId(null)}
          onComplete={markQuizComplete}
        />
      ) : (
        <QuizDashboard
          completedIds={knownQuizIds}
          onOpen={setActiveTopicId}
          onReset={resetQuizProgress}
          onResetTopic={resetQuizTopicProgress}
        />
      )}
      <footer>
        <span>Coding Pattern Playground @ {new Date().getFullYear()}</span>
        <span>
          <Quote size={8}/>
          Your code never leaves this browser.
        </span>
        <nav className="footer-links" aria-label="Information">
          <button type="button" onClick={() => setOpenInfo("faq")}>
            FAQ
          </button>
          <button type="button" onClick={() => setOpenInfo("disclaimer")}>
            Disclaimer
          </button>
          <a
            className="github-link"
            href="https://github.com/ravindrasinghshah/coding-pattern-playground"
            target="_blank"
            rel="noreferrer"
            aria-label="Contribute on GitHub (opens in a new tab)"
          >
            <Github size={14} />
            Contribute on GitHub
          </a>
        </nav>
      </footer>
      {openInfo === "disclaimer" && (
        <InfoDialog
          title="Disclaimer"
          eyebrow="Please read"
          onClose={() => setOpenInfo(null)}
        >
          <p>
            Coding Pattern Playground is provided for educational and practice
            purposes only. It does not guarantee interview results, employment
            outcomes, or that every explanation, template, or validation result
            is complete or error-free.
          </p>
          <p>
            You use this website, its code examples, and its feedback at your
            own discretion and risk. Always review and test code before using it
            in an interview, assessment, project, or production system.
          </p>
          <p>
            To the fullest extent permitted by law, the website owner and
            contributors are not responsible for any loss, damage, claim, or
            consequence arising from your use of, or reliance on, this website.
          </p>
          <p className="dialog-note">
            By continuing to use the site, you acknowledge and accept this
            disclaimer.
          </p>
        </InfoDialog>
      )}
      {openInfo === "faq" && (
        <InfoDialog
          title="Frequently asked questions"
          eyebrow="Good to know"
          onClose={() => setOpenInfo(null)}
        >
          <div className="faq-list">
            <details open>
              <summary>Who can use this site?</summary>
              <p>
                Anyone learning or refreshing coding interview patterns can use
                it, from students and career changers to experienced developers.
              </p>
            </details>
            <details>
              <summary>Why should I use this site?</summary>
              <p>
                It helps you practice recalling common algorithm templates from
                memory and gives focused feedback on the structure of your
                solution.
              </p>
            </details>
            <details>
              <summary>Is it paid or free?</summary>
              <p>
                Coding Pattern Playground is completely free to use. It is a
                hobby project created by an experienced software engineer as a
                way of giving back to the developer community. No payment or
                subscription is required.
              </p>
            </details>
            <details>
              <summary>Is my code uploaded or stored?</summary>
              <p>
                Your code is not uploaded or stored. Validation runs in your
                browser, and practice progress stays in your browser's local
                storage. Google Analytics measures general site usage, but
                entered code is never included in analytics events.
              </p>
            </details>
            <details>
              <summary>Does this guarantee interview success?</summary>
              <p>
                No. It is a study aid, not a guarantee. Use it alongside problem
                solving, testing, and broader interview preparation.
              </p>
            </details>
          </div>
        </InfoDialog>
      )}
    </div>
  );
}
