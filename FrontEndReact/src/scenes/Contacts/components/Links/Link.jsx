import React, { Component } from 'react';
import { Avatar, Grid } from '@material-ui/core';

class Links extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment style={{background: "#eee"}} >
                <Grid
                container
                direction="row"
                justify="center"
                style={{paddingTop:"10%",paddingBottom: "14%"}}
                >
                    <Grid item xs={4} md={3} style={{padding: 10}} >
                        <img src="https://picsum.photos/200/200" width="100%" ></img>
                    </Grid>
                    <Grid item xs={4} md={3} style={{padding: 10}} >
                        <img src="https://picsum.photos/200/200" width="100%" ></img>
                    </Grid>
                    <Grid item xs={4} md={3} style={{padding: 10}} >
                        <img src="https://picsum.photos/200/200" width="100%" ></img>
                    </Grid>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default Links;