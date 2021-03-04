import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";
import { Dropdown } from "react-bootstrap";

import "./MovieMenuDots.css";

export const MovieMenuDots = ({ onClickOpen, onClickOpenDeleteMovie }) => (
  <Dropdown className="dotsMenu">
    <Dropdown.Toggle
      variant="success"
      id="dropdown-basic"
      className="dotsMenuButton"
    >
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={onClickOpen}>Edit</Dropdown.Item>
      <Dropdown.Item onClick={onClickOpenDeleteMovie}>Delete</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

MovieMenuDots.propTypes = {
  onClickOpen: PropTypes.func,
  onClickOpenDeleteMovie: PropTypes.func,
};

MovieMenuDots.defaultProps = {
  onClickOpen: noop,
  onClickOpenDeleteMovie: noop,
};
