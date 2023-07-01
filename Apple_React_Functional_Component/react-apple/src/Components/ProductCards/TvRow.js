import React from "react";
import arcade from "../../commonResources/images/icons/arcade.png";

const TvRow = () => {
  return (
    <div>
      {" "}
      <section class="sixth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-sm-12 col-md-6">
              <div class="left-side-container">
                <div class="top-logo-wrapper">
                  <div class="logo-wrapper">
                    <img src={this.props.cardIcon} /> 
                    {/* arcade */}
                  </div>
                </div>
                <div class="description-wraper white">
                    {this.props.desc}
                  Agent 8 is a small hero on a big mission.
                </div>
                <div class="links-wrapper">
                  <ul>
                    <li>
                      <a href="">{this.props.link1}

                        Play now<sup>2{this.props.super}</sup>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {this.props.link2}Learn about Apple Arcade</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="right-side-wrapper col-sm-12 col-md-6">
              <div class="right-side-container">
                <div class="title-wraper">Apple Card Monthly Installments</div>
                <div class="description-wraper">
                  Pay for your next iPhone over time, interest-free with Apple
                  Card.
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default TvRow;
