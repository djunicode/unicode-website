import React, { Component } from "react";
import Info from "../Info/Info";
import "./styles/FourthImage.css";
class Image extends Component {
  state = {};
  
  
  render() {
    console.log(this.props.src)
    return (
      <div>
        <div className="responsive4">
          <div className="gallery4">
            <div className="container4">
              <img src={this.props.src} alt={this.props.username} />
              <div className="overlay4">
                {/* <div className="text"> */}
                <div>
                  <Info
                  name={this.props.username}
                  project={this.props.project}
                  position={this.props.position}
                  />
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
