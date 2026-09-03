import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Github,
  MessageSquare,
  Moon,
  Quote,
  Sun,
} from "lucide-react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  matchPath,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { DrillWorkspace } from "./components/DrillWorkspace";
import { PatternDetail } from "./components/PatternDetail";
import { QuizDashboard } from "./components/QuizDashboard";
import { QuizWorkspace } from "./components/QuizWorkspace";
import { ProblemsDashboard } from "./components/ProblemsDashboard";
import { ProgressSnapshot } from "./components/ProgressSnapshot";
import { InfoDialog } from "./components/InfoDialog";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { drills, patternInfo } from "./config/practiceCatalog.config";
import { practiceProblems } from "./config/problemCatalog.config";
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
  toggleProblem,
} from "./lib/progress";
import {
  clearQuizProgress,
  clearQuizTopicProgress,
  completeQuestion,
  loadQuizProgress,
  saveQuizProgress,
} from "./lib/quiz";
import { trackPageView } from "./lib/analytics";
import { applyTheme, loadTheme, saveTheme, type Theme } from "./lib/theme";
import type { PatternId, SavedProgressV2, SavedQuizProgressV1 } from "./types";

const drillSlug = (patternId: PatternId, drillId: string) => {
  const prefix = `${patternId}-`;
  return drillId.startsWith(prefix) ? drillId.slice(prefix.length) : drillId;
};

function AppShell() {
  const [openInfo, setOpenInfo] = useState<"disclaimer" | "faq" | null>(null);
  const [isProgressSnapshotOpen, setIsProgressSnapshotOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => loadTheme());
  const progressButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [progress, setProgress] = useState<SavedProgressV2>(() =>
    loadProgress(),
  );
  const [quizProgress, setQuizProgress] = useState<SavedQuizProgressV1>(() =>
    loadQuizProgress(),
  );
  const drillMatch = matchPath(
    "/practice/:patternId/templates/:templateId",
    location.pathname,
  );
  const patternMatch = matchPath("/practice/:patternId", location.pathname);
  const quizMatch = matchPath("/quiz/:topicId", location.pathname);
  const routePatternId = (drillMatch?.params.patternId ??
    patternMatch?.params.patternId) as PatternId | undefined;
  const activePatternId =
    routePatternId &&
    patternInfo[routePatternId] &&
    !patternInfo[routePatternId].comingSoon
      ? routePatternId
      : undefined;
  const active =
    activePatternId && drillMatch?.params.templateId
      ? drills.find(
          (drill) =>
            drill.patternId === activePatternId &&
            drillSlug(activePatternId, drill.id) ===
              drillMatch.params.templateId,
        )
      : undefined;
  const activeTopic = quizMatch?.params.topicId
    ? getQuizTopic(quizMatch.params.topicId)
    : undefined;
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  useEffect(() => {
    if (active) {
      trackPageView(
        location.pathname,
        `${active.title} | Coding Pattern Playground`,
      );
    } else if (activePatternId) {
      trackPageView(
        location.pathname,
        `${patternInfo[activePatternId].title} | Coding Pattern Playground`,
      );
    } else if (activeTopic) {
      trackPageView(
        location.pathname,
        `${activeTopic.title} Quiz | Coding Pattern Playground`,
      );
    } else {
      const section = location.pathname.startsWith("/quiz")
        ? "Quiz"
        : location.pathname.startsWith("/problems")
          ? "Problems"
          : "Practice";
      trackPageView(
        location.pathname,
        `${section} | Coding Pattern Playground`,
      );
    }
  }, [location.pathname, active, activePatternId, activeTopic]);
  const knownQuizIds = quizProgress.completedQuestionIds.filter((id) =>
    quizQuestions.some((question) => question.id === id),
  );
  const knownCompletedIds = progress.completedDrillIds.filter((id) =>
    drills.some((drill) => drill.id === id),
  );
  const knownProblemIds = progress.completedProblemIds.filter((id) =>
    practiceProblems.some((problem) => problem.id === id),
  );
  const markComplete = (id: string) =>
    setProgress((current) => {
      const next = completeDrill(current, id);
      saveProgress(next);
      return next;
    });
  const markProblem = (id: string) =>
    setProgress((current) => {
      const next = toggleProblem(current, id);
      saveProgress(next);
      return next;
    });
  const resetProgress = () => {
    if (
      !window.confirm(
        "Reset all completed templates and problems? This cannot be undone.",
      )
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
  const closeProgressSnapshot = () => {
    setIsProgressSnapshotOpen(false);
    window.requestAnimationFrame(() => progressButtonRef.current?.focus());
  };
  const navigateFromProgressSnapshot = (path: string) => {
    setIsProgressSnapshotOpen(false);
    navigate(path);
  };
  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    saveTheme(nextTheme);
  };
  return (
    <div className="app-shell">
      <AnnouncementBanner />
      <nav className="top-nav">
        <button className="brand" onClick={() => navigate("/practice")}>
          <span>
            <img src="/app-logo.jpg" alt="" />
          </span>
          coding/pattern/playground
        </button>
        <div className="nav-actions">
          <div className="page-nav">
            <button
              className={
                location.pathname.startsWith("/practice")
                  ? "page-nav-button active"
                  : "page-nav-button"
              }
              onClick={() => navigate("/practice")}
            >
              Practice
            </button>
            <button
              className={
                location.pathname.startsWith("/problems")
                  ? "page-nav-button active"
                  : "page-nav-button"
              }
              onClick={() => navigate("/problems")}
            >
              Problems
            </button>
            <button
              className={
                location.pathname.startsWith("/quiz")
                  ? "page-nav-button active"
                  : "page-nav-button"
              }
              onClick={() => navigate("/quiz")}
            >
              Quiz
            </button>
          </div>
          <button
            ref={progressButtonRef}
            className="progress-button"
            type="button"
            onClick={() => setIsProgressSnapshotOpen(true)}
            aria-label="Open progress snapshot"
          >
            <BarChart3 size={16} aria-hidden="true" />
            <span>Progress</span>
          </button>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            aria-pressed={theme === "dark"}
            title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            {theme === "light" ? (
              <Moon size={16} aria-hidden="true" />
            ) : (
              <Sun size={16} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/practice" replace />} />
        <Route
          path="/practice"
          element={
            <Dashboard
              completedIds={knownCompletedIds}
              completedProblemIds={knownProblemIds}
              onOpenPattern={(id) => navigate(`/practice/${id}`)}
              onOpenDrill={(patternId, id) =>
                navigate(
                  `/practice/${patternId}/templates/${drillSlug(patternId, id)}`,
                )
              }
              onReset={resetProgress}
            />
          }
        />
        <Route
          path="/practice/:patternId"
          element={
            activePatternId ? (
              <PatternDetail
                patternId={activePatternId}
                completedDrillIds={knownCompletedIds}
                completedProblemIds={knownProblemIds}
                onBack={() => navigate("/practice")}
                onOpenDrill={(id) =>
                  navigate(
                    `/practice/${activePatternId}/templates/${drillSlug(activePatternId, id)}`,
                  )
                }
                onToggleProblem={markProblem}
              />
            ) : (
              <Navigate to="/practice" replace />
            )
          }
        />
        <Route
          path="/practice/:patternId/templates/:templateId"
          element={
            active && activePatternId ? (
              <DrillWorkspace
                key={active.id}
                drill={active}
                theme={theme}
                completed={knownCompletedIds.includes(active.id)}
                completedProblemIds={knownProblemIds}
                onBack={() => navigate(`/practice/${activePatternId}`)}
                onComplete={markComplete}
                onToggleProblem={markProblem}
              />
            ) : (
              <Navigate
                to={
                  activePatternId ? `/practice/${activePatternId}` : "/practice"
                }
                replace
              />
            )
          }
        />
        <Route
          path="/problems"
          element={
            <ProblemsDashboard
              completedProblemIds={knownProblemIds}
              onToggleProblem={markProblem}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            <QuizDashboard
              completedIds={knownQuizIds}
              onOpen={(id) => navigate(`/quiz/${id}`)}
              onReset={resetQuizProgress}
              onResetTopic={resetQuizTopicProgress}
            />
          }
        />
        <Route
          path="/quiz/:topicId"
          element={
            activeTopic ? (
              <QuizWorkspace
                topicTitle={activeTopic.title}
                questions={getQuizQuestions(activeTopic.id)}
                completedIds={knownQuizIds}
                onBack={() => navigate("/quiz")}
                onComplete={markQuizComplete}
              />
            ) : (
              <Navigate to="/quiz" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/practice" replace />} />
      </Routes>
      {isProgressSnapshotOpen && (
        <ProgressSnapshot
          completedDrillIds={knownCompletedIds}
          completedProblemIds={knownProblemIds}
          completedQuizIds={knownQuizIds}
          onClose={closeProgressSnapshot}
          onNavigate={navigateFromProgressSnapshot}
        />
      )}
      <footer>
        <span>Coding Pattern Playground @ {new Date().getFullYear()}</span>
        <span>
          <Quote size={8} />
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
            className="footer-link"
            href="https://forms.gle/kSLvrUCEcg4KRwgc6"
            target="_blank"
            rel="noreferrer"
            aria-label="Share feedback (opens in a new tab)"
          >
            <MessageSquare size={14} />
            Share feedback
          </a>
          <a
            className="footer-link"
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

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
