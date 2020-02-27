import React, { Component } from 'react';
import { Paper, Grid, Button } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import PriceButton from './priceBtn';

class Card extends Component {
    state = {  }

    styles={
        Nlink:{
            textDecoration: "none",
            // "&:active": {
            //     color: "#C1D37F"
            // }
        }
    }
    
    render() { 
        return ( 
            <Paper>
                <Grid 
                container
                direction="row"
                justify="center"
                style={{margin: 0}}
                spacing={40}
                >
                    <Grid item xs={3}>
                        <img src="https://picsum.photos/300/220" width="100%" alt="#"/>
                    </Grid>

                    <Grid item xs={5}>
                        <div>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <Grid 
                        container
                        direction="row"
                        justify="center"
                        spacing={40}
                        style={{height: "100%",width: "100%"}}
                        >
                            <Grid item xs={8}>
                                <Button variant="contained" style={{width: "54%"}}>50</Button>
                            </Grid>
                            <Grid item xs={8}>
                            <NavLink to="/EventSingle" style={this.styles.Nlink} >
                                <Button variant="outlined" style={{width: "60%"}}>View</Button>
                            </NavLink>
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
            </Paper>
         );
    }
}
 
export default Card;