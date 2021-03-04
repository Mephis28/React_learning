import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import "./App.less";

import { MovieListMockData } from "./constant/MovieListMockData";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { AddMovie } from "./components/ModalWindows/AddMovie/AddMovie";
import { EditMovie } from "./components/ModalWindows/EditMovie/EditMovie";
import { InfoAbMovie } from "./components/InfoAbMovie/InfoAbMovie";
import { DeleteMovie } from "./components/ModalWindows/DeleteMovie/DeleteMovie";

const App = ({ dataForMovies }) => {
  const [isOpenAddMovie, setIsOpenAddMovie] = useState(false);
  const [isOpenEditMovie, setIsOpenEditMovie] = useState(false);
  const [isOpenDeleteMovie, setIsOpenDeleteMovie] = useState(false);
  const [isOpenDataAbOneMovie, setisOpenDataAbOneMovie] = useState(false);
  const [dataAbOneMovie, setDataAbOneMovie] = useState({});

  const handleClickOpenAddMovie = useCallback(() => {
    setIsOpenAddMovie(true);
  }, [setIsOpenAddMovie]);
  const handleClickShutAddMovie = useCallback(() => {
    setIsOpenAddMovie(false);
  }, [setIsOpenAddMovie]);

  const handleClickOpenEditMovie = useCallback(() => {
    setIsOpenEditMovie(true);
  }, [setIsOpenEditMovie]);
  const handleClickShutEditMovie = useCallback(() => {
    setIsOpenEditMovie(false);
  }, [setIsOpenEditMovie]);

  const handleClickOpenDeleteMovie = useCallback(() => {
    setIsOpenDeleteMovie(true);
  }, [setIsOpenDeleteMovie]);
  const handleClickShutDeleteMovie = useCallback(() => {
    setIsOpenDeleteMovie(false);
  }, [setIsOpenDeleteMovie]);

  const handleClickOpenWindowInfoAbMovie = useCallback(
    (event) => {
      setisOpenDataAbOneMovie(true);
      setDataAbOneMovie(
        dataForMovies.find((item) => {
          if (event.target.id === item.id) {
            return item;
          }
          return null;
        })
      );
    },
    [setisOpenDataAbOneMovie, setDataAbOneMovie, dataForMovies]
  );

  const handleClickShutWindowInfoAbMovie = useCallback(() => {
    setisOpenDataAbOneMovie(false);
  }, [setisOpenDataAbOneMovie]);

  return (
    <div className="App" id="App">
      <Header
        onClickOpen={handleClickOpenAddMovie}
        isOpenHeader={!isOpenDataAbOneMovie}
      />
      <InfoAbMovie
        dataAbOneMovie={dataAbOneMovie}
        isOpenDataAbOneMovie={isOpenDataAbOneMovie}
        onClickShutWindowInfoAbMovie={handleClickShutWindowInfoAbMovie}
      />
      <Main
        onClickOpen={handleClickOpenEditMovie}
        onClickOpenDeleteMovie={handleClickOpenDeleteMovie}
        onClickOpenWindowInfoAbMovie={handleClickOpenWindowInfoAbMovie}
      />
      <AddMovie
        onClickShut={handleClickShutAddMovie}
        isOpenAddMovie={isOpenAddMovie}
      />
      <EditMovie
        onClickShut={handleClickShutEditMovie}
        isOpenEditMovie={isOpenEditMovie}
      />
      <DeleteMovie
        onClickShut={handleClickShutDeleteMovie}
        isOpenDeleteMovie={isOpenDeleteMovie}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    dataForMovies: state.dataForMovies,
  };
};

export default connect(mapStateToProps)(App);
