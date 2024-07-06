// FunctionalCounter.js
import React, { useState } from 'react';

function FunctionalCounter () {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Functional Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default FunctionalCounter;
