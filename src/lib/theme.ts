export const THEME_KEY = "pattern-playground:theme";

export type Theme = "light" | "dark";

export function loadTheme(storage: Pick<Storage, "getItem"> = localStorage): Theme {
  return storage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
}

export function saveTheme(theme: Theme, storage: Pick<Storage, "setItem"> = localStorage): void {
  storage.setItem(THEME_KEY, theme);
}

export function applyTheme(theme: Theme, documentElement: HTMLElement = document.documentElement): void {
  documentElement.dataset.theme = theme;
}
