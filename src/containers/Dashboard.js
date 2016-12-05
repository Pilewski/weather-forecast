import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PinnedWeather from '../components/PinnedWeather'


class Dashboard extends Component {
  render() {
    return (
      <div>
        <Link to='/'> HOME </Link>
        <Link to='/dashboard'> DASHBOARD </Link>

      </div>
    )
  }
}

const mapStateToProps = state => {
  // return an object of redux store data
  // that you'd like available in your component
  return {};
}

const mapDispatchToProps = dispatch => {
  // return an object of methods you'd like
  // to dispatch as redux actions
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
