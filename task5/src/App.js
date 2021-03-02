import React, { useCallback, useState } from "react";
import "./App.less";

import { MovieListMockData } from "./constant/MovieListMockData";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { AddMovie } from "./components/ModalWindows/AddMovie/AddMovie";
import { EditMovie } from "./components/ModalWindows/EditMovie/EditMovie";
import { InfoAbMovie } from "./components/InfoAbMovie/InfoAbMovie";

export const App = () => {
  const [isOpenAddMovie, setIsOpenAddMovie] = useState(false);
  const [isOpenEditMovie, setIsOpenEditMovie] = useState(false);
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

  const handleClickOpenWindowInfoAbMovie = useCallback(
    (event) => {
      setisOpenDataAbOneMovie(true);
      setDataAbOneMovie(
        MovieListMockData.find((item) => {
          if (event.target.id === item.id) {
            return item;
          }
          return null;
        })
      );
    },
    [setisOpenDataAbOneMovie, setDataAbOneMovie]
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
    </div>
  );
};
