import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";

import { MovieListMockData } from "../../constant/MovieListMockData";
import "./MoviesList.css";

import { Movie } from "../Movie/Movie";

export const MoviesList = ({ onClickOpen, onClickOpenWindowInfoAbMovie }) => {
  const arr = [];
  const createMovieList = () => {
    MovieListMockData.forEach((item) => {
      arr.push(
        <Movie
          key={`key ${item.id}`}
          classCss={item.classCss}
          source={item.source}
          alt={item.alt}
          name={item.name}
          genre={item.genre}
          year={item.year}
          id={item.id}
          onClickOpen={onClickOpen}
          onClickOpenWindowInfoAbMovie={onClickOpenWindowInfoAbMovie}
        />
      );
    });
  };

  createMovieList();

  return <div className="moviesList">{arr}</div>;
};

MoviesList.propTypes = {
  onClickOpen: PropTypes.func,
  onClickOpenWindowInfoAbMovie: PropTypes.func,
};

MoviesList.defaultProps = {
  onClickOpen: noop,
  onClickOpenWindowInfoAbMovie: noop,
};
