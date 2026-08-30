import { useState } from "react";
import { Check, ExternalLink, Search } from "lucide-react";
import { drills, patternInfo } from "../config/practiceCatalog.config";
import { getProblemsForPattern, practiceProblems } from "../config/problemCatalog.config";
import type { PatternId, ProblemDifficulty } from "../types";

type DifficultyFilter = "All" | ProblemDifficulty;
type CompletionFilter = "all" | "incomplete" | "complete";

interface Props {
  completedProblemIds: string[];
  onToggleProblem: (id: string) => void;
}

export function ProblemsDashboard({ completedProblemIds, onToggleProblem }: Props) {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("All");
  const [completion, setCompletion] = useState<CompletionFilter>("all");
  const query = search.trim().toLocaleLowerCase();
  const templateTitles = new Map(drills.map((drill) => [drill.id, drill.title]));
  const patternIds = Object.keys(patternInfo) as PatternId[];
  const groups = patternIds.flatMap((patternId) => {
    const allProblems = getProblemsForPattern(patternId);
    if (allProblems.length === 0) return [];
    const problems = allProblems.filter((problem) => {
      const complete = completedProblemIds.includes(problem.id);
      return (!query || problem.title.toLocaleLowerCase().includes(query))
        && (difficulty === "All" || problem.difficulty === difficulty)
        && (completion === "all" || (completion === "complete" ? complete : !complete));
    });
    return problems.length > 0 ? [{ patternId, allProblems, problems }] : [];
  });

  return (
    <main className="dashboard problems-dashboard">
      <section className="hero">
        <div><p className="kicker">PROBLEM CATALOG</p><h1>Put patterns into practice.</h1><p className="hero-copy">Browse curated problems by pattern and track the ones you complete.</p></div>
        <div className="progress-orbit" aria-label={`${completedProblemIds.length} of ${practiceProblems.length} problems completed`}><strong>{completedProblemIds.length}</strong><span>/ {practiceProblems.length}</span><small>solved</small></div>
      </section>

      <section className="section-heading">
        <div><p className="overline">ALL PROBLEMS</p><h2>Browse by pattern</h2></div>
      </section>

      <div className="catalog-controls" aria-label="Problem filters">
        <label className="catalog-search">
          <Search size={17} aria-hidden="true" />
          <span className="sr-only">Search problems</span>
          <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search problem titles" />
        </label>
        <label className="catalog-filter"><span>Difficulty</span><select value={difficulty} onChange={(event) => setDifficulty(event.target.value as DifficultyFilter)}><option>All</option><option>Easy</option><option>Medium</option><option>Hard</option></select></label>
        <label className="catalog-filter"><span>Status</span><select value={completion} onChange={(event) => setCompletion(event.target.value as CompletionFilter)}><option value="all">All</option><option value="incomplete">Incomplete</option><option value="complete">Complete</option></select></label>
      </div>

      <div className="problem-catalog">
        {groups.map(({ patternId, allProblems, problems }) => {
          const completed = allProblems.filter((problem) => completedProblemIds.includes(problem.id)).length;
          return <section className="detail-section problem-group" key={patternId} aria-labelledby={`problems-${patternId}`}>
            <div className="detail-section-heading">
              <div><p className="overline">{patternId.replaceAll("-", " ")}</p><h2 id={`problems-${patternId}`}>{patternInfo[patternId].title}</h2></div>
              <span>{completed}/{allProblems.length} complete</span>
            </div>
            <ol className="problem-list">
              {problems.map((problem) => {
                const complete = completedProblemIds.includes(problem.id);
                return <li key={problem.id}>
                  <button className={complete ? "problem-check complete" : "problem-check"} aria-label={`${complete ? "Mark incomplete" : "Mark complete"}: ${problem.title}`} aria-pressed={complete} onClick={() => onToggleProblem(problem.id)}>{complete && <Check size={13} />}</button>
                  <a href={problem.url} target="_blank" rel="noopener noreferrer"><span className="problem-copy"><span>{problem.title}</span><small>Use: {templateTitles.get(problem.templateId) ?? "Template"}</small></span><ExternalLink size={14} /></a>
                  <span className={`difficulty ${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span>
                </li>;
              })}
            </ol>
          </section>;
        })}
      </div>
      {groups.length === 0 && <div className="catalog-empty" role="status"><h3>No problems found</h3><p>Try changing your search or filters.</p></div>}
    </main>
  );
}
