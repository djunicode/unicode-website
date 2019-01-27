import React, { Component } from 'react';
import telephone from './contact-with-text.png';
class image extends Component {
    styles={
        container:{
            position: "relative",
            textAlign: "centre",

        },
        centered: {
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)" 
        }
    }
    render() {
        return (
            <div style={this.styles.container}>
            <img src={telephone}  width="100%" />
            <div style={this.styles.centered}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </div>
            
            </div>
        );
    }
}

export default image;