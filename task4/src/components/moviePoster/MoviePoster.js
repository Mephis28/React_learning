import React from "react";
import PropTypes from "prop-types";
import "./MoviePoster.css";

export const MoviePoster = ({ source, alt }) => (
  <img src={source} alt={alt} className="poster" />
);

MoviePoster.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
};
