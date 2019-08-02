import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { styles } from "./styles/Infostyle";
class Info extends Component {
  state = {};
  styles = {
    name: {
      color: "#FFFFFF",
      position: "relative",
      size: 16,
      marginTop: "15%",
      marginLeft: "22%"
    },
    profession: {
      color: "#FFFFFF",
      position: "absolute",
      size: 16,
      marginTop: 82.64,
      marginLeft: "15.28%"
    },
    project: {
      color: "#D0D6FF",
      position: "absolute",
      size: 16,
      marginTop: 102.64,
      marginLeft: "15.28%"
    },
    position: {
      // marginTop: 46
    },
    icons: {
      color: "rgba(255, 255, 255, 0.71)",

      letterSpacing: 8,
      position: "absolute",
      size: "40px",
      marginTop: 164,
      marginLeft: "2.28%"
    }
  };

  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          {/* <Grid item xs={8} alignItems="center" alignContent="center">
            {/* <div style={this.styles.position}> */}
          {/* <Grid item xs={3} sm={11} md={11} lg={12} xl={12}>
              <div style={styles.name}>John Doe</div>
            </Grid> */}
          {/* <br />
          <br />
          <br /> */}
          {/* <Grid item xs={12} sm={11} md={11} lg={11} xl={12}>
              <div style={styles.profession}>Frontend Mentor</div>
            </Grid>
            <Grid item xs={12} sm={11} md={11} lg={11} xl={12}>
              <div style={styles.project}> at Project Finder </div>
            </Grid> */}
          {/* <br />
          <br />
          <br /> */}
          {/* <Grid item xs={12} style={styles.icons}>
              <i class=" fab fa-twitter" />

              <i class=" fab fa-linkedin" />
              <i class=" fab fa-github" />
            </Grid> */}
          {/* </div> */}
          {/* </Grid>  */}
          <Typography style={styles.name}>John Doe</Typography>
          <Typography style={styles.profession}>Frontend Mentor</Typography>
          <Typography style={styles.project}>at Project Finder</Typography>
          <Typography style={styles.icons}>
            <i class=" fab fa-twitter" />
            <i class=" fab fa-linkedin" />
            <i class=" fab fa-github" />
          </Typography>
        </Grid>
      </div>
    );
  }
}

export default Info;
