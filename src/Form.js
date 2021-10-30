import React, { Component } from 'react';
import './Form.css'


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
    this.props.findMovie(this.state.searchTerm)
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
