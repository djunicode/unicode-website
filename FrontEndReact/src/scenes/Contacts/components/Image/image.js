import React, { Component } from 'react';
import telephone from './contact-with-text.png';
import {styles} from './styles/ImageStyles.js'
import { Grid } from '@material-ui/core';
import GIT from './GIT.png';
import PHONE from './PHONE.png';
import MediaQuery from 'react-responsive';
class image extends Component {

    style={
        centeringGIT:{
            marginLeft: "8%",
            paddingTop: "6%",
            marginLeft: '16%'
            // transform: 'translateX(-50%)'
        },
        centeringPHONE:{
            marginLeft: "50%",
            transform: "translateX(-50%)",
            paddingTop: "4%"
        },
        centeringTEXT:{
            width: "100%",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            paddingTop: "6%",
            paddingBottom: "4%"
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div style={{background: "#FFE99B"}} >
                    <MediaQuery maxWidth={770} >
                        <img src="http://bagwesagar6699.pythonanywhere.com//static/frontend/88fe8459ed91563b7c22945ff151500d.png" alt="#" width="70%"
                        style={this.style.centeringGIT}
                        />
                    </MediaQuery>
                    <MediaQuery minWidth={771} >
                        <img src="http://bagwesagar6699.pythonanywhere.com//static/frontend/88fe8459ed91563b7c22945ff151500d.png" alt="#" width="44%"
                        style={{
                            marginLeft: "8%",
                            paddingTop: "6%",
                            marginLeft: '28%'
                            // transform: 'translateX(-50%)'
                        }}
                        />
                    </MediaQuery>
                    <MediaQuery maxWidth={770} >
                        <img src="http://bagwesagar6699.pythonanywhere.com//static/frontend/6b5994e8d05a577d417834cfff387292.png" alt="BlogImage" width="33%" 
                        style={this.style.centeringPHONE}
                        />
                    </MediaQuery>
                    <MediaQuery minWidth={771} >
                        <img src="http://bagwesagar6699.pythonanywhere.com//static/frontend/6b5994e8d05a577d417834cfff387292.png" alt="BlogImage" width="10%" 
                        style={this.style.centeringPHONE}
                        />
                    </MediaQuery>
                    <div
                    style={this.style.centeringTEXT}
                    >
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        >
                            <Grid item xs={11} sm={10} md={6} style={{textAlign: "center", fontFamily: "'Montserrat', sans-serif"}} >
                                Want to get in touch? Give us a shout on our social media handles or drop in a mail and subscribe to our newsletter.
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default image;