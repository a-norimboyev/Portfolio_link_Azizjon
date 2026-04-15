import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LangContext } from "../../App";
import { profileImg } from "../../assets/images";
import uz from "../../locales/uz";
import en from "../../locales/en";
import ru from "../../locales/ru";

const locales = { uz, en, ru };

function ProfileHeader({ userData }) {
  const { lang } = useContext(LangContext);
  const t = locales[lang] || uz;

  const fullText = lang === "ru" ? "Нужно веб-приложение? Свяжитесь!" : lang === "en" ? "Need a web app? Contact us!" : "Kimga web ilova kerak bo'lsa bog'laning";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayText(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="profile-header">
      <div className="avatar-wrapper">
        <div className="avatar-glow" />
        <div className="avatar-ring" />
        <img
          src={profileImg}
          alt={userData.name}
          className="profile-avatar"
          width={110}
          height={140}
          loading="eager"
        />
      </div>
      <div className="status-badge">
        <span className="status-dot" />
        <span className="typing-text">{displayText}<span className="typing-cursor">|</span></span>
      </div>
      <h1 className="profile-name">{userData.name}</h1>
      <p className="profile-title text-muted">{t.title}</p>
    </div>
  );
}

ProfileHeader.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default ProfileHeader;
