import { MovieListMockData } from "../constant/MovieListMockData";

const initialState = {
  dataAboutMovies: MovieListMockData,
};

export const simpleReducer = (state = initialState, action) => state;
