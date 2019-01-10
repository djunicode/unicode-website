import React, { Component } from 'react';
import H from './components/header';
import EventN from './components/EventName';
import Info from './components/infoCard';
import Reg from './components/regCard';
import L from './components/lowerText';
import F from './components/footer';
import { Grid } from '@material-ui/core';


class SamplePage extends Component {
    state = {  }
    styles={
        grid:{
            padding: 0,
            margin: 0,
            width: 1920
        }
    }
    render() { 
        return ( 
            <div>
                <H />
                <EventN />
                <div>
                   <Grid
                   style={this.styles.grid}
                   container
                   direction="row"
                   justify="center"
                   spacing={24}
                   >
                        <Grid item>
                            <Info />
                        </Grid>

                        <Grid item>
                            <Reg />
                        </Grid>

                   </Grid> 
                </div>
            </div>
         );
    }
}
 
export default SamplePage;