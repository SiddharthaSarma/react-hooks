import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
