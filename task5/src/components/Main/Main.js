import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";

import "./Main.css";

import { Menu } from "../Menu/Menu";
import { SortBy } from "../SortBy/SortBy";
import MoviesFound from "../MoviesFound/MoviesFound";
import { MoviesList } from "../MoviesList/MoviesList";

export const Main = ({ onClickOpen }) => (
  <div className="Main">
    <Menu />
    <SortBy />
    <MoviesFound />
    <MoviesList onClickOpen={onClickOpen} />
  </div>
);

Main.propTypes = {
  onClickOpen: PropTypes.func,
};

Main.defaultProps = {
  onClickOpen: noop,
};
