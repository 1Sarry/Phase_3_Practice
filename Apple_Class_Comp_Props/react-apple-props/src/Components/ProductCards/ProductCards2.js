import React, { Component } from "react";
import Cards2 from "./Cards2";
import Cards from "./Cards";
import "./ProductCards.css"

export default class ProductCards2 extends Component {
  render() {
    return (
      <div>
        <section class="sixth-heghlight-wrapper">
          <div class="container-fluid">
            <div class="row">
                <Cards2
                classLeft="left-side-wrapper"
                classLeftCont="left-side-container"
                cardIcon="arcade.png"
                desc="Agent 8 is a small hero on a big mission."
                link1="Play now"
                super="2"
                link2="Learn about Apple Arcade"
                
                />
                <Cards
                classLeft="right-side-wrapper"
                classLeftCont="right-side-container"
                brand="Apple Card Monthly Installments"
                desc="Pay for your next iPhone over time, interest-free with Apple
                Card."
                link1="Learn More"
                link2="Apply Now"
                />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
