import React, { Component } from 'react';
import unicode from '../images/UNICODE_LOGO.PNG';
import { AppBar, Toolbar , createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme=createMuiTheme(
    {
        overrides:{
            MuiAppBar: {
                root: {
                  height: 114,
                  boxShadow: "#FFFFFF 0px 0px 0px"
                }
              }
        },
        palette:{
            primary:{
                main: "#FFFFFF"
            },
            secondary:{
                main: "#C1D37F"
            }
        }
    }
);



class Head extends Component {
    state = { 
        color: "secondary"
     }
    styles = {
        root: {
          flexGrow: 1,
        },
        logo:{
            position: "absolute",
            top: 34,
            left: "9.32%"
        },
        grow: {
          flexGrow: 1,
        },
        flex: {
            marginRight: 162,
            display: "flex",
            width: "100%",
            justifyContent: "flex-end"
        },
        btn:{
            marginLeft: 33,
            marginTop: 46,
            padding: 0
        }
      };
      handleBtn=()=>{
          
      }
        render() { 
            console.log(theme);
        return ( 
            <div>
                <MuiThemeProvider theme={theme}>
                <AppBar 
                position="fixed"
                color="primary" >
                    <Toolbar >
                        <img src={unicode} alt="logo" style={this.styles.logo} width="237px" />
                        <div style={this.styles.flex}>
                        </div>
                    </Toolbar>
                </AppBar>
                </MuiThemeProvider>
            </div>
         );
    }
}
 
export default Head;