import React, { Component } from 'react';

import {styles} from '../MainCard/styles/styles';
import { Grid } from '@material-ui/core';
import '../../../../css/fonts.css';
import ImageGrid from '../ImageGrid/ImageGrid';

class MainCardSmall extends Component{
    styles={
        title:{
            color: "#000",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "600"
        }
    }
    getDate=(date)=>{
        date=`${date}`
        var year=date.split("-")[0]
        return `${year}`
    }
    render() {
        return(
            <div style={styles.paper}>
                <Grid cotainer>
                    <div style={styles.info} className="openSans-24-600">
                        Info
                    </div>
                    <Grid item xs={12} 
                    style={styles.description} 
                    className="openSans-18-400"
                    >
                        {this.props.text}
                    </Grid>
                    <Grid item xs={12} style={styles.appdev} className="roboto-18-400">
                        {`${this.props.tech}`.toUpperCase()} DEVELOPMENT
                    </Grid>
                    <Grid item xs={12}>
                    <Grid container>
                    <Grid item xs={9} sm={7} md={5} lg={4} xl={4} style={styles.techno} className="openSans-18-400">
                        Techonologies: {this.props.tech}
                    </Grid>
                    <Grid item xs={9} sm={6} md={4} lg={3} xl={3} style={styles.year} className="openSans-18-400">
                        Year : {this.getDate(this.props.date)}
                    </Grid>
                    </Grid>
                    </Grid>
                    <ImageGrid 
                    img1={this.props.img1}
                    img2={this.props.img2}
                    img3={this.props.img3}
                    img4={this.props.img4}
                    img5={this.props.img5}
                    />
                </Grid>  
            </div>
        );
    }
}

export default MainCardSmall;