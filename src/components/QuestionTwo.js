import React from "react";
import { Slider } from "antd";

const QuestionTwo = ({ value, setValue }) => {
  return (
    <>
      <h3>How many times in a day do you eat?</h3>
      <Slider
        min={1}
        max={5}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default QuestionTwo;
