import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


function App() {

  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  return (
    <React.Fragment>
      <button style={{ backgroundColor: 'green', color: 'white'}}onClick={() => setNumber1(2)}>click1</button>
      <button style={{ backgroundColor: 'red', color: 'white'}}onClick={() => setNumber2(1)}>click2</button>

      {
        console.log(number1, number2)
      }
    </React.Fragment>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)
