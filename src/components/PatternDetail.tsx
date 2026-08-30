import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { drills, patternInfo } from "../config/practiceCatalog.config";
import { getProblemsForPattern } from "../config/problemCatalog.config";
import type { PatternId } from "../types";

interface Props {
  patternId: PatternId;
  completedDrillIds: string[];
  completedProblemIds: string[];
  onBack: () => void;
  onOpenDrill: (id: string) => void;
  onToggleProblem: (id: string) => void;
}

export function PatternDetail({ patternId, completedDrillIds, completedProblemIds, onBack, onOpenDrill, onToggleProblem }: Props) {
  const info = patternInfo[patternId];
  const patternDrills = drills.filter((drill) => drill.patternId === patternId);
  const problems = getProblemsForPattern(patternId);
  const completedDrills = patternDrills.filter((drill) => completedDrillIds.includes(drill.id)).length;
  const completedProblems = problems.filter((problem) => completedProblemIds.includes(problem.id)).length;

  return (
    <main className="pattern-detail">
      <header className="pattern-detail-hero">
        <button className="back-button" onClick={onBack}><ArrowLeft size={18} /> Library</button>
        <p className="overline">PATTERN PRACTICE</p>
        <h1>{info.title}</h1>
        <p>{info.description}</p>
      </header>

      <div className="pattern-detail-grid">
        <section className="detail-section" aria-labelledby="template-heading">
          <div className="detail-section-heading">
            <div><p className="overline">RECALL</p><h2 id="template-heading">Template drills</h2></div>
            <span>{completedDrills}/{patternDrills.length} complete</span>
          </div>
          <div className="template-list">
            {patternDrills.map((drill) => {
              const complete = completedDrillIds.includes(drill.id);
              return <button key={drill.id} onClick={() => onOpenDrill(drill.id)}>
                <span className={complete ? "status complete" : "status"}>{complete && <Check size={13} />}</span>
                <span><strong>{drill.title}</strong><small>{drill.eyebrow}</small></span>
                <ArrowRight size={16} />
              </button>;
            })}
          </div>
        </section>

        <section className="detail-section" aria-labelledby="problems-heading">
          <div className="detail-section-heading">
            <div><p className="overline">APPLY</p><h2 id="problems-heading">Practice problems</h2></div>
            <span>{completedProblems}/{problems.length} complete</span>
          </div>
          <p className="section-intro">Solve these on LeetCode, then mark them complete here.</p>
          <ol className="problem-list">
            {problems.map((problem) => {
              const complete = completedProblemIds.includes(problem.id);
              return <li key={problem.id}>
                <button
                  className={complete ? "problem-check complete" : "problem-check"}
                  aria-label={`${complete ? "Mark incomplete" : "Mark complete"}: ${problem.title}`}
                  aria-pressed={complete}
                  onClick={() => onToggleProblem(problem.id)}
                >{complete && <Check size={13} />}</button>
                <a href={problem.url} target="_blank" rel="noopener noreferrer">
                  <span>{problem.title}</span><ExternalLink size={14} />
                </a>
                <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span>
              </li>;
            })}
          </ol>
        </section>
      </div>
    </main>
  );
}
