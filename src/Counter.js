import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>{count}</span>
      <button className="pure-button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="pure-button" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};

export default Counter;
