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

    }

});



class RegCard extends Component {

    state = {  }

    styles={

        paper:{

            width: 536,
            height: 599,
            padding: "106px 276px 105px 276px",
            boxShadow: "#d6d6d6 4px 4px 16px",
            borderRadius: 10

        },
        inpLarge:{

            width: 536,
            height: 66

        },
        inpText:{

            width: 536

        },
        
        margin: {
            margin: theme.spacing.unit,
            
          },
          mymargin: {
            top: 80
          }
    }
    render() { 

        return ( 

            <div>
                <Paper style={this.styles.paper}>
                <MuiThemeProvider theme={theme}>
                <form>
                <Grid 

                container

                alignItems="center"

                alignContent="center"

                justify="center"

                >

                <Grid item xs={12}>
                <TextField

                        id="outlined-name"

                        label="First Name"

                        value={this.state.name}

                        margin="normal"

                        variant="outlined"
                        style={this.styles.inpLarge}

                        />
                        </Grid>
                        <Grid item xs={12}>
                <TextField

                        id="outlined-name"

                        label="Email"

                        value={this.state.name}

                        margin="normal"

                        variant="outlined"
                        style={this.styles.inpLarge}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        
                <TextField

                        id="name"

                        label="Enter Text Here"

                        value={this.state.name}

                        margin="normal"

                        variant="outlined"
                        multiline rows="4"
                        style={this.styles.inpText}
                        />
                        </Grid>
                        <Fab
                        variant="extended"
                        size="small"
                        color="primary"
                        aria-label="Add"
                        
                        style={this.styles.mymargin}
                        >
                        
                        SUBMIT
                        </Fab>
                        </Grid>
                        </form>

                        


                    </MuiThemeProvider>
                    </Paper>
            </div>
            );

    }

}

 

export default RegCard;

    

