import React from "react";
export function Game({ onClick, questions,step }) {
  const percentages = Math.round((step / questions.length) * 100);
    // const percentages = Math.round(step);
  // console.log(current, questions.length)
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentages}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{questions[step].title}</h1>
      <ul>
        {questions[step].variants.map((item, index) => {
          return (
            <li key={index} onClick={() => onClick(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
