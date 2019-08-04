import React, { Component } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import GitHub from '../../../../components/footer/images/GB1.png';
import LinkedIn from '../../../../components/footer/images/LB1.png';
import Twitter from '../../../../components/footer/images/TB1.png';

class Links extends Component {
    state = {  }
    styles={
        logo:{
            objectFit: 'contain',
            width: '100%',
            height: '100%'
        }
    }
    render() { 
        return ( 
            <React.Fragment style={{background: "#eee"}} >
                <Grid
                container
                direction="row"
                justify="center"
                style={{paddingBottom: "14%"}}
                >
                    <Grid item xs={4} md={3} lg={2} style={{padding: '5%',height: '18vh'}} >
                        <a href="#">
                            <img style={this.styles.logo} src={GitHub} ></img>
                        </a>
                    </Grid>
                    <Grid item xs={4} md={3} lg={2} style={{padding: '5%',height: '18vh'}} >
                        <a href="#">
                            <img style={this.styles.logo} src={LinkedIn} ></img>
                        </a>
                    </Grid>
                    <Grid item xs={4} md={3} lg={2} style={{padding: '5%',height: '18vh'}} >
                        <a href="#">
                            <img style={this.styles.logo} src={Twitter} ></img>
                        </a>
                    </Grid>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default Links;