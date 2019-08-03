import React, { Component } from 'react';
import { Paper,TextField, Grid,createMuiTheme ,MuiThemeProvider } from '@material-ui/core';
import {styles} from './styles/FormStyles.js'

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

    
    render() { 

        return ( 

            
                <Paper style={styles.paper}>
                <MuiThemeProvider theme={theme}>
                <form>
                <Grid 
                style={styles.card}
                container
                direction="row"
                justify="center"
                

                >

                <Grid item xs={10} sm={8} md={7} >
                <TextField

                        id="outlined-name"

                        label="First Name"

                        value={this.state.name}

                        margin="normal"
                        
                        fullWidth
                        variant="outlined"
                        style={styles.inpLarge}

                        />
                </Grid>
                <Grid item xs={10} sm={8} md={7} >
                <TextField

                        id="outlined-name"

                        label="Email"

                        value={this.state.name}

                        margin="normal"
                       
                        fullWidth
                        variant="outlined"
                        style={styles.inpLarge}
                        />
                </Grid>
                <Grid item xs={10} sm={8} md={7} >
                        
                <TextField

                        id="name"

                        label="Enter Text Here"

                        value={this.state.name}

                        margin="normal"
                    
                        fullWidth
                        variant="outlined"
                        multiline rows="4"
                        style={styles.inpText}
                        />
                        </Grid>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={4} sm={3} md={2} xl={2}>
                        
                        

                        <div style={styles.button}>
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

    

