import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";

import { MovieListMockData } from "../../constant/MovieListMockData";
import "./MoviesList.css";

import { Movie } from "../Movie/Movie";

export const MoviesList = ({ onClickOpen }) => {
  const arr = [];
  const createMovieList = () => {
    MovieListMockData.forEach((item) => {
      arr.push(
        <Movie
          classCss={item.classCss}
          source={item.source}
          alt={item.alt}
          name={item.name}
          genre={item.genre}
          year={item.year}
          onClickOpen={onClickOpen}
        />
      );
    });
  };

  createMovieList();

  return <div className="moviesList">{arr}</div>;
};

MoviesList.propTypes = {
  onClickOpen: PropTypes.func,
};

MoviesList.defaultProps = {
  onClickOpen: noop,
};
