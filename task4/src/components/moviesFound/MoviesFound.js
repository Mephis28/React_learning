import React from "react";
import PropTypes from "prop-types";
import "./MoviesFound.css";

export const MoviesFound = ({ number }) => (
  <>
    <div className="moviesFoundNumber">{number}</div>
    <div className="moviesFound">movies found</div>
  </>
);

MoviesFound.propTypes = {
  number: PropTypes.string,
};
