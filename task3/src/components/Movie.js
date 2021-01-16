import React from "react";

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
