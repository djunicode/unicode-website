import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import "./styles/Photos.css";
// import { Grid } from "@material-ui/core";
import img1 from "./Images/img1.jpg";

import Image from "../Image/Image";
export class ThirdYears extends Component {
  state = {};
  styles = {
    pad: {
      padding: "49px 52px 49px 52px"
    },
    image: {
      backgroundColor: "black"
    }
  };
  render() {
    return (
      <Paper style={this.styles.pad}>
        <Image src={img1} />
        <Image src={img1} />
        <Image src={img1} />
        <Image src={img1} />
        <Image src={img1} />
        <Image src={img1} />
        <Image src={img1} />
        <Image src={img1} />
        <Image src={img1} />
        <Image src={img1} />
        <Image src={img1} />
        <Image src={img1} />

        <div className="clearfix" />
      </Paper>
    );
  }
}

export default ThirdYears;
