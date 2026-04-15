import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LangContext } from "../../App";
import { Modal } from "../UI";
import uz from "../../locales/uz";
import en from "../../locales/en";
import ru from "../../locales/ru";

const locales = { uz, en, ru };

function InfoModal({ open, onClose, userData }) {
  const { lang } = useContext(LangContext);
  const t = locales[lang] || uz;

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ 
          fontSize: "1.4rem", 
          fontWeight: 800, 
          marginBottom: 16,
          background: "var(--gradient-main)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>{t.info}</h2>
        <p style={{ 
          color: "var(--text-secondary)", 
          lineHeight: 1.7, 
          marginBottom: 12,
          fontSize: "0.95rem"
        }}>{t.description}</p>
        <p style={{
          color: "var(--muted)",
          fontSize: "0.85rem",
          marginBottom: 24
        }}>{userData.email}</p>
        <button className="btn btn-primary" onClick={onClose}>
          {t.close}
        </button>
      </div>
    </Modal>
  );
}

InfoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
};

export default InfoModal;
