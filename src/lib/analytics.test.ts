import { afterEach, describe, expect, it, vi } from "vitest";
import { trackPageView } from "./analytics";

describe("analytics", () => {
  afterEach(() => {
    delete window.gtag;
  });

  it("sends a virtual page view", () => {
    window.gtag = vi.fn();

    trackPageView("/practice/two-pointers", "Two Pointers | Coding Pattern Playground");

    expect(window.gtag).toHaveBeenCalledWith("event", "page_view", {
      page_path: "/practice/two-pointers",
      page_location: `${window.location.origin}/practice/two-pointers`,
      page_title: "Two Pointers | Coding Pattern Playground",
    });
  });

  it("does nothing when the Google tag is unavailable", () => {
    expect(() => trackPageView("/practice", "Practice")).not.toThrow();
  });
});
