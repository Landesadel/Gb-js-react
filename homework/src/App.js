import React from 'react';
import './styles/App.css';

function App(props) {
  return (
    <div className="App">
      <p className="Sometxt">
        Hello from {props.name}!
      </p>
    </div>
  );
}

export default App;
