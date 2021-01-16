import React from "react";

export default function MovieGenre(props) {
  const { genre } = props;
  return <div className="movieGenre">{genre}</div>;
}
