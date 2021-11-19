import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const QuestionFour = ({ value, setValue }) => {
  return (
    <>
      <h3>Do you want us to know anything before you meet us?</h3>
      <TextArea
        rows={4}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default QuestionFour;
