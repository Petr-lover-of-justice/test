import React from "react";
import { Game } from "./components/Game";
import { Result } from "./components/Result";
import "./index.scss";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function App() {
  const [step, setStep] = React.useState(0);
  const [current, setCurrent] = React.useState(0);

  const onClick = (id) => {
    if (id === step) {
      setCurrent(current + 1);
    }
    setStep(step + 1);
  };
  return (
    <div className="App">
      {step === questions.length ? (
        <Result step={questions} res={current} />
      ) : (
        <Game onClick={onClick} questions={questions} step={step} />
      )}
    </div>
  );
}

export default App;
