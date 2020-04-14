import React, { Component } from 'react';

class LowerText extends Component {
    state = {  }
    styles={
        container:{
            // height: 196,
            maxWidth: 1364,
            fontSize: 20,
            letterHeight: "27px",
            marginBottom: 256,
            marginTop: 160
        }
    }
    render() { 
        return ( 
            <div 
            style={this.styles.container}
            className="openSans-18-400"
            >
                
            </div>
         );
    }
}
 
export default LowerText;