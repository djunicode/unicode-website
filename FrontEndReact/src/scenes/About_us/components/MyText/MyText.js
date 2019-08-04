import React, { Component } from "react";
class MyText extends Component {
  state = {};
  styles = {
    myFont: {
      fontSize: 20,
      fontFamily: "Open Sans sans-serif",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.87)"
    }
  };
  render() {
    return (
      <div style={this.styles.myFont}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda delectus dicta iste, temporibus ipsam perferendis necessitatibus beatae, inventore officiis corrupti unde ut amet! Dicta nam numquam, illo totam sed, cupiditate maxime eos atque soluta nihil explicabo magni. Dolores, quisquam beatae.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda delectus dicta iste, temporibus ipsam perferendis necessitatibus beatae, inventore officiis corrupti unde ut amet! Dicta nam numquam, illo totam sed, cupiditate maxime eos atque soluta nihil explicabo magni. Dolores, quisquam beatae.
      </div>
    );
  }
}

export default MyText;
