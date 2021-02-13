import React from "react";
import PropTypes from "prop-types";
import "./MovieSubscribe.css";

import { MovieName } from "../MovieName/MovieName";
import { MovieGenre } from "../MovieGenre/MovieGenre";
import { MovieYearRelease } from "../MovieYearRelease/MovieYearRelease";

export const MovieSubscribe = ({ name, genre, year }) => (
  <div className="subscribe">
    <MovieName name={name} />
    <MovieGenre genre={genre} />
    <MovieYearRelease year={year} />
  </div>
);

MovieSubscribe.propTypes = {
  name: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
};

MovieSubscribe.defaultProps = {
  name: "",
  genre: "",
  year: "",
};
