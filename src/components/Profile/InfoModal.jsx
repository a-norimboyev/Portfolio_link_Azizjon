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
      <h2>{t.info}</h2>
      <p>{t.description}</p>
      <p className="text-muted">{userData.email}</p>
      <button className="btn btn-primary" onClick={onClose}>
        {t.close}
      </button>
    </Modal>
  );
}

InfoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
};

export default InfoModal;
