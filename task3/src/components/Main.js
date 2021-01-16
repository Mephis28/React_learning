import React from "react";

import Menu from "./Menu";
import SortBy from "./SortBy";
import FoundMovies from "./FoundMovies";
import MoviesList from "./MoviesList";
import ErrorBoundary from "./ErrorBoundary";

export default function Main() {
  return (
    <div className="Main">
      <Menu />
      <SortBy />
      <ErrorBoundary>
        <FoundMovies number="39" />
      </ErrorBoundary>
      <MoviesList />
    </div>
  );
}
