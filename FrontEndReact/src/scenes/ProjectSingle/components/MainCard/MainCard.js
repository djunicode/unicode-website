import React, { Component } from 'react';

import {styles} from '../../components/MainCard/styles/styles';
import { Grid } from '@material-ui/core';
import '../../../../css/fonts.css';
import ImageGrid from '../ImageGrid/ImageGrid';

class MainCard extends Component{
    render() {
        return(
            
            <div style={styles.paper}>
                <Grid cotainer>
                    {/* <ImageGrid /> */}
                    <div style={styles.info} className="openSans-24-600">
                        INFO
                    </div>
                    <Grid item xs={12} 
                    style={styles.description} 
                    className="openSans-18-400"
                    >
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                    </Grid>
                    <Grid item xs={12} style={styles.appdev} className="roboto-18-400">
                        APP DEVELOPMENT
                    </Grid>
                    <Grid item xs={12}>
                    <Grid container>
                    <Grid item xs={9} sm={7} md={5} lg={4} xl={4} style={styles.techno} className="openSans-18-400">
                        Techonologies: Java
                    </Grid>
                    <Grid item xs={9} sm={6} md={4} lg={3} xl={3} style={styles.year} className="openSans-18-400">
                        Year:2018
                    </Grid>
                    </Grid>
                    </Grid>

                    
                        <ImageGrid />
                    
                </Grid>  
            </div>
        );
    }
}

export default MainCard;