import React, { useState, createContext, useEffect, useCallback, useRef } from "react";
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

  // Cursor sparkle effect
  const sparkleContainer = useRef(null);
  useEffect(() => {
    const colors = ["#7c3aed", "#ec4899", "#06b6d4", "#10b981", "#a78bfa", "#f59e0b", "#c4b5fd", "#f472b6"];
    const shapes = ["✦", "✧", "⋆", "✶", "✸", "☆", "✺", "✹"];
    let throttle = false;

    const handleMove = (e) => {
      if (throttle) return;
      throttle = true;
      setTimeout(() => { throttle = false; }, 50);

      for (let i = 0; i < 3; i++) {
        const spark = document.createElement("span");
        spark.className = "cursor-sparkle";
        spark.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        spark.style.left = (e.clientX + (Math.random() - 0.5) * 30) + "px";
        spark.style.top = (e.clientY + (Math.random() - 0.5) * 30) + "px";
        spark.style.color = colors[Math.floor(Math.random() * colors.length)];
        spark.style.fontSize = (8 + Math.random() * 14) + "px";
        const sx = (Math.random() - 0.5) * 40;
        const sy = -(10 + Math.random() * 40);
        spark.style.setProperty("--sx", sx + "px");
        spark.style.setProperty("--sy", sy + "px");
        spark.style.setProperty("--ex", (sx * 2) + "px");
        spark.style.setProperty("--ey", (sy * 2) + "px");
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 1000);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LangContext.Provider value={{ lang, changeLang }}>
        {/* Animated background */}
        <div className="bg-effects" aria-hidden="true">
          <div className="bg-orb bg-orb--1" />
          <div className="bg-orb bg-orb--2" />
          <div className="bg-orb bg-orb--3" />
          <div className="bg-orb bg-orb--4" />
          <div className="bg-orb bg-orb--5" />
          <div className="bg-particle" />
          <div className="bg-particle" />
          <div className="bg-particle" />
          <div className="bg-particle" />
          <div className="bg-particle" />
          <div className="bg-particle" />
          <div className="bg-particle" />
          <div className="bg-particle" />
          <div className="bg-particle" />
          <div className="bg-particle" />
          <div className="bg-particle" />
          <div className="bg-particle" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-star" />
          <div className="bg-ring bg-ring--1" />
          <div className="bg-ring bg-ring--2" />
          <div className="bg-ring bg-ring--3" />
          <div className="bg-ring bg-ring--4" />
          <div className="bg-ring bg-ring--5" />
          <div className="bg-line bg-line--1" />
          <div className="bg-line bg-line--2" />
          <div className="bg-line bg-line--3" />
          <div className="bg-line bg-line--4" />
          <div className="bg-line bg-line--5" />
          <div className="bg-line bg-line--6" />
          <div className="bg-line bg-line--7" />
          <div className="bg-line bg-line--8" />
          <div className="bg-diamond bg-diamond--1" />
          <div className="bg-diamond bg-diamond--2" />
          <div className="bg-diamond bg-diamond--3" />
          <div className="bg-diamond bg-diamond--4" />
          <div className="bg-diamond bg-diamond--5" />
          <div className="bg-diamond bg-diamond--6" />
          <div className="bg-hex bg-hex--1" />
          <div className="bg-hex bg-hex--2" />
          <div className="bg-hex bg-hex--3" />
          <div className="bg-mesh" />
          <div className="bg-noise" />
        </div>

        <div className="app" aria-live="polite">
          <div className="container">
            <Profile userData={userData} />
          </div>
        </div>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;