import React, { Component } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../css/fonts.css';
import { IconButton, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme=createMuiTheme({
    palette:{
        primary:{
            main: "#FFFFFF"
        },
        secondary:{
            main: "#000000"
        }
    }
});

class ENname extends Component {
    state = {  }
    styles={
        event:{
            height: 273,
            background: "#C1D37F",
            position: "relative"
        },
        eveFont:{
            height: 33,
            color: "#FFFFFF",
            marginTop: 12,
            lineHeight: "24px"
        },
        eveNameFont:{
            height: 57,
            color: "#000000",
            position: "absolute",
            top: 172,
            left: "12.96%",
            lineHeight: "57px",
            fontSize: 42
        },
        flex:{
            display: "flex"
        },
        posiWrap:{
            display: "flex",
            marginLeft: "7.29%",
            marginTop: 49
        }
    }
    render() { 
        return ( 
            <div>
                <div style={this.styles.event}>
                    <div style={this.styles.flex}>
                        <div style={this.styles.posiWrap}>
                            <MuiThemeProvider theme={theme}>
                                <IconButton color="primary" >
                                    <ArrowBackIcon />
                                </IconButton>
                            </MuiThemeProvider>
                            <div 
                            className="openSans-24-700"
                            style={this.styles.eveFont}
                            >
                                <div>
                                    Events
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div 
                    style={this.styles.eveNameFont}
                    className="openSans-24-600"
                    >
                        Event Name
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ENname;