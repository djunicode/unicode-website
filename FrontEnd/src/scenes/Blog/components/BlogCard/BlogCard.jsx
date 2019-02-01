import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, CardContent,CardActions,Typography, Avatar,Grid } from '@material-ui/core';
import cardImg from './images/cardImg.jpg';
import avatar from './images/avatar.jpg';

class BlogCard extends Component {
    state = {  }

    styles={
        subFont:{
            fontSize: 16,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            letterHeight: 22,
            opacity: "0.7",
            color: "#707070",
            marginTop: "2px"
        },
        card:{
            boxShadow: "12px 12px 16px #d6d6d6",
            maxWidth: 450,
            borderRadius: "6px",
            marginBottom: "16%"
        },
        boldFont:{
            fontSize: 26,
            fontFamily: "'Open Sans', sans-seri",
            fontWeight: 600,
            letterHeight: 36
        },
        boldFont2:{
            fontSize: 16,
            fontFamily: "'Open Sans', sans-seri",
            fontWeight: 600,
            letterHeight: 22
        },
        topFont:{
            fontSize: 16,
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            letterHeight: 19,
            opacity: "0.7",
            color: "#707070",
            marginTop: "8px",
            marginBottom: "8px"
        },
        regFont:{
            fontSize: 16,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            opacity: "0.5"
        },
        avatar:{
            width: 60,
            height: 60,
            margin: 20
        }
    }

    render() { 
        return ( 
            <Grid item xs={12} sm={9} md={6} lg={5} xl={4} >
            <Card style={this.styles.card} >
            <CardActionArea>
                <CardMedia
                style={{height: 275}}
                image={cardImg}
                title="Contemplative Reptile"
                />
                <CardContent style={{padding: "4% 8% 4% 8%"}} >
                    <div style={this.styles.topFont} >WEB DESIGN</div>
                <Typography 
                gutterBottom 
                variant="h5" 
                component="h2"
                style={this.styles.boldFont}
                >
                    What makes a great landing page?
                </Typography>
                <Typography component="p" style={this.styles.regFont} >
                    Explore the design process behind some great landing page examples...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{maxHeight: 90}} >
                <Avatar alt="Jon Snow" src={avatar} style={this.styles.avatar} />
                <div style={this.styles.boldFont2} >
                    Jon Snow
                    <br/>
                    <div style={this.styles.subFont} >Jun 6, 1999</div>
                </div>
            </CardActions>
            </Card>
            </Grid>
         );
    }
}
 
export default BlogCard;