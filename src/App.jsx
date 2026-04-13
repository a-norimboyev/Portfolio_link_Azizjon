import React, { useState, createContext, useEffect, useCallback } from "react";
import Profile from "./components/Profile";
import "./App.css";
import "./index.css";
import userData from "./data/userData";

export const ThemeContext = createContext();
export const LangContext = createContext();

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {
    // ignore
  }
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
};

const getInitialLang = () => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
  } catch (e) {
    // ignore
  }
  return "uz";
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [lang, setLang] = useState(getInitialLang);

  // toggleTheme and changeLang are stable references
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const changeLang = useCallback((l) => {
    setLang(l);
  }, []);

  // Apply theme to document.body and persist to localStorage
  useEffect(() => {
    try {
      document.body.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
      // also add optional class for components that target .theme-dark
      if (theme === "dark") {
        document.body.classList.add("theme-dark");
      } else {
        document.body.classList.remove("theme-dark");
      }
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore (e.g., SSR environments)
    }
  }, [theme]);

  // Persist lang selection
  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LangContext.Provider value={{ lang, changeLang }}>
        <div className={`app`} aria-live="polite">
          <div className="container">
            <Profile userData={userData} />
          </div>
        </div>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;