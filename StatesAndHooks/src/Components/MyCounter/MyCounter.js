import React, { Component } from "react";
import "./Counter.css";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplyer from "./EvenCounterDisplyer";
import ClickCounter from "./Test";
export default class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      evenCount: 0,
    };
  }
  allClicksCounter = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
    console.log("count" + this.state.count);
  };
  evenClicksCounter = () => {
    if (this.state.count % 2 !== 0) {
      this.setState((state) => {
        return {
          evenCount: state.evenCount + 2,
        };
      });
      console.log("count at if cond" + this.state.count);
      console.log("countEvent" + this.state.evenCount);
    }
  };

  render() {
    return (
      <div className="counter-wrapper">
        <div className="counter-btn">
          <button
            onClick={() => {
              this.allClicksCounter();
              this.evenClicksCounter();
            }}
          >
            Count: {this.state.count}
          </button>
          <CounterDisplayer displayCount={this.state.count} />
          {/* <EvenCounterDisplyer
            displayCount={
              this.state.count % 2 === 0
                ? this.state.count
                : this.state.count - 1
            }
          /> */}
          <EvenCounterDisplyer displayCount={this.state.evenCount} />
          <ClickCounter />
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import "./Counter.css";
// import CounterDisplayer from "./CounterDisplayer";
// import EvenCounterDisplyer from "./EvenCounterDisplyer";
// import ClickCounter from "./Test";
// export default class MyCounter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       evenCount: 0,
//     };
//   }
//   allClicksCounter = () => {
//     this.setState((state) => {
//       return {
//         count: this.state.count + 1,

//       };
//     });
//   };

// //   evenClicksCounter = () => {

// //     if ((this.state.count) % 2 === 0) {
// //       this.setState((state) => {
// //         return {
// //           evenCount: this.state.evenCount + 2,
// //         };
// //       });
// //     }
// //     console.log("check even : "+this.state.count)
// //   };

//   render() {
//     return (
//       <div className="counter-wrapper">
//         <div className="counter-btn">
//           <button
//             onClick={() => {
//               this.allClicksCounter();
//               this.evenClicksCounter();
//             }}
//           >
//             Count: {this.state.count}
//           </button>
//           <CounterDisplayer displayCount={this.state.count} />
//           {/* <EvenCounterDisplyer
//             displayCount={
//               this.state.count % 2 === 0
//                 ? this.state.count
//                 : this.state.count - 1
//             }
//           /> */}
//           <EvenCounterDisplyer displayCount={this.state.evenCount} />
//           <ClickCounter />
//         </div>
//       </div>
//     );
//   }
// }
