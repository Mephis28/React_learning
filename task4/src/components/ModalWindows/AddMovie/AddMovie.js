import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { noop } from "lodash";

import "./AddMovie.less";

import { Cancel } from "../../Common/Cancel/Cancel";
import { TextInput } from "../../Common/TextInput/TextInput";
import { SelectDate } from "../../Common/SelectDate/SelectDate";
import SelectGenre from "../../Common/SelectGenre/SelectGenre";

export const AddMovie = ({ isOpenAddMovie, onClickCancel }) => (
  <Modal
    className="modal-window-add-movie"
    size="lg"
    show={isOpenAddMovie}
    onHide={onClickCancel}
    aria-labelledby="example-modal-sizes-title-lg"
  >
    <div className="addMovieWindow">
      <Cancel onClick={onClickCancel} />
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
  onClickCancel: PropTypes.func,
};

AddMovie.defaultProps = {
  isOpenAddMovie: false,
  onClickCancel: noop,
};
