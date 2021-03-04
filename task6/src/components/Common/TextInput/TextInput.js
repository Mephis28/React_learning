import React from "react";
import PropTypes from "prop-types";
import "./TextInput.css";

export const TextInput = ({ className, placeholder, type }) => (
  <input className={className} type={type} placeholder={placeholder} />
);

TextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  className: "",
  placeholder: "",
  type: "",
};
