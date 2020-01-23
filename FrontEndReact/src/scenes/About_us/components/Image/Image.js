import React, { Component } from "react";
import Info from "../Info/Info";
import "./styles/FourthImage.css";
class Image extends Component {
  state = {};
  
  
  render() {
    return (
      <div>
        <div className="responsive4">
          <div className="gallery4">
            <div className="container4">
              <img src={this.props.src} alt="" />
              <div className="overlay4">
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
