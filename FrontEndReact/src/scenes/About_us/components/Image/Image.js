import React, { Component } from "react";
import Info from "../Info/Info";
import "./styles/Photos.css";
class Image extends Component {
  state = {};
  
  
  render() {
    return (
      <div>
        <div className="responsive">
          <div className="gallery">
            <div className="container">
              <img src={this.props.src} alt="" />
              <div className="overlay">
                {/* <div className="text"> */}
                <div>
                  <Info />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
