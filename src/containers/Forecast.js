import React, { Component } from 'react';
import { connect } from 'react-redux';

class Forecast extends Component {
  render() {
    return (
      <div>SHEY!</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
