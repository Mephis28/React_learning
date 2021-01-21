import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

import { MoviePoster } from "../moviePoster/MoviePoster";
import { MovieSubscribe } from "../movieSubscribe/MovieSubscribe";
import { MovieMenuDots } from "../movieMenuDots/MovieMenuDots";

export const Movie = ({ classCss, source, alt, name, genre, year }) => (
  <div className="movie">
    <MoviePoster source={source} alt={alt} />
    <MovieMenuDots />
    <MovieSubscribe name={name} genre={genre} year={year} />
  </div>
);

Movie.propTypes = {
  classCss: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
};
