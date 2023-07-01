import React, { Component } from 'react'

export default class Cards2 extends Component {
  render() {
    return (
          <div class={`col-sm-12 col-md-6 ${ this.props.classLeft}`}>
              <div class={this.props.classLeftCont}>
                <div class="top-logo-wrapper">
                  <div class="logo-wrapper">
                    <img src={this.props.cardIcon} /> 
                    {/* arcade */}
                  </div>
                </div>
                <div class="description-wraper white">
                    {this.props.desc}<br/>{this.props.desc2}
                  
                </div>
                <div class="links-wrapper">
                  <ul>
                    <li>
                      <a href="">{this.props.link1}

                        <sup>{this.props.super}</sup>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {this.props.link2}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    )
  }
}
