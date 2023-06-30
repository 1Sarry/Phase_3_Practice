import React, { Component } from "react";

export default class Cards extends Component {
  render() {
    return (
        <div className= {`col-sm-12 col-md-6 ${ this.props.classLeft}`}>
        <div className={this.props.classLeftCont}>
          <div className={`title-wraper ${ this.props.classWhite}`}>{this.props.brand}</div> 
          <div className="description-wraper">
            {this.props.desc}
          </div>
          <div className="price-wrapper">
            {this.props.price}
            <sup>{this.props.super2}</sup>
          </div>

          <div className={`links-wrapper ${ this.props.classWhite}`}>
            <ul>
              <li>
                <a href="">{this.props.link1}</a>
              </li>
              <li>
                <a href="">{this.props.link2}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
