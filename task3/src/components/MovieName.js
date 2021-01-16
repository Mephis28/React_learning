import React from "react";

export default function MovieName(props) {
  const { name } = props;
  return <div className="movieName">{name}</div>;
}
