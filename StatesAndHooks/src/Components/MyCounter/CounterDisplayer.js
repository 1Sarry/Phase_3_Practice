import React, { Component } from 'react'
import "./Counter.css"

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div className='displayer'><h3>All Clicks Counter : {this.props.displayCount}</h3></div>
    )
  }
}
