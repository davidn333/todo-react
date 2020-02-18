import React from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import TaskList from '../tasklist/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-Main">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="tasklist">
          <p>TaskList</p>
          <TaskList />
        </div>
      </header>
    </div>
  );
}

export default App;
