import React, { useContext } from "react";
import { LangContext } from "../../App";

const langs = [
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

function LanguageSwitcher() {
  const { lang, changeLang } = useContext(LangContext);

  return (
    <div className="lang-switcher">
      {langs.map((l) => (
        <button
          key={l.code}
          className={`lang-btn ${lang === l.code ? "active" : ""}`}
          onClick={() => changeLang(l.code)}
          aria-pressed={lang === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
