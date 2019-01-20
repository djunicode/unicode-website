import {createMuiTheme} from '@material-ui/core';

export const EventName=createMuiTheme({
    palette:{
        primary:{
            main: "#FFFFFF"
        },
        secondary:{
            main: "#000000"
        }
    }
});

export const tabTheme=createMuiTheme(
    {
        overrides:{
            // Overrides appbar
            MuiAppBar: {
                root: {
                    height: 114,
                    boxShadow: "#FFFFFF 0px 0px 0px"
                }
              },
              MuiToolbar: {
                root: {
                    height: 114
                }
              },
              MuiButtonBase:{
                  root:{
                    "&:hover": {
                        // backgroundColor: "#000000",
                        color: "#C1D37F"
                    },
                    "&:active": {
                        // backgroundColor: "#000000",
                        color: "#fff"
                    }
                  }
              },
              MuiTab:{
                  root:{
                    // This is the syntax to override mediaQuery
                    ['@media (min-width:960px)']:{
                        minWidth: 10
                    },
                    
                  },
                  selected:{
                      color: "#C1D37F"
                  }
              }
        },
        // Theme- used for giving color 
        palette:{
            primary:{
                main: "#fff"
            },
            secondary:{
                main: "#FFFFFF"
            }
        }
    }
);