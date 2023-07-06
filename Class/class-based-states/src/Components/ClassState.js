import React, { Component } from "react";
import AnotherClass from "./AnotherClass";

// State in class Component

export default class ClassState extends Component {
  constructor() {
    super(); // to import all the properties of the class in the other constructor
    // initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).
    this.state = {
      state1: 0,
      state2: "Hello",
      value:5, 
    };
  }
 ReactEvent () {
    alert('You just Clicked me')
  } // since it is inside of the component we should use "this."
 
  render() {
    return (
      <div>
        <h1>This is where you call the states</h1>
        <h2>to call the state:{this.state.state2}</h2>
        <button onClick={this.ReactEvent}>Click Me</button>
        <AnotherClass somevalue={this.state.state2}/>
      </div>
    );
  }
}
