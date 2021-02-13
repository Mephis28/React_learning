import React from "react";
import "./App.less";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { AddMovie } from "./components/ModalWindows/AddMovie/AddMovie";
import { EditMovie } from "./components/ModalWindows/EditMovie/EditMovie";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAddMovie: false,
      isOpenEditMovie: false,
    };
  }

  handleClickOpenAddMovie = () => {
    this.setState({ isOpenAddMovie: true });
  };

  handleClickCancelAddMovie = () => {
    this.setState({ isOpenAddMovie: false });
  };

  handleClickOpenEditMovie = () => {
    this.setState({ isOpenEditMovie: true });
  };

  handleClickCancelEditMovie = () => {
    this.setState({ isOpenEditMovie: false });
  };

  render() {
    const { isOpenAddMovie, isOpenEditMovie } = this.state;
    return (
      <div className="App" id="App">
        <Header onClickOpen={this.handleClickOpenAddMovie} />
        <Main onClickOpen={this.handleClickOpenEditMovie} />
        <AddMovie
          onClickCancel={this.handleClickCancelAddMovie}
          isOpenAddMovie={isOpenAddMovie}
        />
        <EditMovie
          onClickCancel={this.handleClickCancelEditMovie}
          isOpenEditMovie={isOpenEditMovie}
        />
      </div>
    );
  }
}
