import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";

import "./Main.css";

import { Menu } from "../Menu/Menu";
import { SortBy } from "../SortBy/SortBy";
import MoviesFound from "../MoviesFound/MoviesFound";
import { MoviesList } from "../MoviesList/MoviesList";

export const Main = ({
  onClickOpen,
  onClickOpenWindowInfoAbMovie,
  onClickOpenDeleteMovie,
}) => (
  <div className="Main">
    <Menu />
    <SortBy />
    <MoviesFound />
    <MoviesList
      onClickOpen={onClickOpen}
      onClickOpenWindowInfoAbMovie={onClickOpenWindowInfoAbMovie}
      onClickOpenDeleteMovie={onClickOpenDeleteMovie}
    />
  </div>
);

Main.propTypes = {
  onClickOpen: PropTypes.func,
  onClickOpenWindowInfoAbMovie: PropTypes.func,
  onClickOpenDeleteMovie: PropTypes.func,
};

Main.defaultProps = {
  onClickOpen: noop,
  onClickOpenWindowInfoAbMovie: noop,
  onClickOpenDeleteMovie: noop,
};
