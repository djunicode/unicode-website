import React, { Component } from 'react';
import { Grid, TextField, Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';

const Blue=createMuiTheme(
    {
        palette:{
            primary:{
                main: "#445DFF"
            },
            secondary:{
                main: "#445DFF"
            }
        }


    }
);

class Subscribe extends Component {
    state = {  }
    style={
        text:{
            textAlign: "center"
        },
        font:{
            fontSize: 24,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            letterHeight: "33px",
            textAlign: "center",
            color: "#445DFF"
        },
        btnFont:{
            fontSize: 18,
            // padding: "10% 20%",
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600,
            letterHeight: "32px",
            letterSpacing: "0.080em",
            textAlign: "center",
            height: "100%",
            width: "100%"
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <MuiThemeProvider theme={Blue}>
                <Grid
                container
                direction="row"
                justify="center"
                >
                    <Grid item xs={12}>
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        spacing={32}
                        style={{width: "100%",margin: 0}}
                        >
                            <Grid item xs={10} md={5} style={this.style.font} >
                            <Flip left cascade delay={500} >
                                <div style={{fontSize: 50,fontWeight: 700}} >
                                    Stay up to date. 
                                </div>
                            </Flip>
                            <br/>
                            <br/>
                            <Flip left cascade delay={500} >
                                <div>
                                    Get notified about company news, updates and be the first get early access to the faster, simpler and smarter way of presenting.
                                </div>
                            </Flip>
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={10} sm={8} md={8} lg={4} >
                            <Bounce left cascade>
                                <TextField
                                variant="outlined"
                                label="Email"
                                fullWidth
                                margin="none"
                                >
                                </TextField>
                            </Bounce>
                            </Grid>
                            <Grid item xs={10} sm={8} md={3} lg={2} >
                                <Button color="primary" variant="contained" style={this.style.btnFont}>
                                <Flip right cascade>
                                    Subscribe
                                </Flip>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </MuiThemeProvider>
            </React.Fragment>
         );
    }
}
 
export default Subscribe;