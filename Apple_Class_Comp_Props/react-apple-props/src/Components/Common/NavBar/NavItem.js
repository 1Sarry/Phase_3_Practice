import React, { Component } from "react";
import "./NavBar.css";

export default class NavItem extends Component {
  render() {
    return (
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="/mac/">
            {this.props.item}
            <img src={this.props.img} />
          </a>
        </li>
    );
  }
}
