import React, { Component } from 'react'
import "./NavBar.css"

export default class NavItem extends Component {
  render() {
    return (
      <div><li className="nav-item">
      <a className="nav-link js-scroll-trigger" href="/mac/">
        Mac
      </a>
    </li></div>
    )
  }
}
