import React from "react";
import "./Result.css";

const Result = ({ text }) => {
  return (
    <div className="result">
      <span>{text} </span>
      is the city you've choosen
    </div>
  );
};

export default Result;
