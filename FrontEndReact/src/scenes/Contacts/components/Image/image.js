import React, { Component } from 'react';
import telephone from './contact-with-text.png';
import {styles} from './styles/ImageStyles.js'
import { Grid } from '@material-ui/core';
import GIT from './GIT.png';
import PHONE from './PHONE.png';
class image extends Component {

    style={
        centeringGIT:{
            marginLeft: "8%",
            paddingTop: "6%"
        },
        centeringPHONE:{
            marginLeft: "50%",
            transform: "translateX(-50%)",
            paddingTop: "6%"
        },
        centeringTEXT:{
            width: "100%",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            paddingTop: "6%",
            paddingBottom: "10%"
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div style={{background: "#FFE99B"}} >
                    <img src={GIT} alt="#" width="84%"
                    style={this.style.centeringGIT}
                    />
                    <img src={PHONE} alt="BlogImage" width="23%" 
                    style={this.style.centeringPHONE}
                    />
                    <div
                    style={this.style.centeringTEXT}
                    >
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        >
                            <Grid item xs={11} sm={10} md={6} style={{textAlign: "center"}} >
                                lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </React.Fragment>
            // <div style={styles.container}>
            // <img src={telephone}  width="100%" />
            // <div style={styles.centered}>
            // lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            // </div>
            
            // </div>
        );
    }
}

export default image;