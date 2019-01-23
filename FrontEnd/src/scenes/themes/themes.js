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

export const theme=createMuiTheme(
    {
        overrides:{
            // Overrides appbar
            MuiAppBar: {
                root: {
                //   height: 114,
                  boxShadow: "#FFFFFF 0px 0px 0px"
                }
              },
            //   Overrides button
            MuiButton:{
                root:{
                    paddingTop: "46px",
                    paddingLeft: "33px",
                    "&:hover": {
                        backgroundColor: "#fff",
                        color: "#C1D37F"
                    }
                },
            },
        },
        // Theme- used for giving color 
        palette:{
            primary:{
                main: "#000"
            },
            secondary:{
                main: "#C1D37F"
            }
        }
    }
);