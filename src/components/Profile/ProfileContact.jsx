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
      <div className="contact-item">
        <span className="contact-label text-muted">{t.email}</span>
        <a href={`mailto:${userData.email}`}>{userData.email}</a>
      </div>
      <div className="contact-item">
        <span className="contact-label text-muted">{t.phone}</span>
        <a href={`tel:${userData.phone}`}>{userData.phone}</a>
      </div>
      <div className="contact-item">
        <span className="contact-label text-muted">{t.location}</span>
        <span>{userData.location}</span>
      </div>
      <div className="contact-item">
        <span className="contact-label text-muted">{t.portfolio}</span>
        <a href={userData.portfolioUrl} onClick={handlePortfolioClick}>
          {t.viewPortfolio}
        </a>
      </div>
    </div>
  );
}

ProfileContact.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default ProfileContact;
