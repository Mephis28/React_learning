import React from "react";
import PropTypes from "prop-types";
import "./MovieGenre.css";

export const MovieGenre = ({ genre }) => (
  <div className="movieGenre">{genre}</div>
);

MovieGenre.propTypes = {
  genre: PropTypes.string,
};

MovieGenre.defaultProps = {
  genre: "",
};
