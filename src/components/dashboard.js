import React from 'react'
import { Link } from 'react-router'
<<<<<<< Updated upstream
import PinnedWeather from '../containers/PinnedWeatherContainer'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <PinnedWeather id={0} />
      <PinnedWeather id={1} />
      <PinnedWeather id={2} />
      <Link className='settings-link' to="/settings">
        Settings
      </Link>
=======
import PinnedWeather from '../components/PinnedWeather'

const Dashboard = () => {
  return (
    <div className="city-card-container">
      {this.props.children}
      <PinnedWeather />
>>>>>>> Stashed changes
    </div>
  )
}

export default Dashboard
