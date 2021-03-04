import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";

import "./MoviePoster.css";

export const MoviePoster = ({
  source,
  alt,
  id,
  onClickOpenWindowInfoAbMovie,
}) => (
  <button
    onClick={onClickOpenWindowInfoAbMovie}
    type="button"
    className="moviePoster"
  >
    <img src={source} alt={alt} id={id} className="moviePoster_img" />
  </button>
);

MoviePoster.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
  onClickOpenWindowInfoAbMovie: PropTypes.func,
};

MoviePoster.defaultProps = {
  source: "",
  alt: "",
  id: "",
  onClickOpenWindowInfoAbMovie: noop,
};
