import React, { Component } from 'react';
import {Paper, Grid} from '@material-ui/core';
import '../../../../css/fonts.css';
import {styles} from './styles/styles';
import Image from './CardImage.PNG';

class Card extends Component {
    render() {
        return (
            <Paper style={styles.paper}>
                <Grid container spacing={32} justify="center" alignItems="center">
                    <Grid item xs={9} sm={7} md={4} lg={4} xl={4}>
                        <img src={Image} style={styles.image} />
                    </Grid>
                    <Grid item xs={8} sm={7} md={8} lg={8} xs={8}>
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
            
        );
    }
}

export default Card;