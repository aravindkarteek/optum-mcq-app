import React from "react";
import { Radio, Space } from "antd";
import { QUESTION_ONE } from "./constants";

const QuestionOne = ({ value, setValue }) => {
  const { text, options } = QUESTION_ONE;
  return (
    <>
      <h3>{text}</h3>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Space direction="vertical">
          {options.map((option) => (
            <Radio value={option.value}>{option.label}</Radio>
          ))}
        </Space>
      </Radio.Group>
    </>
  );
};

export default QuestionOne;
