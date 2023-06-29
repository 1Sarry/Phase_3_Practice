import React, { Component } from 'react'
import "./AppleProduct.css"

export default class AppleProduct extends Component {
  render() {
  //   const secondHightlightWrapper ={
  //     backgroundImage: `url(${this.props.Bgimage})`,
	// height: 580,
	// backgroundPosition: "bottom",
	// backgroundRepeat: "no-repeat",
  // backgroundSize: "initial",
  // backgroundColor:"#fbfbfd",
	// textAlign: "center",
	// paddingTop: "65",
	// marginBottom: "10",	
  //   }
  // const Styles = () => {
  //     if (window.scrollX > 768) {
  //       return `backgroundImage:url(${this.props.Bgimage}, backgroundColor:black;)`
  //     } else {
  //       return `backgroundImage:url(${this.props.Bgimage2})`
  //     }
  // }


    return (
      <div>
        <section className={this.props.className} >
        {/* */}
        <div className="container">
          <div className="new-alert">{this.props.alert}</div>

          <div className={`title-wraper bold ${ this.props.className2}`}>{this.props.ProdName}</div>

          <div className="description-wrapper " >
          {this.props.PrdDesc}
          </div>

          <div className="price-wrapper grey">{this.props.ProdPrice}</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">{this.props.BtnMore}</a>
              </li>
              <li>
                <a href="">{this.props.BtnBuy}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
