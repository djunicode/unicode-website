import React, { Component } from "react";
import cup from "./cup.png";
import "./App.css";
import Header from "./header.js";
import Footer from "./footer.jsx";
import Body from "./Body.js";
import Text from "./Text.js";
import { Grid } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="image">
          <img src={cup} width="1920px" height="963px" />
          <div className="text1">Events</div>
          <div className="text2">Events</div>
        </div>
        <div>
          <Text />
        </div>
        <div className="body">
          <Grid
            container
            alignItems="center"
            alignContent="center"
            justify="center"
          >
            <Body />
            <Body />
            <Body />
            <br />
            <Footer />
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
