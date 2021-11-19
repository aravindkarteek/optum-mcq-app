import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";

const QuestionThree = ({ value, setValue }) => {
  return (
    <>
      <h3>Pick a data range where you can visit us.</h3>
      <RangePicker
        value={value}
        onChange={(dates) => setValue(dates)}
        defaultValue={[
          moment("2015/01/01", dateFormat),
          moment("2015/01/01", dateFormat),
        ]}
        format={dateFormat}
      />
    </>
  );
};

export default QuestionThree;
