import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { noop } from "lodash";

import "./EditMovie.less";

import ErrorBoundary from "../../ErrorBoundary";
import { Cancel } from "../../Common/Cancel/Cancel";
import { TextInput } from "../../Common/TextInput/TextInput";
import { SelectDate } from "../../Common/SelectDate/SelectDate";
import SelectGenre from "../../Common/SelectGenre/SelectGenre";

export const EditMovie = ({ isOpenEditMovie, onClickShut }) => {
  const trigger = isOpenEditMovie ? "open" : "shut";
  return (
    <Modal
      className="modal-window-edit-movie"
      show={isOpenEditMovie}
      onHide={onClickShut}
      dialogClassName="modalWidth"
    >
      <div className={`editMovieWindow ${trigger}`}>
        <Cancel onClick={onClickShut} />
        <h1>EDIT MOVIE</h1>
        <h2>
          MOVIE ID
          <TextInput
            className="editMovieInput"
            type="text"
            placeholder="Movie ID here"
          />
        </h2>
        <h2>
          TITLE
          <TextInput
            className="editMovieInput"
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
            className="editMovieInput"
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
            className="editMovieInput"
            type="text"
            placeholder="Overview here"
          />
        </h2>
        <h2>
          RUNTIME
          <TextInput
            className="editMovieInput"
            type="text"
            placeholder="Runtime here"
          />
        </h2>
        <div className="buttons">
          <button type="submit" className="reset">
            RESET
          </button>
          <button type="submit" className="submit">
            SAVE
          </button>
        </div>
      </div>
    </Modal>
  );
};

EditMovie.propTypes = {
  isOpenEditMovie: PropTypes.bool,
  onClickShut: PropTypes.func,
};

EditMovie.defaultProps = {
  isOpenEditMovie: false,
  onClickShut: noop,
};
