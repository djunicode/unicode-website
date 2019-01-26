import React, { Component } from 'react';
import { Paper,TextField, Grid, Button,createMuiTheme ,MuiThemeProvider } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';

const theme=createMuiTheme({
    palette:{
        primary:{
            main: "#445DFF"
        },
        secondary:{
            main: "#C1D37F"
        }

    },
    overrides: {
        MuiButton: {
            root: {
                backGround: "#C1D37F",
                borderRadius: 1000,
                
            },
            contained: {
                padding: "11.1px 0px 10.9px 0px",
                marginBottom: 91.27,
                paddingLeft: "50%",
                paddingRight: "50%"
            }
        }
    }

});



class RegCard extends Component {

    state = {  }

    styles={

        // paper:{

        //     width: "49%",
        //     height: 599,
        //     padding: "106px 0 105px 0",
        //     paddingLeft: "14.4%",
        //     paddingRight: "14.4%",

        

        //     boxShadow: "#d6d6d6 4px 4px 16px",
        //     borderRadius: 10,
        //     marginBottom: 120,
        //     marginLeft: "50%",
        //     transform: "translateX(-50%)",
        //     marginTop: 196.9,

        // },
        inpLarge:{

            // width: "28%",
            height: 66,
            //maxWidth: 536

        },
        inpText:{

            //width: "28%",
            //maxWidth: 536

        },
        
        margin: {
            margin: theme.spacing.unit,
            
          },
          mymargin: {
            marginTop: 90,
            padding: "11.1px 0px 10.9px 0px",
            paddingLeft: "2.3%",
            paddingRight: "2.3%"
            
          },
          space: {
              marginTop: 196.9,
            
          },
          button: {
              borderRadius: 100,
              background: "#445DFF",
              color: "#FFFFFF",
              textAlign: "center",
              fontFamily: "Open Sans, sans-serif",
              paddingBottom: 9,
              paddingTop: 9,
              marginTop: 91.27,
              minWidth: 73
              
          }
    }
    render() { 

        return ( 

            // <div style={this.styles.space}>
                <Paper style={{marginBottom: 120}}>
                <MuiThemeProvider theme={theme}>
                <form>
                <Grid 
                style={{paddingTop: 106,paddingBottom: 105}}
                container
                direction="row"
                justify="center"
                

                >

                <Grid item xs={7}>
                <TextField

                        id="outlined-name"

                        label="First Name"

                        value={this.state.name}

                        margin="normal"
                        //maxWidth="536"
                        fullWidth
                        variant="outlined"
                        style={this.styles.inpLarge}

                        />
                </Grid>
                <Grid item xs={7}>
                <TextField

                        id="outlined-name"

                        label="Email"

                        value={this.state.name}

                        margin="normal"
                       // maxWidth="536"
                        fullWidth
                        variant="outlined"
                        style={this.styles.inpLarge}
                        />
                </Grid>
                <Grid item xs={7}>
                        
                <TextField

                        id="name"

                        label="Enter Text Here"

                        value={this.state.name}

                        margin="normal"
                        //maxWidth="536"
                        fullWidth
                        variant="outlined"
                        multiline rows="4"
                        style={this.styles.inpText}
                        />
                        </Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={3}>
                        
                         {/* <Fab
                        variant="extended"
                        size="small"
                        color="primary"
                        aria-label="Add"
                        
                        style={this.styles.mymargin}
                        >
                        
                        SUBMIT
                        </Fab> */}

                        <div style={this.styles.button}>
                            SUBMIT
                        </div>
                        </Grid> 
                        </Grid>
                        </form>

                        


                    </MuiThemeProvider>
                    </Paper>
            // </div>
            );

    }

}

 

export default RegCard;

    

