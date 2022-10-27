import React from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);
  return (
    <>
      <div>{counter}</div>
      <button className={classes.btn} onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};
