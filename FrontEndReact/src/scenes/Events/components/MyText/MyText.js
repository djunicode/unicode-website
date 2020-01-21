import React, { Component } from "react";
class MyText extends Component {
  state = {};
  styles = {
    myFont: {
      fontSize: 16,
      marginTop: 40,
      marginBottom: 50,
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 400,
      textAlign: "center",
      color: "rgba(112, 112, 112, 0.87)"
    }
  };
  render() {
    return (
      <div style={this.styles.myFont}>
        Apart from really cool projects, we also host informative sessions and presentations. 
        These sessions not only provide an insight to what we do, but also to the advancements in the field of technology. 
        Do keep a lookout for our events
      </div>
    );
  }
}

export default MyText;
