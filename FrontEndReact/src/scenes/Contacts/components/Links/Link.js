import React, { Component } from 'react';
import { Avatar, Grid, Tooltip } from '@material-ui/core';
import GitHub from '../../../../components/footer/images/GB1.png';
import LinkedIn from '../../../../components/footer/images/LB1.png';
import Twitter from '../../../../components/footer/images/TB1.png';

class Links extends Component {
    state = {  }
    styles={
        logo:{
            objectFit: 'contain',
            width: '80%',
            height: '80%'
        }
    }
    render() { 
        return ( 
            <React.Fragment style={{background: "#eee"}} >
                <Grid
                container
                direction="row"
                justify="center"
                // style={{paddingBottom: "14%"}}
                >
                    <Grid item xs={4} md={3} lg={2} style={{padding: '5%'}} >
                    <Tooltip title="GitHub">
                        <a href="https://github.com/djunicode">
                            <img style={this.styles.logo} src={GitHub} ></img>
                        </a>
                    </Tooltip>
                    </Grid>
                    <Grid item xs={4} md={3} lg={2} style={{padding: '5%'}} >
                    <Tooltip title="Linked In">
                        <a href="https://www.linkedin.com/company/djunicode/about/">
                            <img style={this.styles.logo} src={LinkedIn} ></img>
                        </a>
                    </Tooltip>
                    </Grid>
                    <Grid item xs={4} md={3} lg={2} style={{padding: '5%'}} >
                    <Tooltip title="Twitter">
                        <a href="https://twitter.com/djunicode?s=08">
                            <img style={this.styles.logo} src={Twitter} ></img>
                        </a>
                    </Tooltip>
                    </Grid>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default Links;