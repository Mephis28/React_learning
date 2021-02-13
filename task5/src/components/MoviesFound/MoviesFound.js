import React from "react";
import PropTypes from "prop-types";
import "./MoviesFound.css";

export default class MoviesFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 39,
    };
  }

  render() {
    const { number } = this.state;
    return (
      <>
        <div className="moviesFoundNumber">{number}</div>
        <div className="moviesFound">movies found</div>
      </>
    );
  }
}
