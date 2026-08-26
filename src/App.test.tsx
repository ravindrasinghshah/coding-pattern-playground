import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { drills } from "./config/practiceCatalog.config";

describe("App", () => {
  beforeEach(() => { localStorage.clear(); vi.spyOn(window, "confirm").mockReturnValue(true); });
  afterEach(() => cleanup());
  it("navigates to a drill and reveals the answer", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /opposite ends/i }));
    expect(screen.getByRole("heading", { name: "Opposite ends" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /show answer/i }));
    expect(screen.getByText("Canonical template")).toBeInTheDocument();
  });
  it("shows persisted dashboard progress and resets it", () => {
    localStorage.setItem("pattern-playground:progress", JSON.stringify({ version: 1, completedDrillIds: ["two-pointers-opposite-ends"] }));
    render(<App />);
    expect(screen.getByLabelText(`1 of ${drills.length} drills completed`)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /reset progress/i }));
    expect(screen.getByLabelText(`0 of ${drills.length} drills completed`)).toBeInTheDocument();
  });

  it("opens a template added from the requirements document", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /reverse a linked list/i }));
    expect(screen.getByRole("heading", { name: "Reverse a linked list" })).toBeInTheDocument();
  });

  it("renders and opens a newly added graph template", () => {
    render(<App />);
    const graphCard = screen.getByRole("heading", { name: "Graph" }).closest("article")!;
    fireEvent.click(within(graphCard).getByRole("button", { name: /dfs, iterative/i }));
    expect(screen.getByRole("heading", { name: "DFS, iterative" })).toBeInTheDocument();
  });

  it("places binary search immediately after monotonic stack", () => {
    render(<App />);
    const headings = screen.getAllByRole("heading", { level: 3 }).map((heading) => heading.textContent);
    const stackIndex = headings.indexOf("Monotonic Stack");
    expect(headings[stackIndex + 1]).toBe("Binary Search");
  });

  it("shows non-interactive coming-soon cards without changing drill totals", () => {
    render(<App />);
    for (const title of ["Find top K elements with heap", "Dijkstra's algorithm"]) {
      const card = screen.getByRole("article", { name: `${title}, coming soon` });
      expect(within(card).getByText("Coming soon...")).toBeInTheDocument();
      expect(within(card).queryByRole("button")).not.toBeInTheDocument();
    }
    expect(screen.getByLabelText(`0 of ${drills.length} drills completed`)).toBeInTheDocument();
  });
});
