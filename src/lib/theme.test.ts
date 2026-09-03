import { beforeEach, describe, expect, it } from "vitest";
import { applyTheme, loadTheme, saveTheme, THEME_KEY } from "./theme";

describe("theme preferences", () => {
  beforeEach(() => localStorage.clear());

  it("defaults to light and rejects unknown saved values", () => {
    expect(loadTheme()).toBe("light");
    localStorage.setItem(THEME_KEY, "system");
    expect(loadTheme()).toBe("light");
  });

  it("loads and saves the dark preference", () => {
    saveTheme("dark");
    expect(localStorage.getItem(THEME_KEY)).toBe("dark");
    expect(loadTheme()).toBe("dark");
  });

  it("applies the selected theme to the document root", () => {
    applyTheme("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
