import React from 'react';
import './Form.css'


const Form = () => {
  return (
    <header className="nav-bar">
        <div className="title">
          <h5 className="nav-bar__header-button">The Drip List</h5>
        </div>
          <form className="search-bar">
            <input
              type='text'
              placeholder='Find your perfect cocktail here...'
              name='input'
            />
        <nav className='nav-buttons'>
            <h5 className='home-header-button'>Home</h5>
        </nav>
    </header>
  )
}

export default Form;
