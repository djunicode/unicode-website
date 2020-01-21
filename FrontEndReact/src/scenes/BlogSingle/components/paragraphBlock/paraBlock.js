import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

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
                <ReactMarkdown source={this.props.text}></ReactMarkdown>
            </div>
         );
    }
}
 
export default ParaBlock;