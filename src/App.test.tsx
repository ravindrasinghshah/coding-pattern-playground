import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { drills } from "./config/practiceCatalog.config";
import { practiceProblems } from "./config/problemCatalog.config";

const openPattern = (name: string) => {
  const card = screen.getByRole("heading", { name }).closest("article")!;
  fireEvent.click(within(card).getByRole("button", { name: /view all templates & problems/i }));
};

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
    window.history.replaceState({}, "", "/practice");
    vi.spyOn(window, "confirm").mockReturnValue(true);
  });
  afterEach(() => cleanup());
  it("navigates to a drill and reveals the answer", () => {
    render(<App />);
    openPattern("Two Pointers");
    expect(window.location.pathname).toBe("/practice/two-pointers");
    fireEvent.click(screen.getByRole("button", { name: /opposite ends/i }));
    expect(window.location.pathname).toBe("/practice/two-pointers/templates/opposite-ends");
    expect(screen.getByRole("heading", { name: "Opposite ends" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /show answer/i }));
    expect(screen.getByText("Canonical template")).toBeInTheDocument();
  });
  it("shows persisted dashboard progress and resets it", () => {
    localStorage.setItem("pattern-playground:progress", JSON.stringify({ version: 1, completedDrillIds: ["two-pointers-opposite-ends"] }));
    render(<App />);
    expect(screen.getByLabelText(`1 of ${drills.length} drills completed; 0 of ${practiceProblems.length} problems completed`)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /reset progress/i }));
    expect(screen.getByLabelText(`0 of ${drills.length} drills completed; 0 of ${practiceProblems.length} problems completed`)).toBeInTheDocument();
  });

  it("opens a template directly from its pattern card and shows mapped problems", () => {
    render(<App />);
    const card = screen.getByRole("heading", { name: "Linked List" }).closest("article")!;
    fireEvent.click(within(card).getByRole("button", { name: /reverse a linked list/i }));
    expect(window.location.pathname).toBe("/practice/linked-list/templates/reverse");
    expect(screen.getByRole("heading", { name: "Reverse a linked list" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /merge two sorted lists/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /linked list cycle/i })).not.toBeInTheDocument();
  });

  it("renders and opens a newly added graph template", () => {
    render(<App />);
    openPattern("Graph");
    fireEvent.click(screen.getByRole("button", { name: /dfs, iterative/i }));
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
    expect(screen.getByLabelText(`0 of ${drills.length} drills completed; 0 of ${practiceProblems.length} problems completed`)).toBeInTheDocument();
  });

  it("loads valid deep links and redirects invalid template routes", () => {
    window.history.replaceState({}, "", "/practice/linked-list/templates/fast-slow");
    const view = render(<App />);
    expect(screen.getByRole("heading", { name: "Fast and slow pointers" })).toBeInTheDocument();
    view.unmount();
    window.history.replaceState({}, "", "/practice/linked-list/templates/not-a-template");
    render(<App />);
    expect(window.location.pathname).toBe("/practice/linked-list");
    expect(screen.getByRole("heading", { name: "Linked List" })).toBeInTheDocument();
  });

  it("opens a pattern, links externally, and manually persists problem progress", () => {
    render(<App />);
    openPattern("Two Pointers");
    const link = screen.getByRole("link", { name: /valid palindrome/i });
    expect(link).toHaveAttribute("href", "https://leetcode.com/problems/valid-palindrome/");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(localStorage.getItem("pattern-playground:progress")).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: /mark complete: valid palindrome/i }));
    expect(localStorage.getItem("pattern-playground:progress")).toContain("tp-valid-palindrome");
    fireEvent.click(screen.getByRole("button", { name: "Library" }));
    const card = screen.getByRole("heading", { name: "Two Pointers" }).closest("article")!;
    expect(within(card).getByText("1/6 problems")).toBeInTheDocument();
  });

  it("opens and closes the disclaimer", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Disclaimer" }));
    expect(screen.getByRole("dialog", { name: "Disclaimer" })).toBeInTheDocument();
    expect(screen.getByText(/your own discretion and risk/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Close Disclaimer" }));
    expect(screen.queryByRole("dialog", { name: "Disclaimer" })).not.toBeInTheDocument();
  });

  it("shows common questions in the FAQ", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "FAQ" }));
    expect(screen.getByRole("dialog", { name: "Frequently asked questions" })).toBeInTheDocument();
    expect(screen.getByText("Who can use this site?")).toBeInTheDocument();
    expect(screen.getByText("Is it paid or free?")).toBeInTheDocument();
    expect(screen.getByText("Is my code uploaded or stored?")).toBeInTheDocument();
  });

  it("invites visitors to contribute on GitHub", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: /contribute on github/i })).toHaveAttribute(
      "href",
      "https://github.com/ravindrasinghshah/coding-pattern-playground",
    );
  });
});
