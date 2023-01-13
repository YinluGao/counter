import { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    function handleClick(prevNumber) {

        setNumber((prevNumber) => prevNumber + 1)

    }
    return (
        <div className="App">
            <h1>Counter</h1>
            <p>{number}</p>
            <button onClick={handleClick}>Increase</button>



        </div>
    );
}

export default Counter;