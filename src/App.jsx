import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const [lastIsOperator, setLastIsOperator] = useState(false);

  const handleClick = (value) => {
    // Birden fazla işlem tuşuna basmayı engelle
    if (["+", "-", "*", "/"].includes(value) && lastIsOperator) {
      return;
    }

    // İşlem tuşuna basıldığında true, sayıya basıldığında false ayarla
    setLastIsOperator(["+", "-", "*", "/"].includes(value));

    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
      setInput(eval(input).toString());
      setLastIsOperator(false);
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult(0);
    setLastIsOperator(false);
  };

  return (
    <div className="App">
      <h1>React Hesap Makinesi</h1>
      <div className="calculator">
        <div className="display">
          <p>{input}</p>
          <h2>{result}</h2>
        </div>
        <div className="buttons">
          {/* Tuşları hesap makinesi gibi yerleştir */}
          <button onClick={clear} className="span-two">C</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("0")} className="span-two">0</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
