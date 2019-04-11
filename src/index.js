import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';
import Bulb from './Bulb';

function App() {
  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <Counter />
      </div>
      <div className="pure-u-1">
        <Bulb />
      </div>
      <div className="pure-u-1">
        <Counter />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
