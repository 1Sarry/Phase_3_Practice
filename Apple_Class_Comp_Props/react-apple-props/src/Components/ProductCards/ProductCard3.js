import React, { Component } from 'react'
import Cards2 from './Cards2'
import Tv from "../Assets/Images/icons/apple-tv-logo.png"
import Banker from "../Assets/Images/home/banker.png"

export default class ProductCard3 extends Component {
  render() {
    return (
        <section class="fifth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-sm-12 col-md-6">
              <div class="left-side-container">
                <div class="top-logo-wrapper">
                  <div class="logo-wrapper">
                    <img src={Tv} />
                  </div>
                </div>

                <div class="tvshow-logo-wraper">
                  <img src={Banker} />
                </div>

                <div class="watch-more-wrapper">
                  <a href="#">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
          <Cards2
          classLeft="right-side-wrapper"
          classLeftCont="right-side-container"
          cardIcon="watch-series5-logo.png"
          desc="With the Always-On Retina display."
          desc2="You’ve never seen a watch like this."
          link1="Learn more"
          link2="Buy"
          />
          </div>
        </div>
      </section>
    )
  }
}
