import React, { Component } from 'react';
import { Grid, TextField, Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
import axios from 'axios';
import MessageDialog from '../../../../components/MessageDialog/MessageDialog'

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
    state = { 
        showMessage: false,
        email: ''
     }
    style={
        text:{
            textAlign: "center"
        },
        font:{
            // fontSize: 24,
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
    handleChange=(e)=>{
        var val=e.target.value
        this.setState({email: val})
    }
    ValidateEmail=(inputText)=>{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.match(mailformat))
        {
            return true;
        }
        else
        {
            return false;
        }
     }
     reset=()=>{
            this.setState({showMessage: false})
        }
    send=async()=>{
        if(this.ValidateEmail(this.state.email)){
            var params={
                email: this.state.email
            }
            console.log(params)
            var res=await axios.post('/api/reach/newsletter-subscribe/',params)
            console.log(res.statusText)
            if(res.statusText==='Created')
            this.setState({
                showMessage: true,
                email: ''
            })
        }
        else{
            alert("Please fill all the fields with valid information")
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <MessageDialog
                reset={this.reset}
                open={this.state.showMessage}
                message={`You have been successfully subscribed for the newsletter`}
                agree="OK"
                disagree="none"
                title="Registration Successful"
                />
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
                            <Grid item xs={10} md={8} style={this.style.font} >
                            <Flip left cascade delay={500} >
                                <div style={{fontSize: `${this.props.Gwidth>960?('3.5vw'):('7vw')}`,fontWeight: '700'}} >
                                    Stay up to date. 
                                </div>
                            </Flip>
                            <br/>
                            <Flip left delay={500} >
                                <div style={{fontSize: `${this.props.Gwidth>960?('1.5vw'):('4.5vw')}`}} >
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
                                onChange={this.handleChange}
                                value={this.state.email}
                                >
                                </TextField>
                            </Bounce>
                            </Grid>
                            <Grid item xs={10} sm={8} md={3} lg={2} >
                                <Button onClick={this.send} color="primary" variant="contained" style={this.style.btnFont}>
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