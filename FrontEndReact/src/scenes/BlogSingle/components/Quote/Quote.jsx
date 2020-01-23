import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

class Quote extends Component {
    state = {  }
    style={
        quote:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "400",
            fontStyle: "italic",
            fontSize: 26,
            color: "#000",
            lineHeight: "36px",
            marginTop: 30,
            marginBottom: 30,
            borderLeft: "3px solid #FF7171 "
        }
    }
    
    render() { 
        return ( 
            <Grid item xs={11} style={this.style.quote} >
                <Grid
                container
                direction="row"
                justify="center"
                >
                    <Grid item xs={11}>
                    {/* <Fade cascade> */}
                        {this.props.text}
                    {/* </Fade> */}
                    </Grid>
                </Grid>
            </Grid>
         );
    }
}
 
export default Quote;