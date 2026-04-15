import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { LangContext } from "../../App";
import uz from "../../locales/uz";
import en from "../../locales/en";
import ru from "../../locales/ru";

const locales = { uz, en, ru };

const PORTFOLIO_PASSWORD = "dev";

function ProfileContact({ userData }) {
  const { lang } = useContext(LangContext);
  const t = locales[lang] || uz;

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    const input = prompt("Parolni kiriting:");
    if (input === null) return;
    if (input === PORTFOLIO_PASSWORD) {
      window.open(userData.portfolioUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Sizga ruxsat yo'q!");
      handlePortfolioClick(e);
    }
  };

  return (
    <div className="profile-contact">
      <a href={`mailto:${userData.email}`} className="contact-btn contact-btn--email">
        <div className="contact-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
        </div>
        <div className="contact-text">
          <span className="contact-label">{t.email}</span>
          <span className="contact-value">{userData.email}</span>
        </div>
      </a>
      <a href={`tel:${userData.phone}`} className="contact-btn contact-btn--phone">
        <div className="contact-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.88.36 1.77.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c1.04.34 1.93.57 2.81.7A2 2 0 0122 16.92z"/></svg>
        </div>
        <div className="contact-text">
          <span className="contact-label">{t.phone}</span>
          <span className="contact-value">{userData.phone}</span>
        </div>
      </a>
      <a
        href={`https://yandex.com/maps/?text=${encodeURIComponent(userData.location)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn contact-btn--location"
      >
        <div className="contact-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div className="contact-text">
          <span className="contact-label">{t.location}</span>
          <span className="contact-value">{userData.location}</span>
        </div>
      </a>
      <a href={userData.portfolioUrl} className="contact-btn contact-btn--portfolio" onClick={handlePortfolioClick}>
        <div className="contact-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </div>
        <div className="contact-text">
          <span className="contact-label">{t.portfolio}</span>
          <span className="contact-value">{t.viewPortfolio}</span>
        </div>
      </a>
    </div>
  );
}

ProfileContact.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default ProfileContact;
