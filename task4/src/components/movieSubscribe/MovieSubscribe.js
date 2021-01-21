import React from "react";
import PropTypes from "prop-types";
import "./MovieSubscribe.css";

import { MovieName } from "../movieName/MovieName";
import { MovieGenre } from "../movieGenre/MovieGenre";
import { MovieYearRelease } from "../movieYearRelease/MovieYearRelease";

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
