import React from "react";
import './Counter.scss'

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};
