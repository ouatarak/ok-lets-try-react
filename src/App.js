import React from 'react';
import logo from './logo.svg';
import { Button, Icon } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          I'm adding some text!
        </p>
        <a eslint-disable-next-line
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <Button size="small" color="green">
          <Icon name="download" />
          Download
        </Button>
      </header>
    </div>
  );
}

export default App;
