import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./SelectDate.css";

export const SelectDate = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM/yyyy"
      showMonthYearPicker
      showFullMonthYearPicker
      placeholderText="Select Date"
    />
  );
};
