export function getLang() {
  if (typeof window === "undefined") {
    return "en-US";
  }

  if (navigator.languages !== undefined) return navigator.languages[0];
  return navigator.language;
}
