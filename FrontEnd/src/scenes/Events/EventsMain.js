import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MyText from "./components/MyText/MyText";
import EventCards2 from "./components/EventCards/EventCards2";
import Home from "../Events/components/EventsImg/home.png";
import Footer from "../../components/footer/footer";

class MyApp extends Component {
  state = {};

  render() {
    return (
      <div>
        <Grid container direction="row" justify="center">
          <Grid item xs={12}>
            <div>
              <img
                src={Home}
                alt={""}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="row" justify="center">
              <Grid item xs={9}>
                <MyText />
              </Grid>
              {/* <Grid container spacing={24} justify="center" alignItems="center">
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <EventCards2 />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <EventCards2 />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                  <EventCards2 />
                </Grid>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={10} sm={11} md={8} lg={10}>
            <Grid container justify="center" alignContent="center" spacing={24}>
              <Grid item xs={12} sm={12} md={6} lg={4} alignItems="center">
                <EventCards2 />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <EventCards2 />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <EventCards2 />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <EventCards2 />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <EventCards2 />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <EventCards2 />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}

export default MyApp;
