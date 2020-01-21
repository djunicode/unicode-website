import React, { Component } from "react";
import { Paper, Grid } from "@material-ui/core";
import "./styles/Photos.css";
import img1 from "./Images/img1.jpg";
import Image from "../Image/Image";
import * as ImageData from '../../imageInfo'
// import Jay from ''
class SecondYears extends Component {
  state = {
    imageData: ImageData.imageInfo.secondYear
  };
  styles = {
    pad: {
      padding: "49px 52px 49px 52px"
    }
  };
  // componentDidMount=()=>{
  //   this.setState({imageData: ImageData.imageInfo.thirdYear})
  // }
  render() {
    const renderImage=this.state.imageData.map(e=>{
      return(
        <Image position={e.position} project={e.project} username={e.name} src={`http://bagwesagar6699.pythonanywhere.com//static/frontend/profiles/`+e.img} />
      )
    })
    console.log(this.state.imageData)
    return (
      <Paper style={this.styles.pad}>
          {renderImage}
          {/* <Image src={Jay}/> */}
        <div className="clearfix" />
      </Paper>
    );
  }
}

export default SecondYears;
