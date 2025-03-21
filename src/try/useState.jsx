import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="">
      <p className="">{count}</p>
      <button className="" onClick={decrement}>
        Decrement
      </button>
      <button className="" onClick={reset}>
        Reset
      </button>
      <button className="" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
