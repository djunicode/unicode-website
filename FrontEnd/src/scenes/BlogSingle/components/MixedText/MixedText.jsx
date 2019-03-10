import React, { Component } from 'react';

class MixedText extends Component {
    state = {  }
    style={
        
        bold:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "600",
            width: "100%",
            fontSize: "28px",
            color: "#4c4c4c0",
            lineHeight: "33px",
            opacity: "0.7",
            // marginTop: 10
        },
        norm:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "400",
            fontSize: 24,
            color: "#212121",
            lineHeight: "33px",
            // marginTop: 60
        },
        italic:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "400",
            fontStyle: "italic",
            fontSize: 24,
            color: "#000",
            lineHeight: "33px"
            // marginTop: 30,
            // marginBottom: 30,
        }
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <div style={{marginTop:20,marginBottom:20}} >
                <span style={this.style.bold} >Take Headspace, for example.</span>
                <span style={this.style.norm} >The popular app’s landing page is not only visually striking, but it also makes it clear as day what it’s all about. It eases the visitor into the experience with tunnel vision — the header and subheader supplemented by two clear calls-to-action get the value proposition across in only 15 words.</span>
                <span style={this.style.italic} >The impression of calmness and efficiency that this communicates is one of the reasons why it’s been downloaded over a million times.</span>
                </div>
            </React.Fragment>
         );
    }
}
 
export default MixedText;