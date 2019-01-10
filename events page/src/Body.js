import React, { Component } from "react";
import "./App.css";

import {
  Paper,
  Typography,
  Button,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import "./App.css";
import Beach from "./Beach.png";
import RS from "./RS.PNG";
import BUTTON from "./BUTTON.PNG";

class Body extends Component {
  state = { hovered: false };
  styles = {
    container: {
      position: "relative"
    },

    paper: {
      width: 1350,
      height: 280,
      padding: "37px 37px 57px 51px",
      boxShadow: `#d6d6d6 ${
        this.state.hovered ? "12px 12px 12px" : "4px 4px 4px"
      }`,
      borderRadius: 10,
      margin: 20
    },
    info: {
      color: "#445DFF",
      padding: 0,
      margin: 0,
      lineHeight: "33px",
      position: "absolute",
      top: 36,
      left: 398
    },
    subText: {
      padding: 0,
      margin: 0,
      position: "absolute",
      lineHeight: "27px",
      top: 89,
      left: 398,

      width: 611,
      height: 54
    },
    category: {
      lineHeight: "19px",
      letterSpacing: "0.150em",
      color: "#445DFF",
      position: "absolute",
      top: 159,
      left: 398
    },
    tech: {
      lineHeight: "24px",
      letterSpacing: "0.150em",
      position: "absolute",
      top: 306,
      left: 0
    },
    date: {
      lineHeight: "27px",
      position: "absolute",
      top: 220,
      left: 398
    },
    btnDesign: {
      display: "inline",
      position: "relative",
      left: 1153,
      top: 92,
      textAlign: "center",
      color: "#FFFFFF"
    },
    buyBtnContainer: {
      position: "absolute",
      textAlign: "center"
    },
    rup: {
      position: "absolute",
      top: 13.35,
      left: 35.76
    },
    price: {
      position: "absolute",
      top: 98,
      left: 1209.76,
      height: 36,
      color: "#FFFFFF"
    },
    picture: {
      position: "absolute",
      top: 29,
      left: 46
    },
    button: {
      position: "absolute",
      width: 160,
      height: 57,
      left: 1140,
      top: 189
    }
  };
  handleMouse = () => {
    if (this.state.hovered) {
      this.setState({ hovered: false });
      // console.log(this.state.hovered);
    } else {
      this.setState({ hovered: true });
      // console.log(this.state.hovered);
    }
  };
  render() {
    let myStyle = {
      paper: {
        margin: 20,
        left: 285,
        width: 1350,
        height: 280,
        padding: "37px 37px 57px 51px",
        boxShadow: `#d6d6d6 ${
          this.state.hovered ? "12px 12px 16px" : "4px 4px 16px"
        }`,
        borderRadius: 10,
        transition: "linear 0.2s"
      }
    };

    return (
      <div onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse}>
        <Paper style={myStyle.paper}>
          <div style={this.styles.container}>
            <div className="openSans-24-600" style={this.styles.info}>
              Event Name
            </div>

            <button className="button" style={this.styles.button}>
              {" "}
              View{" "}
            </button>

            <div className="openSans-18-400" style={this.styles.subText}>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum
            </div>

            <div className="roboto-18-400" style={this.styles.category}>
              App Development
            </div>

            <div className="openSans-18-400" style={this.styles.tech}>
              {this.props.tech}
            </div>

            <div className="openSans-20-600" style={this.styles.date}>
              Date: Dec 28, 2018
            </div>
            <div style={this.styles.picture}>
              <img src={Beach} alt="" width="300" height="220" />
            </div>
            {/* Button */}

            <div className="openSans-26-600" style={this.styles.btnDesign}>
              <div style={this.styles.buyBtnContainer}>
                <img src={BUTTON} alt="" width="131" />
                <img
                  src={RS}
                  alt="buttonBackground"
                  height="23"
                  style={this.styles.rup}
                />
                <div style={this.styles.price}>50</div>
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Body;
