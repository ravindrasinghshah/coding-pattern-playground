import { describe, expect, it } from "vitest";
import { drills, patternInfo } from "./practiceCatalog.config";
import { getProblemsForPattern, practiceProblems } from "./problemCatalog.config";
import type { PatternId } from "../types";

describe("problem catalog", () => {
  it("uses unique stable IDs and canonical LeetCode URLs", () => {
    expect(new Set(practiceProblems.map((problem) => problem.id)).size).toBe(practiceProblems.length);
    expect(new Set(practiceProblems.map((problem) => problem.url)).size).toBe(practiceProblems.length);
    for (const problem of practiceProblems) {
      expect(patternInfo[problem.patternId]).toBeDefined();
      expect(drills.some((drill) => drill.id === problem.templateId && drill.patternId === problem.patternId)).toBe(true);
      expect(["Easy", "Medium", "Hard"]).toContain(problem.difficulty);
      expect(problem.url).toMatch(/^https:\/\/leetcode\.com\/problems\/[a-z0-9-]+\/$/);
    }
    for (const drill of drills) expect(practiceProblems.some((problem) => problem.templateId === drill.id)).toBe(true);
  });

  it("provides a progressive six-problem set for every active pattern", () => {
    const activeIds = (Object.keys(patternInfo) as PatternId[]).filter((id) => !patternInfo[id].comingSoon);
    for (const patternId of activeIds) {
      const problems = getProblemsForPattern(patternId);
      expect(problems).toHaveLength(6);
      expect(problems.filter((problem) => problem.difficulty === "Easy")).toHaveLength(2);
      expect(problems.filter((problem) => problem.difficulty === "Medium")).toHaveLength(3);
      expect(problems.filter((problem) => problem.difficulty === "Hard")).toHaveLength(1);
    }
  });
});
