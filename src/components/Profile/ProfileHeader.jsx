import React, { useContext } from "react";
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

  return (
    <div className="profile-header">
      <img
        src={profileImg}
        alt={userData.name}
        className="profile-avatar"
        width={120}
        height={120}
        loading="eager"
      />
      <h1 className="profile-name">{userData.name}</h1>
      <p className="profile-title text-muted">{t.title}</p>
    </div>
  );
}

ProfileHeader.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default ProfileHeader;
