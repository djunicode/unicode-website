import React, { Component } from 'react';
import { Paper,TextField, Grid,createMuiTheme ,MuiThemeProvider } from '@material-ui/core';


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

        paper:{

        
             marginBottom: 120,
             boxShadow: "4px 4px 16px #d6d6d6"
        

        },
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
              
          },
          card: {
            paddingTop: 106,
            paddingBottom: 105
          }
    }
    render() { 

        return ( 

            
                <Paper style={this.styles.paper}>
                <MuiThemeProvider theme={theme}>
                <form>
                <Grid 
                style={this.styles.card}
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
                    
                        fullWidth
                        variant="outlined"
                        multiline rows="4"
                        style={this.styles.inpText}
                        />
                        </Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={3}>
                        
                        

                        <div style={this.styles.button}>
                            SUBMIT
                        </div>
                        </Grid> 
                        </Grid>
                        </form>

                        


                    </MuiThemeProvider>
                    </Paper>
            
            );

    }

}

 

export default RegCard;

    

