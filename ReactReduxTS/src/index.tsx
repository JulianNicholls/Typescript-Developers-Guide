import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

interface AppProps {
  colour: string;
  initialCount?: number;
}

const App = ({ colour, initialCount = 0 }: AppProps) => {
  const [count, setCount] = useState(initialCount);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="counter">
      <button onClick={decrement}>-1</button> <span>Counter: {count}</span>
      <button onClick={increment}>+1</button>
    </div>
  );
};

ReactDOM.render(
  <App colour="green" initialCount={0} />,
  document.querySelector('#root')
);
