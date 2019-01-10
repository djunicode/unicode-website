import React, { Component } from 'react';
import telephone from '../telephone.png';
import '../App.css';

class Image extends Component{
    styles={
        text1: {
            position: "absolute",
            top: 29,
            left: "9.06%",
            fontSize: 230,
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 700,
            opacity: 0.25,
            color: "#FFFFFF",
          },
          text2: {
            position: "absolute",
            top: 165.1,
            left: "38.65%",
            color: "#454545",
            fontSize: 74,
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 600,
          
          },
          
            image: {
            position: "relative",
            marginTop: 114
            
            }

          
    };
    
    render() {
        return(
            <div style={this.styles.image}>
            <img src={telephone} width="100%" />
            <div style={this.styles.text1}>GET IN TOUCH</div>
            <div style={this.styles.text2}>GET IN TOUCH</div>
            </div>
    
        );
    }
        }
        export default Image;