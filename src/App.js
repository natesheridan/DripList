import React, { Component } from 'react';
import Form from './Form.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <main className='App'>
      <nav className="nav-bar">
        <p className="nav-bar__app-title">The Drip List</p>
        <div className="nav-bar__language-logo">
        </div>
      </nav>
      <body>
      </body>
      </main>
    )
  }
}

export default App;
