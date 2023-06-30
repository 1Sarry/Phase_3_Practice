import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
        <div class="left-side-wrapper col-sm-12 col-md-6">
        <div class="left-side-container">
          {/* <div class="title-wraper"></div> iPhone 11 */}
          <div class="description-wraper">
            Just the right amount of everything.
          </div>
          <div class="price-wrapper">
            From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
          </div>

          <div class="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Apply now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
