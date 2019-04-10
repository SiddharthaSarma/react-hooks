import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>Hello world</span>
      <button className="pure-button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
};

export default Counter;
