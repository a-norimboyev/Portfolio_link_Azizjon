import React, { useState, useContext, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { LangContext } from "../../App";
import { Card } from "../UI";
import ProfileHeader from "./ProfileHeader";
import ProfileContact from "./ProfileContact";
import ProfileLinks from "./ProfileLinks";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import InfoModal from "./InfoModal";
import uz from "../../locales/uz";
import en from "../../locales/en";
import ru from "../../locales/ru";
import "./Profile.css";

const locales = { uz, en, ru };

function Profile({ userData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { lang } = useContext(LangContext);
  const t = locales[lang] || uz;
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)" }}
    >
      <Card className="profile-card">
        <div className="profile-toolbar">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <ProfileHeader userData={userData} />
        <ProfileContact userData={userData} />
        <ProfileLinks userData={userData} />

        <div className="profile-actions">
          <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
            {t.moreInfo}
          </button>
        </div>

        <InfoModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          userData={userData}
        />
      </Card>
    </div>
  );
}

Profile.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default Profile;
