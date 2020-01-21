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
            fontSize: `${this.props.Gwidth>960?('1.5vw'):('3vw')}`,
            color: "#FFFFFF",
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
                    <Grid item xs={3} sm={4}
                    style={{textAlign: "center",padding: `${this.props.Gwidth>960?('1%'):('4%')}`}}
                    >
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        style={this.style.font}
                        >
                            <Grid item xs={6} >
                            <Bounce left delay={400} >
                                <span style={{fontSize: `${this.props.Gwidth>960?('3vw'):('6vw')}`,}} >160+</span>
                                <br/>
                                <div style={{height: 0}} ></div>
                                members
                            </Bounce>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} sm={4}
                    style={{textAlign: "center",padding: `${this.props.Gwidth>960?('1%'):('4%')}`}}
                    >
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        style={this.style.font}
                        >
                            <Grid item xs={6}>
                            <Bounce left delay={400} >
                            <span style={{fontSize: `${this.props.Gwidth>960?('3vw'):('6vw')}`,}} >450+</span>
                            <br/>
                            <div style={{height: 0,lineHeight: "0px",}} ></div>
                            pull requests
                            </Bounce>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} sm={4}
                    style={{textAlign: "center",padding: `${this.props.Gwidth>960?('1%'):('4%')}`}}
                    >
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        style={this.style.font}
                        >
                            <Grid item xs={6}>
                            <Bounce left delay={400} >
                            <span style={{fontSize: `${this.props.Gwidth>960?('3vw'):('6vw')}`,}} >10</span>
                            <br/>
                            <div style={{height: 0}} ></div>
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