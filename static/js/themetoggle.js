// Site override of archie's themetoggle.js. Archie's version always starts in
// light mode; this one starts from the visitor's system setting, remembers an
// explicit click, and keeps following the system until the visitor chooses.

var themeKey = "theme-storage";
var currentTheme;

function storedTheme() {
  try {
    return localStorage.getItem(themeKey);
  } catch (e) {
    return null; // storage blocked (private window, etc.)
  }
}

function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setTheme(mode) {
  currentTheme = mode;
  document.getElementById("darkModeStyle").disabled = mode !== "dark";
  // The icon shows where a click will take you: sun in dark, moon in light.
  var e = document.querySelector("#dark-mode-toggle > .feather > use");
  if (e) {
    e.href.baseVal = e.href.baseVal.replace(
      /#.*$/,
      mode === "dark" ? "#sun" : "#moon",
    );
  }
}

function toggleTheme() {
  setTheme(currentTheme === "dark" ? "light" : "dark");
  try {
    localStorage.setItem(themeKey, currentTheme);
  } catch (e) {}
}

setTheme(storedTheme() || systemTheme());

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    if (!storedTheme()) setTheme(systemTheme());
  });
