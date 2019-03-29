import React, { Component } from 'react';
import { Grid, Tooltip } from '@material-ui/core';
import gitHub from './images/G1.png';
import linkedIn from './images/L1.png';
import twitter from './images/T1.png';
import CCC from '../footer/images/3C.PNG';

class Footer2 extends Component {
    state = {  }
    styles={
        grid:{
            paddingTop: "10%",
            paddingBottom: "5%",
            width: "100%",
            margin: 0
        },
        background:{
            background: "#445DFF",
            backgroundImage: `url(${CCC})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            backgroundPosition: "center bottom"
        },
        text:{
            textDecoration: "none",
            color: "#FFFFFF",
            opacity: "0.5"
        },
        textLower:{
            color: "#FFFFFF",
            opacity: "0.5",
            textAlign: "center"
        },
        img:{
            opacity: "0.71"
        }
    }
    render() { 
        return ( 
            <Grid
            container
            direction="row"
            justify="center"
            style={this.styles.background}
            >
                <Grid item xs={12} sm={12} md={3} style={this.styles.grid} >
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    spacing={16}
                    style={{width: "100%"}}
                    >
                        <Grid item >
                        <Tooltip title="Twitter">
                            <img src={twitter} alt="#" style={this.styles.img} width="32px" />
                        </Tooltip>
                        </Grid>
                        <Grid item >
                        <Tooltip title="LinkedIn">
                            <img src={linkedIn} alt="#" style={this.styles.img} width="32px" />
                        </Tooltip>
                        </Grid>
                        <Grid item >
                        <Tooltip title="GitHub">
                            <img src={gitHub} alt="#" style={this.styles.img} width="32px" />
                        </Tooltip>
                        </Grid>
                        <Grid item xs={12} >
                        
                        </Grid>
                        <Grid item >
                            <a href="/AboutUS" style={this.styles.text} >ABOUT US</a>
                        </Grid>
                        <Grid item >
                            <a href="/Projects" style={this.styles.text} >PROJECTS</a>
                        </Grid>
                        <Grid item >
                            <a href="/Events" style={this.styles.text} >EVENTS</a>
                        </Grid>
                        <Grid item >
                            <a href="/Blog" style={this.styles.text} >BLOG</a>
                        </Grid>
                        <Grid item xs={12} >
                        
                        </Grid>
                        <Grid item style={this.styles.textLower} xs={12} >
                        © 2017-2018 All Rights Reserved
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
         );
    }
}
 
export default Footer2;