import React, { Component } from "react";
import "./Counter.css";

export default class EvenCounterDisplyer extends Component {
  render() {
    return (
      <div className="displayer">
        <h3>Even Clicks Counter : Clicked {this.props.displayCount} times</h3>
      </div>
    );
  }
}
