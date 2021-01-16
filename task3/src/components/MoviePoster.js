import React from "react";

export default function MoviePoster(props) {
  const { source, alt } = props;
  return <img src={source} alt={alt} className="poster" />;
}
