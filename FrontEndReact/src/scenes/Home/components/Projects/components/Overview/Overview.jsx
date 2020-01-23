import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Bounce from 'react-reveal/Bounce';

class Overvview extends Component {
    state = {  }
    style={
        OutterItem:{
            padding: "4% 0%",
            background: "#445DFF"
        },
        font:{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "600",
            width: "100%",
            fontSize: 30,
            color: "#FFFFFF",
            lineHeight: "29px",
            textAlign: "left"
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Grid
                container
                direction="row"
                justify="center"
                style={this.style.OutterItem}
                >
                    <Grid item xs={7} sm={4}
                    style={{textAlign: "center",padding: "4%"}}
                    >
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        style={this.style.font}
                        >
                            <Grid item xs={6} >
                            <Bounce left delay={400} >
                                <span style={{fontSize: 60}} >120+</span>
                                <br/>
                                <div style={{height: 10}} ></div>
                                members
                            </Bounce>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={7} sm={4}
                    style={{textAlign: "center",padding: "4%"}}
                    >
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        style={this.style.font}
                        >
                            <Grid item xs={6}>
                            <Bounce left delay={400} >
                            <span style={{fontSize: 60}} >120+</span>
                            <br/>
                            <div style={{height: 10}} ></div>
                            pull requests
                            </Bounce>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={7} sm={4}
                    style={{textAlign: "center",padding: "4%"}}
                    >
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        style={this.style.font}
                        >
                            <Grid item xs={6}>
                            <Bounce left delay={400} >
                            <span style={{fontSize: 60}} >20</span>
                            <br/>
                            <div style={{height: 10}} ></div>
                            projects
                            </Bounce>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default Overvview;