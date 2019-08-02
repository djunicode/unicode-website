import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import MyText from "./components/MyText/MyText";
import FourthYears from "./components/FourthYears/FourthYears";
import ThirdYears from "./components/ThirdYears/ThirdYears";
import SecondYears from "./components/SecondYears/SecondYears";
import Footer from "../../components/footer/footer";

import home from "./components/About_usImg/home.png";
// import Footer from "../src/Components"

class AboutUs extends Component {
  styles = {
    team: {
      color: "rgba(68, 93, 255, 1)",
      fontSize: 42,
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 600
    },
    year: {
      color: "rgba(69, 69, 69, 1)",
      fontSize: 32,
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 600
    },
    background: {
      backgroundColor: "#F8F8F8"
    },
    image: {
      backgroundColor: "#FFA965"
      // width: "100%",
      // height: "18.97%"
    },
    imageposition: {
      //marginLeft: "25%",
      height: "auto",
      width: "100%"
    },
    position: {
      textAlign: "center"
    },
    aboutussmall: {
      marginTop: 162,
      textAlign: "center"
    }
  };
  render() {
    return (
      <div style={this.styles.background}>
        <Grid container direction="row" justify="center">
          <Grid item xs={12}>
            <div>
              <img src={home} alt="about_us" style={this.styles.imageposition} />
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid container direction="row" justify="center">
          <Grid item xs={9}>
            <MyText />
          </Grid>
          <Grid item xs={12} />
          {/* <Grid container direction="row" justify="center"> */}
          <br />
          <br />
          <Grid item xs={12} style={this.styles.position}>
            <div style={this.styles.team}>Team</div>
            {/* </Grid> */}
          </Grid>
          <Grid item xs={12} />
          {/* <Grid container direction="row" justify="center"> */}
          <Grid item xs={12} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={12} style={this.styles.position}>
            <div style={this.styles.year}>Fourth Years'</div>
            {/* </Grid> */}
          </Grid>
          <Grid item xs={12} />
          <br />

          <Grid item xs={9}>
            <FourthYears />
          </Grid>
          <Grid item xs={12} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={12} style={this.styles.position}>
            <div style={this.styles.year}>Third Years'</div>
            {/* </Grid> */}
          </Grid>
          <br />
          <br />
          <br />
          <Grid item xs={12} />

          <Grid item xs={9}>
            <ThirdYears />
          </Grid>
          <Grid item xs={12} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={12} style={this.styles.position}>
            <div style={this.styles.year}>Second Years'</div>
            {/* </Grid> */}
          </Grid>
          <br />
          <br />
          <br />
          <Grid item xs={12} />

          <Grid item xs={9}>
            <SecondYears />
          </Grid>
          <Grid item xs={12} />
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
