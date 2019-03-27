import React, { Component } from 'react';
import ProjectName from './components/ProjectName/ProjectName';
import MainCard from './components/MainCard/MainCard';
import Mentors from './components/Mentors/Mentors';
import Mentees from './components/Mentees/Mentees';
import Footer from '../../components/footer/footer';

import { Grid } from '@material-ui/core';


class ProjectSingle extends Component {
    styles={
        background:{
          background: "#F8F8F8"
        },
        teamName:{
            color:"#445DFF",
            fontSize: 42,
            marginTop: 91.34
        }
        // image: {
        //     padding: "0px 0px 0px 0px"
        // }

      }
    render() {
        return (
            <div style={this.styles.background}>
                <Grid
                container
                alignItems="center"
                direcion="row"
                justify="center"
                
                >
                <Grid item xs={12}>
                <ProjectName />
                </Grid>
                <Grid item xs={8}>
                    <MainCard />
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={3} sm={2} md={1} lg={1} xl={1} style={this.styles.teamName} className="openSans-26-600">
                    Team
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <Mentors />
                </Grid>
                
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <Mentees />
                </Grid>
                <Footer />
                </Grid>
            </div>
        )
    }
}
export default ProjectSingle;
