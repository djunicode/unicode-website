import React, { Component } from "react";
class MyText extends Component {
  state = {};
  styles = {
    myFont: {
      fontSize: 20,
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 400,
      textAlign: "center",
      color: "rgba(112, 112, 112, 0.87)",
      paddingTop: 20
    }
  };
  render() {
    return (
      <div style={this.styles.myFont}>
        We are a student community that was founded in 2017 by a group of 5 students and have now grown to an organization of 200+ members.
        The hierarchical structure, here at Unicode comprises of the 4th year undergrads as supervisors, 3rd year undergrads as project mentors and 2nd year undergrads as primary developers. 
        We are currently based out of Dwarkadas J. Sanghvi College of Engineering, Mumbai. 
        We work on various development projects that affect us and the world around us.
      </div>
    );
  }
}

export default MyText;
