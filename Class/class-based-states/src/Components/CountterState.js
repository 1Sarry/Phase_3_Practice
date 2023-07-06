import React, { Component } from "react";

export default class CountterState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      abebe: "Abe",
      state1: 10,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((state) => {
      return {
        count: this.state.count + 1,
      };
    });
  }

// arrow function will do the binding by it self, what I did on line 11.

//   incrementCount = () => {
//     this.setState((state) => {
//       return {
//         count: this.state.count + 1,
//       };
//     });
//   };
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count:{this.state.count}</button>
      </div>
    );
  }
}
