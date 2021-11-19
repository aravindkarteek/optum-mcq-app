import React from "react";
import { QUESTION_ONE } from "./constants";

const Summary = ({ q1 }) => {
  return (
    <div className="summary">
      <h4>{QUESTION_ONE.text}</h4>
      {q1}
    </div>
  );
};

export default Summary;
