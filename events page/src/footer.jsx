import React, { Component } from "react";
import twitter from "./logo/T1.png";
import Link from "./logo/L1.png";
import Git from "./logo/G1.png";
import CCC from "./logo/3C.PNG";
import { FormHelperText } from "@material-ui/core";

class Foot extends Component {
  state = {};
  styles = {
    wrappper: {
      height: 420,
      width: "100%",
      background: "#445DFF",
      position: "relative"
    },
    ul: {
      listStyleType: "none",
      margin: 0,
      padding: 0,
      overflow: "hidden",
      color: "#FFFFFF",
      opacity: "0.5"
    },
    li: {
      float: "left",
      marginLeft: 24.42
    },
    a: {
      textDecoration: "none",
      color: "#FFFFFF",
      opacity: "0.5",
      marginLeft: 24.42
    },
    div1: {
      width: 360,
      marginLeft: "50%",
      transform: "translateX(-50%)",
      position: "absolute",
      top: 150
    },
    div2: {
      color: "#FFFFFF",
      opacity: "0.5",
      marginLeft: "50%",
      transform: "translateX(-50%)",
      position: "absolute",
      top: 204
    },
    div3: {
      width: 149.82,
      marginLeft: "50%",
      transform: "translateX(-50%)",
      position: "absolute",
      top: 72
    },
    li3: {
      float: "left",
      marginLeft: 16.97
    },
    img: {
      opacity: "0.71"
    },
    CCC: {
      // color: "#FFFFFF",
      // opacity: "0.09",
      // fontSize: 146,
      // letterHeight: 199,
      // marginLeft: "50%",
      // transform: "translateX(-50%)",
      position: "absolute",
      bottom: 0
      // maxWidth: "1905px"
    }
  };
  render() {
    return (
      <div style={this.styles.wrappper}>
        <div className="openSans-146-800">
          {/* <span>code.create.collaborate.</span> */}
          <img src={CCC} alt="3C's" style={this.styles.CCC} width="100%" />
        </div>
        <div style={this.styles.div3}>
          <ul style={this.styles.ul}>
            <li style={this.styles.li3}>
              <img alt="twitter" src={twitter} width="32" />
            </li>
            <li style={this.styles.li3}>
              <img alt="linkedIn" src={Link} width="32" />
            </li>
            <li style={this.styles.li3}>
              <img alt="gitHub" src={Git} width="32" />
            </li>
          </ul>
        </div>
        <div style={this.styles.div1}>
          <ul style={this.styles.ul}>
            <li style={this.styles.li}>ABOUT US</li>
            <li style={this.styles.li}>PROJECTS</li>
            <li style={this.styles.li}>EVENTS</li>
            <li style={this.styles.li}>BLOG </li>
          </ul>
        </div>
        <div style={this.styles.div2}>© 2017-2018 All Rights Reserved</div>
      </div>
    );
  }
}

export default Foot;
