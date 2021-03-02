import React from "react";
import PropTypes from "prop-types";
import SearchIcon from "@material-ui/icons/Search";
import { noop } from "lodash";

import "./InfoAbMovie.less";

export const InfoAbMovie = ({
  dataAbOneMovie,
  isOpenDataAbOneMovie,
  onClickShutWindowInfoAbMovie,
}) => {
  const openOrShut = isOpenDataAbOneMovie ? "open" : "shut";
  return (
    <div className={`infoAbMovie ${openOrShut}`}>
      <div className="infoAbMovie_back" />
      <img
        src={dataAbOneMovie.source}
        alt={dataAbOneMovie.alt}
        className="infoAbMovie_img"
      />
      <div className="infoAbMovie_description">
        <div className="infoAbMovie_description_nameMovieAndRait">
          <h1>{dataAbOneMovie.name}</h1>
          <div className="infoAbMovie_description_nameMovieAndRait--rait">
            {dataAbOneMovie.rating}
          </div>
          <div className="infoAbMovie_description_nameMovieAndRait--oscarWin">
            {dataAbOneMovie.oscarWin}
          </div>
        </div>
        <div className="infoAbMovie_description--yearDurationMovie">
          <p>{dataAbOneMovie.year}</p>
          <p>{`${dataAbOneMovie.durationMovie} min`}</p>
        </div>
        <div className="infoAbMovie_description--text">
          {dataAbOneMovie.textDescription}
        </div>
      </div>
      <SearchIcon
        className="infoAbMovie--searchIcon"
        onClick={onClickShutWindowInfoAbMovie}
      />
    </div>
  );
};

InfoAbMovie.propTypes = {
  dataAbOneMovie: PropTypes.shape,
  onClickShutWindowInfoAbMovie: PropTypes.func,
  isOpenDataAbOneMovie: PropTypes.bool,
};

InfoAbMovie.defaultProps = {
  dataAbOneMovie: null,
  onClickShutWindowInfoAbMovie: noop,
  isOpenDataAbOneMovie: false,
};
