import React, { Component } from 'react';

import { Grid, Avatar } from '@material-ui/core';
import {styles} from './styles/styles';
import avatar from './image/avatar.jpg';


class Mentors extends Component{
    render(){
        return(
            <Grid container
            direction="row"
            justify="center"
            alignItems="center">
                <Grid item xs={3} sm={2} md={1} lg={1} xl={1} style={styles.text} className="openSans-26-600">
                    Mentors
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={9} sm={6} md={7} lg={10} xl={10}>
                <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={32}>
                    <Grid item xs={5} sm={4} md={3} lg={1} xl={1}>
                        <Avatar alt="Jon Snow" src={avatar} style={styles.avatar} />
                    </Grid>
                    <Grid item xs={5} sm={4} md={3} lg={1} xl={1}>
                        <Avatar alt="Jon Snow" src={avatar} style={styles.avatar} />
                    </Grid>
                    <Grid item xs={5} sm={4} md={3} lg={1} xl={1}>
                        <Avatar alt="Jon Snow" src={avatar} style={styles.avatar} />
                    </Grid>
                    <Grid item xs={5} sm={4} md={3} lg={1} xl={1}>
                        <Avatar alt="Jon Snow" src={avatar} style={styles.avatar} />
                    </Grid>
                    <Grid item xs={5} sm={4} md={3} lg={1} xl={1}>
                        <Avatar alt="Jon Snow" src={avatar} style={styles.avatar} />
                    </Grid>
                    <Grid item xs={5} sm={4} md={3} lg={1} xl={1}>
                        <Avatar alt="Jon Snow" src={avatar} style={styles.avatar} />
                    </Grid>

                </Grid>
                </Grid>
            
            </Grid>
        );
    }
}
export default Mentors;