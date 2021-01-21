import React from "react";
import "./App.css";

import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { AddMovie } from "./components/modal_windows/add_movie/AddMovie";

export default function App() {
  return (
    <div className="App" id="App">
      <Header />
      <Main />
      <AddMovie />
    </div>
  );
}
