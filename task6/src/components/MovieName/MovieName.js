import React from "react";
import PropTypes from "prop-types";
import "./MovieName.css";

export const MovieName = ({ name }) => <div className="movieName">{name}</div>;

MovieName.propTypes = {
  name: PropTypes.string,
};

MovieName.defaultProps = {
  name: "",
};
