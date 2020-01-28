import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import "./styles/Photos.css";
import * as ImageData from '../../imageInfo';
// import { Grid } from "@material-ui/core";
import img1 from "./Images/img1.jpg";

import Image from "../Image/Image";
export class ThirdYears extends Component {
  state = {
    imageData: ImageData.imageInfo.thirdYear
  };
  styles = {
    pad: {
      padding: "49px 52px 49px 52px"
    },
    image: {
      backgroundColor: "black"
    }
  };
  render() {
    const renderImage=this.state.imageData.map(e=>{
      return(
        <Image position={e.position} project={e.project} username={e.name} src={`/static/frontend/profiles/`+e.img} />
      )
    })
    return (
      <Paper style={this.styles.pad}>
        {renderImage}
        <div className="clearfix" />
      </Paper>
    );
  }
}

export default ThirdYears;
