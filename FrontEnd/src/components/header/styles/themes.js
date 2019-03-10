import {createMuiTheme} from '@material-ui/core';



// --------This file contains themes for the header--------




//This theme will give navbar height and color
export const navTheme=createMuiTheme(
    {

        overrides:{
            // Gives height
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
              }
        },


        //Gives color 
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


//This theme will give proper size for each tab and
//yellow color to that particular tab
export const tabYellow=createMuiTheme(
    {
        overrides:{
            //Gives color
              MuiButtonBase:{
                  root:{
                    "&:hover": {
                        color: "#FFE99B"
                    }
                  }
              },
              MuiTab:{
                  root:{
                    //Gives proper size
                    ['@media (min-width:960px)']:{
                        minWidth: 10
                    },
                    
                  }
              }
        }
    }
);


//This theme will give proper size for each tab and
//green color to that particular tab
export const tabGreen=createMuiTheme(
    {
        overrides:{
            //Gives color
              MuiButtonBase:{
                  root:{
                    "&:hover": {
                        color: "#C1D37F"
                    }
                  }
              },
              MuiTab:{
                  root:{
                    //Gives proper size
                    ['@media (min-width:960px)']:{
                        minWidth: 10
                    },
                    
                  }
              }
        }
    }
);

export const tabPink=createMuiTheme(
    {
        overrides:{
            //Gives color
              MuiButtonBase:{
                  root:{
                    "&:hover": {
                        color: "#FF7171"
                    }
                  }
              },
              MuiTab:{
                  root:{
                    //Gives proper size
                    ['@media (min-width:960px)']:{
                        minWidth: 10
                    },
                    
                  }
              }
        }
    }
);