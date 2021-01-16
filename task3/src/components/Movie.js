import React from "react";
import PropTypes from "prop-types";

import MoviePoster from "./MoviePoster";
import MovieSubscribe from "./MovieSubscribe";
import MovieMenuDots from "./MovieMenuDots";

export default function Movie(props) {
  const { classCss, source, alt, name, genre, year } = props;
  return (
    <div className={classCss}>
      <MoviePoster source={source} alt={alt} />
      <MovieMenuDots />
      <MovieSubscribe name={name} genre={genre} year={year} />
    </div>
  );
}

Movie.propTypes = {
  classCss: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
  name: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.string,
};
