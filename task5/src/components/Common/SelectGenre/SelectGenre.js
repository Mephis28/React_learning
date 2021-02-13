import React from "react";
import MultiCheckboxSelect from "react-multi-checkbox-select";
import "react-multi-checkbox-select/lib/multi-checkbox-select.css";
import "./SelectGenre.css";

export default class SelectGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMultiCheckboxesSelectValues: [],
      genreList: [
        { value: 1, label: "Comedy" },
        { value: 2, label: "Drama" },
        { value: 3, label: "Horror" },
      ],
    };
  }

  handleChange(name, isChecked, selectedValue, selectedValues) {
    this.setState({
      selectedMultiCheckboxesSelectValues: selectedValues,
    });
  }

  handleRemove(name, valueToBeRemoved, selectedValuesAfterRemoving) {
    this.setState({
      selectedMultiCheckboxesSelectValues: selectedValuesAfterRemoving,
    });
  }

  render() {
    const { selectedMultiCheckboxesSelectValues, genreList } = this.state;
    return (
      <MultiCheckboxSelect
        name="multi_checkboxes_select"
        onChange={this.handleChange}
        onRemove={this.handleRemove}
        onClose={() => {}}
        onOpen={() => {}}
        values={selectedMultiCheckboxesSelectValues}
        defaultText="Select genre"
        options={genreList}
      />
    );
  }
}
