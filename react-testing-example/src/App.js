import './App.css';
import React, { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="App">
      <section>
        <h2 data-testid="countvalue">{ counter }</h2>
        <button type="button" data-testid="decrement" onClick={ () => setCounter(counter -= 1) }>-</button>
        <button type="button" data-testid="increment" onClick={ () => setCounter(counter += 1) }>+</button>
      </section>
      <section>
        <h2 data-testid="namevalue">Hej { name }</h2>
        <input type="text" data-testid="inputname" onChange={ (event) => setName(event.target.value) } />
      </section>
    </div>
  );
}

export default App;
