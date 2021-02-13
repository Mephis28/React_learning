import React from "react";
import PropTypes from "prop-types";
import "./MovieYearRelease.css";

export const MovieYearRelease = ({ year }) => (
  <div className="movieYearRelease">{year}</div>
);

MovieYearRelease.propTypes = {
  year: PropTypes.string,
};

MovieYearRelease.defaultProps = {
  year: "",
};
