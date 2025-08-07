import React, { useState } from 'react';
import { useSharedContext } from "sharedContext/useSharedContext";
const App = () => {
  const [counter, setCounter] = useState(0);
  const {value, updateSharedState} = useSharedContext();
  return (
    <main>
      <h1>Remote 1's counter: {counter} : {value}</h1>
      <button onClick={() => { updateSharedState(counter => counter + 1); setCounter(counter => counter + 1)}}>increment</button>
    </main>
  );
};

export default App;
