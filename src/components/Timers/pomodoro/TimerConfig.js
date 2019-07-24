import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class TimerConfig extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var newBaseTime = moment.duration(0);
    if (event.target.id === 'work') {
      newBaseTime = moment.duration(25, 'minutes')
    }
    if (event.target.id === 'short') {
      newBaseTime = moment.duration(5, 'minutes')
    }
    if (event.target.id === 'long') {
      newBaseTime = moment.duration(10, 'minutes')
    }

    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <div className="timerconfig">
          <div className="form-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <button id="work"
              className="btn btn-info" type="number" 
              onClick={this.handleChange}>Work</button>
              <button id="short"
              className="btn btn-info" type="number" 
              onClick={this.handleChange}>Short Break</button>
              <button id="long" 
              label="Long Break"
              className="btn btn-info" type="number" 
              onClick={this.handleChange}>Long Break</button>
          </div>
      </div>
    )
  }
}

TimerConfig.propTypes = {
  baseTime: PropTypes.object.isRequired,
}
