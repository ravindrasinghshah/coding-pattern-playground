import type { SavedProgressV2 } from "../types";

export const PROGRESS_KEY = "pattern-playground:progress";
const empty = (): SavedProgressV2 => ({ version: 2, completedDrillIds: [], completedProblemIds: [] });
const validIds = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((id) => typeof id === "string");

export function loadProgress(storage: Pick<Storage, "getItem"> = localStorage): SavedProgressV2 {
  try {
    const value: unknown = JSON.parse(storage.getItem(PROGRESS_KEY) ?? "null");
    if (!value || typeof value !== "object") return empty();
    const record = value as Record<string, unknown>;
    if (record.version === 1 && validIds(record.completedDrillIds)) {
      return { version: 2, completedDrillIds: [...new Set(record.completedDrillIds)], completedProblemIds: [] };
    }
    if (record.version !== 2 || !validIds(record.completedDrillIds) || !validIds(record.completedProblemIds)) return empty();
    return {
      version: 2,
      completedDrillIds: [...new Set(record.completedDrillIds)],
      completedProblemIds: [...new Set(record.completedProblemIds)],
    };
  } catch {
    return empty();
  }
}

export function saveProgress(progress: SavedProgressV2, storage: Pick<Storage, "setItem"> = localStorage): void {
  storage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export function completeDrill(progress: SavedProgressV2, drillId: string): SavedProgressV2 {
  return progress.completedDrillIds.includes(drillId)
    ? progress
    : { ...progress, completedDrillIds: [...progress.completedDrillIds, drillId] };
}

export function toggleProblem(progress: SavedProgressV2, problemId: string): SavedProgressV2 {
  const completedProblemIds = progress.completedProblemIds.includes(problemId)
    ? progress.completedProblemIds.filter((id) => id !== problemId)
    : [...progress.completedProblemIds, problemId];
  return { ...progress, completedProblemIds };
}

export function clearProgress(storage: Pick<Storage, "removeItem"> = localStorage): SavedProgressV2 {
  storage.removeItem(PROGRESS_KEY);
  return empty();
}
