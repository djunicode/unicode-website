import React, { Component } from 'react';
import { Paper, Grid, TextField, Fab } from '@material-ui/core';

class MyCard extends Component {
    state = {  }
    styles={
        input:{
            marginTop: 21,
            marginBottom: 21,
            maxWidth: 536
        }
    }
    render() { 
        return ( 


            <Paper>

                <Grid
                style={{paddingTop: 94}}
                container
                direction="row"
                justify="center"
                >

                    {/* TextField--1 */}
                    <Grid item xs={7}> 
                    <TextField
                    
                    id="outlined-name"
                    label="Name"
                    style={this.styles.input}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>

                    {/* TextField--2 */}
                    <Grid item xs={7}>
                    <TextField
                    id="outlined-name"
                    label="Name"
                    style={this.styles.input}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>

                    {/* TextField--3 */}
                    <Grid item xs={7}>
                    <TextField
                    id="outlined-name"
                    label="Name"
                    style={this.styles.input}
                    fullWidth
                    multiline
                    rows="8"
                    margin="normal"
                    variant="outlined"
                    />
                    </Grid>

                    {/* Button */}
                    <Grid item xs={6}>
                        <div style={{textAlign: "center"}}>
                            Submit
                            {/* Insert a buuton here */}
                        </div>
                    </Grid>

                </Grid>
            </Paper>
         );
    }
}
 
export default MyCard;