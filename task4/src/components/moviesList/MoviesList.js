import React from "react";
import "./MoviesList.css";

import { Movie } from "../movie/Movie";

export const MoviesList = () => {
  const arr = [];
  const data = [
    {
      classCss: "movie",
      source: "../../src/assets/pictures/pulpFiction.jpeg",
      alt: "Pulp Fiction",
      name: "Pulp Fiction",
      genre: "Action & Adventure",
      year: "2004",
    },
    {
      classCss: "movie",
      source: "../../src/assets/pictures/batman.jpg",
      alt: "The Dark Knight Rises",
      name: "The Dark Knight Rises",
      genre: "Action & Thriller",
      year: "2012",
    },
    {
      classCss: "movie",
      source: "../../src/assets/pictures/djangoUnchained.jpg",
      alt: "Django Unchained",
      name: "Django Unchained",
      genre: "Western & Drama",
      year: "2012",
    },
    {
      classCss: "movie",
      source: "../../src/assets/pictures/fantasyIsland.jpg",
      alt: "Fantasy Island",
      name: "Fantasy Island",
      genre: "Horror & Thriller",
      year: "2020",
    },
    {
      classCss: "movie",
      source: "../../src/assets/pictures/reservoirDogs.jpg",
      alt: "Reservoir Dogs",
      name: "Reservoir Dogs",
      genre: "Crime & Drama",
      year: "1992",
    },
    {
      classCss: "movie",
      source: "../../src/assets/pictures/shaunOfTheDead.jpg",
      alt: "Shaun of the Dead",
      name: "Shaun of the Dead",
      genre: "Comedy & Horror",
      year: "2004",
    },
  ];

  const createMovieList = () => {
    for (let i = 0; i < data.length; i += 1) {
      arr.push(
        <Movie
          classCss={data[i].classCss}
          source={data[i].source}
          alt={data[i].alt}
          name={data[i].name}
          genre={data[i].genre}
          year={data[i].year}
        />
      );
    }
  };

  createMovieList();

  return <div className="moviesList">{arr}</div>;
};
