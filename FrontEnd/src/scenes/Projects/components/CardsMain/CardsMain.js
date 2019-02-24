import React, { Component } from 'react';
import {Paper, Grid} from '@material-ui/core';
import Cards from '../Cards/Cards';

class CardsMain extends Component{
    render() {
        return (
            <div>
                <Grid container justify="center" alignItems="center" spacing={40} style={{width: "100%"}}>
                    <Grid item xs={10} sm={12} md={11} lg={6} xl={6}>
                        <Cards />
                    </Grid>
                    <Grid item xs={10} sm={12} md={11} lg={6} xl={6}>
                        <Cards />
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={10} sm={12} md={11} lg={6} xl={6}>
                        <Cards />
                    </Grid>
                    <Grid item xs={10} sm={12} md={11} lg={6} xl={6}>
                        <Cards />
                    </Grid> 
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={10} sm={12} md={11} lg={6} xl={6}>
                        <Cards />
                    </Grid>
                    <Grid item xs={10} sm={12} md={11} lg={6} xl={6}>
                        <Cards />
                    </Grid> 
                    <Grid item xs={12}>
                    </Grid>
                    <Grid item xs={10} sm={12} md={11} lg={6} xl={6}>
                        <Cards />
                    </Grid>
                    <Grid item xs={10} sm={12} md={11} lg={6} xl={6}>
                        <Cards />
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default CardsMain;