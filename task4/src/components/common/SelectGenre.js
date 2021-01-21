import React from "react";
import { Dropdown, SplitButton } from "react-bootstrap";

export const SelectGenre = () => (
  <div className="addMovieInput">
    <SplitButton title="Select Genre">
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Comedy</Dropdown.Item>
      <Dropdown.Item eventKey="3">Horror</Dropdown.Item>
    </SplitButton>
  </div>
);
