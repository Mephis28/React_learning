import React from "react";

export default function FoundMovies(props) {
  const { number } = props;
  return (
    <>
      <div className="moviesFoundNumber">{number}</div>
      <div className="moviesFound">movies found</div>
    </>
  );
}
