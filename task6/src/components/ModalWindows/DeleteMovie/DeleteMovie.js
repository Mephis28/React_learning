import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { noop } from "lodash";

import "./DeleteMovie.less";

import { Cancel } from "../../Common/Cancel/Cancel";

export const DeleteMovie = ({ isOpenDeleteMovie, onClickShut }) => {
  const trigger = isOpenDeleteMovie ? "open" : "shut";
  return (
    <Modal
      className="modal-window-delete-movie"
      show={isOpenDeleteMovie}
      onHide={onClickShut}
      dialogClassName="modalWidth"
    >
      <div className={`deleteMovieWindow ${trigger}`}>
        <Cancel onClick={onClickShut} />
        <h1 className="deleteMovieWindow_h1">DELETE MOVIE</h1>
        <p className="deleteMovieWindow_p">
          Are you sure you want to delete this movie
        </p>
        <button type="button" className="deleteMovieWindow_button">
          CONFIRM
        </button>
      </div>
    </Modal>
  );
};
