import React, { Component } from 'react';
import Form from './Form.js';
import './App.css';
import English from './flag2.png'

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
        <img className='nav-bar__english' src={English}/>
        </div>
      </nav>
      <body>
      </body>
      </main>
    )
  }
}

export default App;
