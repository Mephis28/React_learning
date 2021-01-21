import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import AddMovie from "./components/modal_windows/add_movie/AddMovie";

export default function App() {
  return (
    <div className="App" id="App">
      <Header />
      <Main />
      <AddMovie />
    </div>
  );
}
