import React, { Component } from 'react';

class ParaBlock extends Component {
    state = {  }
    style={
        para:{
            fontFamily: "'Open Sans', sans-seri",
            fontWeight: 400,
            fontSize: 24,
            color: "#212121",
            lineHeight: "33px",
            marginTop: 30,
            marginBottom: 30
        }
    }
    render() { 
        return ( 
            <div style={this.style.para} >
                {this.props.text}
            </div>
         );
    }
}
 
export default ParaBlock;