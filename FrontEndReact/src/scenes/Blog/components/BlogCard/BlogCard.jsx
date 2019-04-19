import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, CardContent,CardActions,Typography, Avatar,Grid } from '@material-ui/core';
import cardImg from './images/cardImg.jpg';
import avatar from './images/avatar.jpg';
import {styles} from './styles/BlogCardStyle';
import {NavLink} from 'react-router-dom';
import Zoom from '@material-ui/core/Zoom';

class BlogCard extends Component {
    state = { 
        checked: true
     }
    styles={
        link:{
            textDecoration: "none",
            color: "#000"
        }
    }

    handleUpdate=()=>{
        // this.forceUpdate()
        window.scrollTo(0, 0)
    }

    componentWillReceiveProps=()=>{
        setTimeout(()=>{
            this.setState({
                direction: "right",
                checked: false
            })
          }, 0);
          setTimeout(()=>{
            this.setState({
                direction: "left",
                checked: true
            })
          }, 600);
    }

    render() { 
        return ( 
            <Zoom direction="up" in={this.state.checked} timeout={80} >
            <Grid item xs={12} sm={9} md={6} lg={5} xl={4} >
            <NavLink style={this.styles.link} to="/BlogSingle" onClick={this.handleUpdate} >
            <Card style={styles.card} >
            <CardActionArea>
                <CardMedia
                style={{height: 275}}
                image={cardImg}
                title="Blog image"
                />
                <CardContent style={{padding: "4% 8% 4% 8%"}} >
                    <div style={styles.topFont} >{this.props.heading}</div>
                <Typography 
                gutterBottom 
                variant="h5" 
                component="h2"
                style={styles.boldFont}
                >
                    {this.props.subHeading}
                </Typography>
                <Typography component="p" style={styles.regFont} >
                    {this.props.content}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{maxHeight: 90}} >
                <Avatar alt="Jon Snow" src={avatar} style={styles.avatar} />
                <div style={styles.boldFont2} >
                    {this.props.author}
                    <br/>
                    <div style={styles.subFont} >{this.props.date}</div>
                </div>
            </CardActions>
            </Card>
            </NavLink>
            </Grid>
            </Zoom>
         );
    }
}
 
export default BlogCard;