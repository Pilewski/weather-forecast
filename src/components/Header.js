import React from 'react';
import { Link } from 'react-router';

const Header = ({ name, temp, desc }) => {
  let id = 'l'
  return(
    <article id='header'>
      <h1 className='title'>Weather Forecast</h1>
      { !!name ?
      <section className='current-forecast'>
        The current forecast for {name} is {desc} at {Math.round(temp)}°F
        <Link to={`/forecast/${id}`} className='extended-local'> Extended Forecast </Link>
      </section>
      : null }
      <Link className="settings-link" to='/settings'> SETTINGS </Link>
    </article>
  )
}

export default Header
