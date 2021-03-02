import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { noop } from "lodash";

import "./AddMovie.less";

import { Cancel } from "../../Common/Cancel/Cancel";
import { TextInput } from "../../Common/TextInput/TextInput";
import { SelectDate } from "../../Common/SelectDate/SelectDate";
import SelectGenre from "../../Common/SelectGenre/SelectGenre";

export const AddMovie = ({ isOpenAddMovie, onClickShut }) => (
  <Modal
    className="modal-window-add-movie"
    show={isOpenAddMovie}
    onHide={onClickShut}
    dialogClassName="modalWidth"
  >
    <div className="addMovieWindow">
      <Cancel onClick={onClickShut} />
      <h1>ADD MOVIE</h1>
      <h2>
        TITLE
        <TextInput
          className="addMovieInput"
          type="text"
          placeholder="Title here"
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
          placeholder="Movie Url here"
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
          placeholder="Overview here"
        />
      </h2>
      <h2>
        RUNTIME
        <TextInput
          className="addMovieInput"
          type="text"
          placeholder="Runtime here"
        />
      </h2>
      <div className="buttons">
        <button type="submit" className="reset">
          RESET
        </button>
        <button type="submit" className="submit">
          SUBMIT
        </button>
      </div>
    </div>
  </Modal>
);

AddMovie.propTypes = {
  isOpenAddMovie: PropTypes.bool,
  onClickShut: PropTypes.func,
};

AddMovie.defaultProps = {
  isOpenAddMovie: false,
  onClickShut: noop,
};
