import React, { Component } from 'react';
import unicode from '../images/UNICODE_LOGO.PNG';

class Head extends Component {
    state = {  }
        styles={
            h:{
                height: 114,
                width: "100%",
                background: "#FFFFFF"
            },
        }
        render() { 
        return ( 
            <div style={this.styles.h}>
                <img src={unicode} alt="Unicode logo" width="237" />
            </div>
         );
    }
}
 
export default Head;