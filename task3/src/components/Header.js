import React from "react";

import AddMovie from "./AddMovie";
import SearchButton from "./SearchButton";
import TextInput from "./common/TextInput";

export default function Header() {
  return (
    <header className="header">
      <div className="headerBackGround" />
      <AddMovie />
      <SearchButton />
      <TextInput />
    </header>
  );
}
