import React from "react";
import PropTypes from "prop-types";
import { noop } from "lodash";

import "./Header.css";
import { TextInput } from "../Common/TextInput/TextInput";

export const Header = ({ onClickOpen }) => (
  <header className="header">
    <div className="headerBackGround" />
    <button type="submit" className="addMovie" onClick={onClickOpen}>
      +ADD MOVIE
    </button>
    <button type="submit" className="search">
      SEARCH
    </button>
    <TextInput
      className="input"
      type="text"
      placeholder="What do you want to watch?"
    />
  </header>
);

Header.propTypes = {
  onClickOpen: PropTypes.func,
};

Header.defaultProps = {
  onClickOpen: noop,
};
