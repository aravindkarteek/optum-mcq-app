import React, { useState } from "react";
import { Steps, Button, message } from "antd";
import Welcome from "./components/Welcome";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import QuestionThree from "./components/QuestionThree";
import QuestionFour from "./components/QuestionFour";
import Summary from "./components/Summary";
import "antd/dist/antd.css";
import "./App.css";

const { Step } = Steps;

function App() {
  const [current, setCurrent] = useState(0);
  const [q1Data, setQ1Data] = useState(0);
  const [q2Data, setQ2Data] = useState(0);
  const [q3Data, setQ3Data] = useState(0);
  const [q4Data, setQ4Data] = useState("");
  const steps = [
    {
      title: "Welcome",
      content: <Welcome />,
    },
    {
      title: "Question 1",
      content: <QuestionOne value={q1Data} setValue={setQ1Data} />,
    },
    {
      title: "Question 2",
      content: <QuestionTwo value={q2Data} setValue={setQ2Data} />,
    },
    {
      title: "Question 3",
      content: <QuestionThree value={q3Data} setValue={setQ3Data} />,
    },
    {
      title: "Question 4",
      content: <QuestionFour value={q4Data} setValue={setQ4Data} />,
    },
    {
      title: "Summary",
      content: <Summary q1={q1Data} q2={q2Data} q3={q3Data} q4={q4Data} />,
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div className="container m-5 p-5 h-50">
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content m-5 ">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button size="large" type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            size="large"
            type="primary"
            onClick={() => message.success("Thanks for submitting")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            size="large"
            style={{ margin: "0 8px" }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
