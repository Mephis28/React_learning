import React from "react";

import Menu from "./Menu";
import SortBy from "./SortBy";
import FoundMovies from "./FoundMovies";
import MoviesList from "./MoviesList";

export default function Main() {
  return (
    <div className="Main">
      <Menu />
      <SortBy />
      <FoundMovies number="39" />
      <MoviesList />
    </div>
  );
}
