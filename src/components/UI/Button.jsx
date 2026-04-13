import React from "react";
import PropTypes from "prop-types";

function Button({ children, onClick, className = "", type = "button", ...rest }) {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
