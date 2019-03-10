import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Image from './components/Image/image';
import CardsMain from './components/CardsMain/CardsMain';
import MiddleText from './components/MiddleText/MiddleText';
import SelectOption from './components/Select/Select';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/footer/footer';

class Project extends Component {
    styles={
        background:{
          background: "#F8F8F8"
        },
        image: {
            padding: "0px 0px 0px 0px"
        }
      }
    render() {
        return (
            <div style={this.styles.background}>
                <Grid
                container
                
                direcion="row"
                justify="center"
                
                >
                <Grid item xs={12}>
                    <Image />
                </Grid>
                <Grid item xs={10} sm={8} md={5} >
                    <MiddleText />
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={10} sm={8} md={5}>
                    <SelectOption />
                </Grid> 
                <Grid item xs={12}>
                <Grid container justify="center" alignItems="center" style={{marginBottom: 88}}>
                <Grid item sm={11} md={9} lg={11} xl={9}>
                <CardsMain />
                </Grid>
                </Grid>
                    
                </Grid>
                <Grid item xs={5}>
                    <Pagination />
                </Grid>
                <Footer />



                </Grid>
            </div>
        );
    }
}

export default Project;