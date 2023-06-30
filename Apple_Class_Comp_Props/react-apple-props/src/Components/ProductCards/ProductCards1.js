import React, { Component } from "react";
import Cards from "./Cards";
import "./ProductCards.css"

export default class ProductCards1 extends Component {
  render() {
    return (
        <section className="fourth-heghlight-wrapper">
          <div className="container-fluid">
            <div className="row">
              <Cards
              classLeft="left-side-wrapper"
              classLeftCont="left-side-container"
              brand="iPhone 11"
              desc="Just the right amount of everything."
              price="From $18.70/mo. or $499 with trade‑in."
              super2="1"
              link1="Learn More"
              link2="Apply Now"
              />
              <Cards
              classLeft="right-side-wrapper"
              classLeftCont="right-side-container"
              classWhite="white"
              brand="Get the latest CDC response to COVID-19."
              link1="Watch the PSA"
              />
            </div>
          </div>
        </section>
    );
  }
}
