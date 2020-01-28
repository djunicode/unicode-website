import React, { Component } from 'react';
import {styles} from './styles/TextStyles.js'



class Follow extends Component{
  styles={
    font:{
      fontSize: `${this.props.Gwidth>960?('1.5vw'):('4.5vw')}`,
      padding: "10px 0px",
      textAlign: "center",
      letterHeight: "24px",
      fontFamily: "Open Sans, sans-serif",
      color: "#777777" 
    }
  }  
render() {
    return(
        <div style={this.styles.font}>
          Follow us on
        </div>
        
    );
}
}
export default Follow;