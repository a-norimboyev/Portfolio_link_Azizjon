import React, { useState, useContext } from "react";
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

  return (
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
  );
}

Profile.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default Profile;
