import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import MyText from "./components/MyText/MyText";
import FourthYears from "./components/FourthYears/FourthYears";
import ThirdYears from "./components/ThirdYears/ThirdYears";
import SecondYears from "./components/SecondYears/SecondYears";
import MediaQuery from 'react-responsive';
import Footer from "../../components/footer/footer";
import home from "./components/About_usImg/home.png";
import home1 from "./components/About_usImg/homesmall.png";
import DropDownAbout from "./components/FourthYears/DropDown/DropDown";
import { ParallaxProvider, Parallax, withController } from 'react-scroll-parallax';
import * as ImageData from './imageInfo';
import Video from '../About_us/components/Video/Video';
// import Footer from "../src/Components"

class AboutUs extends Component {
  state={
    data: ImageData.imageInfo
  }
  handleLoad = () => {
      // updates cached values after image dimensions have loaded
      this.props.parallaxController.update();
  }
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
      backgroundColor: "#F8F8F8",
      position: 'relative',
      boxShadow: '0px -10px 50px #242424'
    },
    image: {
      backgroundColor: "#FFA965"
      // width: "100%",
      // height: "18.97%"
    },
    imageposition: {
      //marginLeft: "25%",
      objectFit: 'cover',
      height: "100%",
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
    console.log(this.state.data.secondYear)
    return (
      <ParallaxProvider>
                        {/* <Fade> */}
                        {/* Section Under Construction */}
                        <Parallax className="custom-class" y={[-30, 30]}>
                          <Video onLoad={this.handleOnLoad} />
                        </Parallax>
      <div style={this.styles.background}>
        {/* <Grid container direction="row" justify="center">
          <Grid item xs={12}>
            <div style={{height: '100vh'}} >
              <MediaQuery maxWidth={768} >
                <img src={home1} alt="about_us" style={this.styles.imageposition} />
              </MediaQuery>
              <MediaQuery minWidth={769} >
                <img src={home} alt="about_us" style={this.styles.imageposition} />
              </MediaQuery>
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br /> */}
        <Grid style={{position:'relative', top: '10vh'}} container direction="row" justify="center">
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
          {/* <br />
          <br />
          <br />
          <br />
          <br /> */}
          <Grid item xs={12} style={this.styles.position}>
            <div style={this.styles.year}>2019</div>
            {/* </Grid> */}
          </Grid>
          <Grid item xs={12} />
          <br />

          <Grid item xs={9}>
            <MediaQuery minWidth={769} >
                <FourthYears />
            </MediaQuery>
            <MediaQuery maxWidth={768} >
                <DropDownAbout data={this.state.data.fourthYear?this.state.data.fourthYear:[]} />
            </MediaQuery>
          </Grid>
          <Grid item xs={12} />
          <br />
          {/* <br /> */}
          {/* <br /> */}
          {/* <br /> */}
          {/* <br /> */}
          <Grid item xs={12} style={this.styles.position}>
            <div style={this.styles.year}>2020</div>
            {/* </Grid> */}
          </Grid>
          <br />
          <br />
          <br />
          <Grid item xs={12} />

          <Grid item xs={9}>
            <MediaQuery minWidth={769} >
                <ThirdYears />
            </MediaQuery>
            <MediaQuery maxWidth={768} >
                <DropDownAbout data={this.state.data.thirdYear?this.state.data.thirdYear:[]} />
            </MediaQuery>
          </Grid>
          <Grid item xs={12} />
          {/* <br /> */}
          {/* <br /> */}
          {/* <br /> */}
          {/* <br /> */}
          <br />
          <Grid item xs={12} style={this.styles.position}>
            <div style={this.styles.year}>2021</div>
            {/* </Grid> */}
          </Grid>
          <br />
          <br />
          <br />
          <Grid item xs={12} />

          <Grid item xs={9} style={{marginBottom: 80}} >
            <MediaQuery minWidth={769} >
                <SecondYears />
            </MediaQuery>
            <MediaQuery maxWidth={768} >
                <DropDownAbout data={this.state.data.secondYear?this.state.data.secondYear:[]} />
            </MediaQuery>
          </Grid>
          <Grid item xs={12} />
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
      </ParallaxProvider>
    );
  }
}

export default withController(AboutUs);
