import React from "react";
import "./AddMovie.css";

import { Cancel } from "../../common/cancel/Cancel";
import { TextInput } from "../../common/textInput/TextInput";
import { SelectDate } from "../../common/SelectDate";
import { SelectGenre } from "../../common/SelectGenre";

export const AddMovie = () => (
  <div className="addMovieWindow">
    <Cancel />
    <h1>ADD MOVIE</h1>
    <h2>
      TITLE
      <TextInput
        className="addMovieInput"
        type="text"
        placeholder="Please, enter Title"
      />
    </h2>
    <h2>
      RELEASE DATE
      <SelectDate />
    </h2>
    <h2>
      MOVIE URL
      <TextInput
        className="addMovieInput"
        type="text"
        placeholder="Please, enter Movie Url"
      />
    </h2>
    <h2>
      GENRE
      <SelectGenre />
    </h2>
    <h2>
      OVERVIEW
      <TextInput
        className="addMovieInput"
        type="text"
        placeholder="Please, enter Overview"
      />
    </h2>
    <h2>
      RUNTIME
      <TextInput
        className="addMovieInput"
        type="text"
        placeholder="Please, enter Please, enter Runtime"
      />
    </h2>
  </div>
);
