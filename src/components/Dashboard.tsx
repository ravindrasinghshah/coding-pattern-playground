import { useState } from "react";
import { ArrowRight, Check, RotateCcw, Search } from "lucide-react";
import { drills, patternInfo } from "../config/practiceCatalog.config";
import { getProblemsForPattern, practiceProblems } from "../config/problemCatalog.config";
import type { PatternId } from "../types";

interface Props {
  completedIds: string[];
  completedProblemIds: string[];
  onOpenPattern: (id: PatternId) => void;
  onOpenDrill: (patternId: PatternId, drillId: string) => void;
  onReset: () => void;
}

export function Dashboard({ completedIds, completedProblemIds, onOpenPattern, onOpenDrill, onReset }: Props) {
  const [search, setSearch] = useState("");
  const patternIds = Object.keys(patternInfo) as PatternId[];
  const query = search.trim().toLocaleLowerCase();
  const visiblePatterns = patternIds.flatMap((patternId, index) => {
    const info = patternInfo[patternId];
    const items = drills.filter((drill) => drill.patternId === patternId);
    const patternMatches = !query || `${info.title} ${info.description}`.toLocaleLowerCase().includes(query);
    const visibleItems = patternMatches
      ? items
      : items.filter((drill) => drill.title.toLocaleLowerCase().includes(query));
    return patternMatches || visibleItems.length > 0 ? [{ patternId, index, items, visibleItems, info }] : [];
  });
  return (
    <main className="dashboard">
      <section className="hero">
        <div>
          <h1>Practice coding patterns.</h1>
          <p className="hero-copy">Choose a template and write it from memory.</p>
        </div>
        <div className="progress-orbit" aria-label={`${completedIds.length} of ${drills.length} drills completed; ${completedProblemIds.length} of ${practiceProblems.length} problems completed`}>
          <strong>{completedIds.length}</strong><span>/ {drills.length}</span><small>completed</small>
        </div>
      </section>

      <section className="section-heading">
        <div><p className="overline">PRACTICE LIBRARY</p><h2>Choose a pattern</h2></div>
        {(completedIds.length > 0 || completedProblemIds.length > 0) && <button className="ghost-button" onClick={onReset}><RotateCcw size={15} /> Reset progress</button>}
      </section>

      <label className="catalog-search">
        <Search size={17} aria-hidden="true" />
        <span className="sr-only">Search patterns and templates</span>
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search patterns and templates"
        />
      </label>

      <div className="pattern-grid">
        {visiblePatterns.map(({ patternId, index, items, visibleItems, info }) => {
          const completed = items.filter((drill) => completedIds.includes(drill.id)).length;
          const problems = getProblemsForPattern(patternId);
          const problemsCompleted = problems.filter((problem) => completedProblemIds.includes(problem.id)).length;
          if (info.comingSoon) {
            return (
              <article className={`pattern-card placeholder-card ${info.accent}`} key={patternId} aria-label={`${info.title}, coming soon`}>
                <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="card-top"><span>PLANNED TEMPLATE</span></div>
                <h3>{info.title}</h3><p>{info.description}</p>
                <div className="coming-soon" aria-disabled="true">Coming soon...</div>
              </article>
            );
          }
          return (
            <article className={`pattern-card ${info.accent}`} key={patternId}>
              <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="card-top pattern-progress"><span>{completed}/{items.length} templates</span><span>{problemsCompleted}/{problems.length} problems</span></div>
              <h3>{info.title}</h3><p>{info.description}</p>
              <div className="drill-list">
                {visibleItems.map((drill) => (
                  <button key={drill.id} onClick={() => onOpenDrill(patternId, drill.id)}>
                    <span className={completedIds.includes(drill.id) ? "status complete" : "status"}>{completedIds.includes(drill.id) && <Check size={13} />}</span>
                    <span>{drill.title}</span><ArrowRight size={16} />
                  </button>
                ))}
                <button className="pattern-overview-link" onClick={() => onOpenPattern(patternId)}><span /><span>View all templates & problems</span><ArrowRight size={16} /></button>
              </div>
            </article>
          );
        })}
      </div>
      {visiblePatterns.length === 0 && (
        <div className="catalog-empty" role="status">
          <h3>No patterns found</h3>
          <p>Try a different pattern or template name.</p>
        </div>
      )}
    </main>
  );
}
