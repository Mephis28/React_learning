import React from "react";

import MovieName from "./MovieName";
import MovieGenre from "./MovieGenre";
import MovieYearRelease from "./MovieYearRelease";

export default function MovieSubscribe(props) {
  const { name, genre, year } = props;
  return (
    <div className="subscribe">
      <MovieName name={name} />
      <MovieGenre genre={genre} />
      <MovieYearRelease year={year} />
    </div>
  );
}
