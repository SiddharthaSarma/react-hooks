import React, { useState } from 'react';

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };
  return (
    <div>
      <img
        src={
          isOn
            ? 'https://icon.now.sh/highlight/fd0'
            : 'https://icon.now.sh/highlight/aaa'
        }
        style={{
          width: '50px',
          height: '50px'
        }}
        onClick={toggleBulb}
        alt="flashlight"
      />
    </div>
  );
};

export default Bulb;
