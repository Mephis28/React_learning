import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";
import { connect } from "react-redux";

import "./MoviesList.css";
import { MovieListMockData } from "../../constant/MovieListMockData";
import { Movie } from "../Movie/Movie";

const MoviesList = ({
  onClickOpen,
  onClickOpenWindowInfoAbMovie,
  onClickOpenDeleteMovie,
}) => {
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
          onClickOpenDeleteMovie={onClickOpenDeleteMovie}
        />
      );
    });
  };

  createMovieList();

  return <div className="moviesList">{arr}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, null)(MoviesList);

MoviesList.propTypes = {
  onClickOpen: PropTypes.func,
  onClickOpenWindowInfoAbMovie: PropTypes.func,
  onClickOpenDeleteMovie: PropTypes.func,
};

MoviesList.defaultProps = {
  onClickOpen: noop,
  onClickOpenWindowInfoAbMovie: noop,
  onClickOpenDeleteMovie: noop,
};
