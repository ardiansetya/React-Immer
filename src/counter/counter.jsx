import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };


  return (
    <>
      <h1>counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
