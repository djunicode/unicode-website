import React, { Component } from "react";
class MyText extends Component {
  state = {};
  styles = {
    myFont: {
      fontSize: 16,
      marginTop: 100,
      marginBottom: 50,
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.87)"
    }
  };
  render() {
    return (
      <div style={this.styles.myFont}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia
      </div>
    );
  }
}

export default MyText;
