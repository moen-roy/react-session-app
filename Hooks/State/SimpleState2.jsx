import { useState } from "react";

function SimpleState2() {
    const [currentState, setCurrentState] = useState(0);

    const increment = () => {
        setCurrentState(currentState + 1);
    };
    const decrement = () => {
        let newState = currentState - 1;
        setCurrentState(newState);
    };
    return (
        <div>
            <div>
                <h1>Simple State 2 </h1>
                <button onClick={increment}> + </button>
                <span>{currentState}</span>
                
                <button onClick={decrement}> -</button>
            </div>
            <h3>Current Count: {currentState}</h3>
        </div>
    );
}
export default SimpleState2;