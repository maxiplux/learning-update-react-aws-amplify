import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleComponent from "./SimpleComponet";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SimpleComponent mensaje={'soy juan enviando un nmensaje a juan '} />

      </header>
    </div>
  );
}

export default App;
