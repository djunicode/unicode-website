import React, { Component } from "react";
import { Paper, Grid } from "@material-ui/core";
import "./styles/Photos.css";
import img1 from "./Images/img1.jpg";
import Image from "../Image/Image";
class SecondYears extends Component {
  state = {};
  styles = {
    pad: {
      padding: "49px 52px 49px 52px"
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

export default SecondYears;
