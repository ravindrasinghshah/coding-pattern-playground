import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { quizTopics, getQuizQuestions } from "../config/quizCatalog.config";

interface Props {
  completedIds: string[];
  onOpen: (topicId: string) => void;
  onReset: () => void;
}

export function QuizDashboard({ completedIds, onOpen, onReset }: Props) {
  const total = quizTopics.reduce((count, topic) => count + topic.questionIds.length, 0);
  return (
    <main className="dashboard quiz-dashboard">
      <section className="hero">
        <div><p className="kicker">CONCEPT REVIEW</p><h1>Build sharper instincts.</h1><p className="hero-copy">Answer a question, then inspect the reasoning behind it.</p></div>
        <div className="progress-orbit" aria-label={`${completedIds.length} of ${total} quiz questions completed`}><strong>{completedIds.length}</strong><span>/ {total}</span><small>answers recalled</small></div>
      </section>
      <section className="section-heading">
        <div><p className="overline">QUIZ LIBRARY</p><h2>Choose a topic</h2></div>
        {completedIds.length > 0 && <button className="ghost-button" onClick={onReset}><RotateCcw size={15} /> Reset quiz progress</button>}
      </section>
      <div className="pattern-grid quiz-topic-grid">
        {quizTopics.map((topic, index) => {
          const questions = getQuizQuestions(topic.id);
          const completed = questions.filter((question) => completedIds.includes(question.id)).length;
          return <article className={`pattern-card ${topic.accent}`} key={topic.id}>
            <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="card-top"><span>{completed}/{questions.length} complete</span><div className="mini-progress"><i style={{ width: `${completed / questions.length * 100}%` }} /></div></div>
            <h3>{topic.title}</h3><p>{topic.description}</p>
            <button className="topic-start" onClick={() => onOpen(topic.id)}><span>{completed === questions.length ? <Check size={14} /> : "Start review"}</span><ArrowRight size={16} /></button>
          </article>;
        })}
      </div>
    </main>
  );
}