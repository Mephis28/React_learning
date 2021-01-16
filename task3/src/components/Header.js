import React from "react";

import AddMovie from "./AddMovie";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="header">
      <div className="headerBackGround" />
      <AddMovie />
      <SearchButton />
      <SearchInput />
    </header>
  );
}
