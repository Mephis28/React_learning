import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";

import "./Movie.css";

import { MoviePoster } from "../MoviePoster/MoviePoster";
import { MovieSubscribe } from "../MovieSubscribe/MovieSubscribe";
import { MovieMenuDots } from "../MovieMenuDots/MovieMenuDots";

export const Movie = ({
  classCss,
  source,
  alt,
  name,
  genre,
  year,
  onClickOpen,
}) => (
  <div className="movie">
    <MoviePoster source={source} alt={alt} />
    <MovieMenuDots onClickOpen={onClickOpen} />
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
  onClickOpen: PropTypes.func,
};

Movie.defaultProps = {
  classCss: "",
  source: "",
  alt: "",
  name: "",
  genre: "",
  year: "",
  onClickOpen: noop,
};
