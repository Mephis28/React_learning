import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";

import "./Cancel.css";

export const Cancel = ({ onClick }) => (
  <button type="button" className="cancel" onClick={onClick}>
    <div className="line1" />
    <div className="line2" />
  </button>
);

Cancel.propTypes = {
  onClick: PropTypes.func,
};

Cancel.defaultProps = {
  onClick: noop,
};
