import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevState => prevState + 1);
  };

  const decrementCount = () => {
    setCount(prevState => prevState - 1);
  };
  return (
    <div>
      <span>{count}</span>
      <button className="pure-button" onClick={incrementCount}>
        +
      </button>
      <button className="pure-button" onClick={decrementCount}>
        -
      </button>
    </div>
  );
};

export default Counter;
