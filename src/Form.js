import React, { Component } from 'react';
import './Form.css'


class Form extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }
render() {
  return (
    <header className="nav-bar">
        <div className="title">
        </div>
          <form className="search-bar">
            <input
              type='text'
              placeholder='Find your perfect cocktail here...'
              name='input'
              onChange={this.handleChange}
            />
            </form>
    </header>
  )
}
}

export default Form;
