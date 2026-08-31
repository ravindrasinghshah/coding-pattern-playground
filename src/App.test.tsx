import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { drills } from "./config/practiceCatalog.config";
import { practiceProblems } from "./config/problemCatalog.config";
import { quizQuestions, quizTopics } from "./config/quizCatalog.config";

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

  it("links users to the feedback form", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: /share feedback/i })).toHaveAttribute(
      "href",
      "https://forms.gle/kSLvrUCEcg4KRwgc6",
    );
  });

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

  it("searches patterns, descriptions, and template titles", () => {
    render(<App />);
    const search = screen.getByRole("searchbox", { name: /search patterns and templates/i });
    fireEvent.change(search, { target: { value: "reverse a linked" } });
    expect(screen.getByRole("heading", { name: "Linked List" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reverse a linked list/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /fast and slow pointers/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Two Pointers" })).not.toBeInTheDocument();

    fireEvent.change(search, { target: { value: "ordered search space" } });
    expect(screen.getByRole("heading", { name: "Binary Search" })).toBeInTheDocument();
    fireEvent.change(search, { target: { value: "not a real pattern" } });
    expect(screen.getByRole("status")).toHaveTextContent("No patterns found");
    fireEvent.change(search, { target: { value: "" } });
    expect(screen.getByRole("heading", { name: "Two Pointers" })).toBeInTheDocument();
  });

  it("shows all problems grouped by pattern and filters them", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Problems" }));
    expect(window.location.pathname).toBe("/problems");
    expect(screen.getByRole("button", { name: "Problems" })).toHaveClass("active");
    expect(screen.getByRole("heading", { name: "Two Pointers" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Trie" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Find top K elements with heap" })).not.toBeInTheDocument();
    expect(within(screen.getByRole("main")).getAllByRole("link")).toHaveLength(practiceProblems.length);

    fireEvent.change(screen.getByRole("searchbox", { name: /search problems/i }), { target: { value: "palindrome" } });
    expect(screen.getByRole("link", { name: /valid palindrome/i })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /container with most water/i })).not.toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Difficulty"), { target: { value: "Medium" } });
    expect(screen.getByRole("status")).toHaveTextContent("No problems found");
  });

  it("shares problem completion between the catalog and pattern pages", () => {
    window.history.replaceState({}, "", "/problems");
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /mark complete: valid palindrome/i }));
    expect(screen.getByLabelText(`1 of ${practiceProblems.length} problems completed`)).toBeInTheDocument();
    expect(localStorage.getItem("pattern-playground:progress")).toContain("tp-valid-palindrome");
    fireEvent.click(screen.getByRole("button", { name: "Practice" }));
    const card = screen.getByRole("heading", { name: "Two Pointers" }).closest("article")!;
    expect(within(card).getByText("1/6 problems")).toBeInTheDocument();
  });

  it("summarizes valid progress, prioritizes the least-complete work, and navigates from the snapshot", () => {
    const incompleteTopic = quizTopics[0];
    const incompleteQuestionIds = new Set(incompleteTopic.questionIds);
    const completedPatternIds = drills.filter((drill) => drill.patternId !== "two-pointers").map((drill) => drill.id);
    completedPatternIds.push(drills.find((drill) => drill.patternId === "two-pointers")!.id);
    const completedProblemIds = practiceProblems.filter((problem) => problem.patternId !== "two-pointers").map((problem) => problem.id);
    localStorage.setItem("pattern-playground:progress", JSON.stringify({
      version: 2,
      completedDrillIds: [...completedPatternIds, "stale-drill"],
      completedProblemIds: [...completedProblemIds, "stale-problem"],
    }));
    localStorage.setItem("pattern-playground:quiz-progress", JSON.stringify({
      version: 1,
      completedQuestionIds: quizQuestions.filter((question) => !incompleteQuestionIds.has(question.id)).map((question) => question.id).concat("stale-question"),
    }));
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /open progress snapshot/i }));
    const dialog = screen.getByRole("dialog", { name: "Your progress" });
    const total = drills.length + practiceProblems.length + quizQuestions.length;
    const completed = completedPatternIds.length + completedProblemIds.length + quizQuestions.length - incompleteTopic.questionIds.length;
    expect(within(dialog).getByLabelText(`${completed} of ${total} learning items complete`)).toBeInTheDocument();
    expect(within(dialog).queryByText("Find top K elements with heap")).not.toBeInTheDocument();
    expect(within(dialog).getByText("Patterns")).toBeInTheDocument();
    expect(within(dialog).getByText("Quiz topics")).toBeInTheDocument();
    expect(within(dialog).queryByRole("button", { name: /continue two pointers/i })).toBeInTheDocument();
    expect(within(dialog).getAllByRole("button", { name: /continue /i })[0]).toHaveAccessibleName(/Continue Two Pointers/);
    expect(within(dialog).getByRole("button", { name: new RegExp(`Continue ${incompleteTopic.title}`) })).toBeInTheDocument();

    fireEvent.click(within(dialog).getByRole("button", { name: /continue two pointers/i }));
    expect(window.location.pathname).toBe("/practice/two-pointers");
    expect(screen.queryByRole("dialog", { name: "Your progress" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /open progress snapshot/i }));
    fireEvent.click(screen.getByRole("button", { name: /solved/i }));
    expect(window.location.pathname).toBe("/problems");
    expect(screen.queryByRole("dialog", { name: "Your progress" })).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /mark complete: valid palindrome/i }));
    fireEvent.click(screen.getByRole("button", { name: /open progress snapshot/i }));
    expect(screen.getByLabelText(`${completed + 1} of ${total} learning items complete`)).toBeInTheDocument();
  });

  it("shows the all-complete snapshot state and restores focus after closing", async () => {
    localStorage.setItem("pattern-playground:progress", JSON.stringify({ version: 2, completedDrillIds: drills.map((drill) => drill.id), completedProblemIds: practiceProblems.map((problem) => problem.id) }));
    localStorage.setItem("pattern-playground:quiz-progress", JSON.stringify({ version: 1, completedQuestionIds: quizQuestions.map((question) => question.id) }));
    render(<App />);
    const opener = screen.getByRole("button", { name: /open progress snapshot/i });
    opener.focus();
    fireEvent.click(opener);
    expect(screen.getByRole("status")).toHaveTextContent("Everything is complete.");
    fireEvent.click(screen.getByRole("button", { name: /close progress snapshot/i }));
    await new Promise((resolve) => window.requestAnimationFrame(resolve));
    expect(screen.queryByRole("dialog", { name: "Your progress" })).not.toBeInTheDocument();
    expect(opener).toHaveFocus();

    fireEvent.click(opener);
    fireEvent(screen.getByRole("dialog", { name: "Your progress" }), new Event("cancel", { cancelable: true }));
    expect(screen.queryByRole("dialog", { name: "Your progress" })).not.toBeInTheDocument();
    fireEvent.click(opener);
    fireEvent.click(screen.getByRole("dialog", { name: "Your progress" }));
    expect(screen.queryByRole("dialog", { name: "Your progress" })).not.toBeInTheDocument();
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
