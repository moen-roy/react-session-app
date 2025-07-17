// React Hooks:React Function
// If in  there is something you to update in realtime
import { useState } from "react";

//return [currentState,function:updateState]

function SimpleState() {
  //Rule: Initial State or null
  const state = useState(0); // State [current,function]

  const increment = () => {
    console.log(state);
    let currentState = state[0];
    let newState = currentState + 1;
    let updateStateFunction = state[1];
    // state[1](newState);
    updateStateFunction(newState);
  };

  return (
    <div>
      <h1>Simple State 1</h1>
      <div>
        <button onClick={increment}>Click Me</button>
      </div>
      <h3>Clicked {state[0]}</h3>
    </div>
  );
}

export default SimpleState;