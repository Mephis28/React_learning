import React from "react";
import "./Main.css";

import { Menu } from "../menu/Menu";
import { SortBy } from "../sortBy/SortBy";
import { MoviesFound } from "../moviesFound/MoviesFound";
import { MoviesList } from "../moviesList/MoviesList";
import ErrorBoundary from "../ErrorBoundary";

export const Main = () => (
  <div className="Main">
    <Menu />
    <SortBy />
    <ErrorBoundary>
      <MoviesFound number="39" />
    </ErrorBoundary>
    <MoviesList />
  </div>
);
