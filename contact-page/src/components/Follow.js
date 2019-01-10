import React, { Component } from 'react';
import '../App.css';



        class Follow extends Component{

            style={
                follow: {
                    
                    //position: absolute,
                    color: "#000000",
                    fontSize: 18,
                    textAlign: "centre",
                    fontFamily: "Open Sans, sans-serif",
                    marginTop: 122.1
                  }
            };
                    render() {
                        return(
                            <div style={this.style.follow}>
                              FOLLOW US ON
                            
                            </div>
                            
                        );
                    }
        }
        export default Follow;