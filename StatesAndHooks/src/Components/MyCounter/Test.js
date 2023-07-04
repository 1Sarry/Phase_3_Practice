


import React, { Component } from 'react';

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      previousCount: null,
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => {
      const updatedCount = prevState.count + 1;
      return {
        count: updatedCount,
        previousCount: updatedCount % 2 === 0 ? null : prevState.count,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Click Me</button>
        <p>Clicked {this.state.count} times</p>
        <p>
          {this.state.count % 2 === 0
            ? 'Even Clicks'
            : `Previous Count: ${this.state.previousCount}`}
        </p>
      </div>
    );
  }
}

export default ClickCounter;


// In this updated code, a new state property `previousCount` is added to keep track of the previous count. Inside the `handleButtonClick` method, when a button is clicked, the count is incremented. If the updated count is even, the `previousCount` value is set to `null`, indicating that the previous state should not be displayed. If the updated count is odd, the `previousCount` value is set to the previous count stored in the `prevState`.

// In the render method, the conditional