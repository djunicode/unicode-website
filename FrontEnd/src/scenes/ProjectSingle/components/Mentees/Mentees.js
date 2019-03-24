import React, { Component } from 'react';
import {styles} from '../Mentors/styles/styles';
import { Grid, Avatar } from '@material-ui/core';
import avatar from '../Mentors/image/avatar.jpg';

class Mentees extends Component{
    render(){
        return(
            <Grid container
            direction="row"
            justify="center"
            alignItems="center">
                <Grid item xs={3} sm={2} md={1} lg={1} xl={1} style={styles.text} className="openSans-26-600">
                    Mentees
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={9} sm={6} md={7} lg={11} xl={11}>
                <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={32}
                style={{marginBottom:131,width:"100%",margin: "0 0 131px 0"}}>
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

export default Mentees;