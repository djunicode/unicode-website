import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import CardGrid from './components/CardGrid/CardGrid';
import Flip from 'react-reveal/Flip';

class CardHolder extends Component {
    state = {  }
    style={
        font:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "700",
            fontSize: 36,
            color: "#445DFF",
            lineHeight: "49px",
            textAlign: "center",
            paddingBottom: "5%",
            letterSpacing: "0.08em"
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Grid
                container
                direction="row"
                justify="center"
                >
                    <Grid item xs={12} style={this.style.font} >
                        <Flip left cascade >
                            Why people love us
                        </Flip>
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12} sm={8} >
                        <CardGrid />
                    </Grid>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default CardHolder;