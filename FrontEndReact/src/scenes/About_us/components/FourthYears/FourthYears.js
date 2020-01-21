import React, { Component } from "react";
import { Paper, Grid } from "@material-ui/core";
import "./styles/FourthYear.css";
import img1 from "./Images/img1.jpg";
import Image from "../Image/Image";
import * as ImageData from '../../imageInfo';

class FourthYears extends Component {
  state = {
    imageData: ImageData.imageInfo.fourthYear
  };
  styles = {
    pad: {
      padding: "49px 52px 49px 52px",
      borderradius: "12px 12px 12px 12px !important",
      bordercollapse:"separate !important",
     
    }
  };
  render() {
    const renderImage=this.state.imageData.map(e=>{
      return(
        <Image position={e.position} project={e.project} username={e.name} src={`http://bagwesagar6699.pythonanywhere.com//static/frontend/profiles/`+e.img} />
      )
    })
    return (
      <Paper style={this.styles.pad} borderradius="12px 12 12 12">
        {renderImage}
        <div className="clearfix" />
      </Paper>
    );
  }
}

export default FourthYears;
