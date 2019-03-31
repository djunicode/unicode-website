import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ProjTile from './components/ProjTile/ProjTile';
import Pagination from '../Pagination/Pagination';
import Flip from 'react-reveal/Flip';

class ProjSection extends Component {
    state = { 
        Gwidth: 1
     }
    style={
        OutterItem:{
            padding: "8% 4%"
        },
        font:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "600",
            fontSize: 36,
            color: "#FFFFFF",
            lineHeight: "49px",
            textAlign: "left",
            borderBottom: "solid 2px white",
            paddingBottom: 6,
            paddingRight: 8,
            letterSpacing: "0.080em"
        }
    }
    render() { 
        return ( 
            <Grid
            container
            direction="row"
            justify="center"
            >
                <Grid item xs={11} sm={11} md={12} lg={10} style={this.style.OutterItem} >
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    >
                        <Grid item xs={12} style={{paddingBottom: 6}} >
                        <Flip left cascade delay={200} >
                            <span style={this.style.font}>PROJECTS</span>
                        </Flip>
                        </Grid>
                        <Grid item xs={12} style={{padding: "2%"}} >
                            
                        </Grid>
                        <Grid item xs={12}>
                            <Grid
                            container
                            direction="row"
                            justify="center"
                            >
                                <Pagination />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
         );
    }
}
 
export default ProjSection;