import { beforeEach, describe, expect, it } from "vitest";
import { clearProgress, completeDrill, loadProgress, PROGRESS_KEY, saveProgress, toggleProblem } from "./progress";

const empty = { version: 2 as const, completedDrillIds: [], completedProblemIds: [] };

describe("progress", () => {
  beforeEach(() => localStorage.clear());
  it("falls back for missing and malformed data", () => {
    expect(loadProgress()).toEqual(empty);
    localStorage.setItem(PROGRESS_KEY, "not-json");
    expect(loadProgress()).toEqual(empty);
  });
  it("migrates version 1 drill progress", () => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({ version: 1, completedDrillIds: ["drill-1", "drill-1"] }));
    expect(loadProgress()).toEqual({ version: 2, completedDrillIds: ["drill-1"], completedProblemIds: [] });
  });
  it("toggles problem completion independently", () => {
    const completed = toggleProblem(empty, "problem-1");
    expect(completed.completedProblemIds).toEqual(["problem-1"]);
    expect(toggleProblem(completed, "problem-1").completedProblemIds).toEqual([]);
  });
  it("saves unique completions", () => {
    const once = completeDrill(loadProgress(), "drill-1");
    const twice = completeDrill(once, "drill-1");
    saveProgress(twice);
    expect(loadProgress().completedDrillIds).toEqual(["drill-1"]);
  });
  it("clears saved progress", () => {
    saveProgress({ version: 2, completedDrillIds: ["drill-1"], completedProblemIds: ["problem-1"] });
    expect(clearProgress()).toEqual(empty);
    expect(localStorage.getItem(PROGRESS_KEY)).toBeNull();
  });
});
