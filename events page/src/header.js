import React, { Component } from "react";
import unicode from "./UNICODE_LOGO.PNG";
import {
  AppBar,
  Toolbar,
  createMuiTheme,
  MuiThemeProvider,
  Button
} from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        height: 114,
        boxShadow: "#FFFFFF 0px 0px 0px"
      }
    },
    MuiButton: {
      root: {
        paddingTop: "46px",
        paddingLeft: "33px",
        "&:hover": {
          backgroundColor: "#fff"
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#FFE990"
    }
  }
});

class Head extends Component {
  state = {
    color: "secondary"
  };
  styles = {
    root: {
      flexGrow: 1
    },
    logo: {
      position: "absolute",
      top: 34,
      left: "9.32%"
    },
    grow: {
      flexGrow: 1
    },
    flex: {
      marginRight: "8.44%",
      display: "flex",
      width: "100%",
      justifyContent: "flex-end"
    },
    btn: {
      marginLeft: "1.72%",
      marginTop: 44,
      padding: 0
    }
  };
  handleBtn = () => {};
  render() {
    console.log(theme);
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              <img
                src={unicode}
                alt="logo"
                style={this.styles.logo}
                width="237px"
              />
              <div style={this.styles.flex}>
                <Button style={this.styles.btn}>Home</Button>
                <Button style={this.styles.btn}>About Us</Button>
                <Button style={this.styles.btn}>Project</Button>
                <Button style={this.styles.btn}>Events</Button>
                <Button style={this.styles.btn}>Blog</Button>
                <Button color={this.state.color} style={this.styles.btn}>
                  Contact
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Head;
