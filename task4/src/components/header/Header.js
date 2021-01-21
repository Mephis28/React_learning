import React from "react";
import "./Header.css";

import { TextInput } from "../common/textInput/TextInput";

export const Header = () => (
  <header className="header">
    <div className="headerBackGround" />
    <button type="submit" className="AddMovie">
      +ADD MOVIE
    </button>
    <button type="submit" className="Search">
      SEARCH
    </button>
    <TextInput
      className="input"
      type="text"
      placeholder="What do you want to watch?"
    />
  </header>
);
