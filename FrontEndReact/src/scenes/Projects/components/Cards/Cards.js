import React, { Component } from 'react';
import {Paper, Grid, MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import '../../../../css/fonts.css';
import {styles} from './styles/styles';
import Image from './CardImage.PNG';

const theme = createMuiTheme({
    breakpoints: {
      values: {
        md: 770
      }
    }
  });

class Card extends Component {
    render() {
        return (
            <Grid item xs={12} sm={12} md={11} lg={7} xl={6}>
            <MuiThemeProvider theme={theme} >
            <Paper style={styles.paper}>
                <Grid container spacing={32} justify="center" alignItems="center">
                    <Grid item xs={12} sm={11} md={4} lg={4} xl={4}>
                        <img src={Image} alt="ProjectImage" style={styles.image} />
                    </Grid>
                    <Grid item xs={12} sm={11} md={8} lg={8}>
                        <div className="openSans-18-400" style={styles.title}>
                            PROJECT TITLE
                        </div>
                        <div className="openSans-18-400" style={styles.text}>
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </div>
                        <div style={styles.dev}>
                            APP DEVELOPMENT
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            </MuiThemeProvider>
            <Grid item xs={12}>
            </Grid>
            </Grid>
        );
    }
}

export default Card;