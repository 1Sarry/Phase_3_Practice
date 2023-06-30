import React, { Component } from 'react'
import "./NavBar.css"
import BrandLogo from "../../Assets/Images/icons/logo-sm.png";
import NavItem from './NavItem';


export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={BrandLogo} />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <NavItem
                item="Mac"/>
                <NavItem
                item="iphone"/>
                <NavItem
                item="ipad"/>
                <NavItem
                item="watch"/>
                <NavItem
                item="tv"/>
                <NavItem
                item="Music"/>
                <NavItem
                item="Support"/>
                <NavItem
                img="search-icon-sm.png"/>
                <NavItem
                img="cart-sm.png"/>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      </div>
    )
  }
}
