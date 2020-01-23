import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import "../Photos.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import Image from "./Image";
import Info from "./Info";
class PaperAlbum extends Component {
  state = {};
  styles = {
    pad: {
      padding: "49px 52px 49px 52px"
    }
  };
  render() {
    return (
      <Paper style={this.styles.pad}>
        <Image />

        <div className="responsive">
          <div className="gallery">
            <div className="container">
              <img src={img2} alt="" />
              <div className="overlay">
                <div className="text">
                  <Info />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <div className="container">
              <img src={img3} alt="" />
              <div className="overlay">
                <div className="text">hey</div>
              </div>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <div className="container">
              <img src={img4} alt="" />
              <div className="overlay">
                <div className="text">hey</div>
              </div>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <div className="container">
              <img src={img1} alt="" />
              <div className="overlay">
                <div className="text">hey</div>
              </div>
            </div>
          </div>
        </div>

        <div className="responsive">
          <div className="gallery">
            <div className="container">
              <img src={img2} alt="" />
              <div className="overlay">
                <div className="text">hey</div>
              </div>
            </div>
          </div>
        </div>

        <div className="clearfix" />
      </Paper>
    );
  }
}

export default PaperAlbum;
