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
        if(this.props.type==='single'){
            window.scrollTo(0, 0)
            setTimeout(()=>{
                window.location.reload()
            },400)
        }
        else{
            window.scrollTo(0, 0)
        }
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

    getDate=(date)=>{
        var year=date.split("-")[0]
        var month=date.split("-")[1]
        var day=date.split("-")[2]
        switch(month){
            case "01":
                month="Jan"
                break

            case "02":
                month="Feb"
                break
                    
            case "03":
                month="Mar"
                break
                    
            case "04":
                month="Apr"
                break
                    
            case "05":
                month="May"
                break
                    
            case "06":
                month="Jun"
                break
                    
            case "07":
                month="Jul"
                break
                    
            case "08":
                month="Aug"
                break
                    
            case "09":
                month="Sept"
                break
                    
            case "10":
                month="Oct"
                break
                    
            case "11":
                month="Nov"
                break
                    
            case "12":
                month="Dec"
                break
        }
        return `${month} ${day}, ${year}`
    }

    alterContent=(content)=>{
        var newContent=""
        var count=0
        content.split(" ").forEach((word)=>{
            if(count!==30){
                newContent+=word+" "
                count++;
            }
        })
        return newContent
    }

    getSlug=(url)=>{
        if(url){
        var slug =url.split("/")
        slug=slug[slug.length-1]
        console.log(slug)
        return slug
        }
        else{
            return ""
        }
    }

    componentDidUpdate=(prevProps,prevState)=>{
        if(prevState!==this.stateprops){
            console.log("##########################################")
        }
    }

    render() {
        console.log(this.props.pic)
        return ( 
            <Zoom direction="up" in={this.state.checked} timeout={80} >
            <Grid item xs={12} sm={9} md={6} lg={5} xl={4} >
            <NavLink style={this.styles.link} to={`/BlogSingle/${this.getSlug(this.props.detailLink)}`} onClick={this.handleUpdate} >
            <Card style={styles.card} >
            <CardActionArea>
                <CardMedia
                style={{height: 275}}
                image={this.props.cover}
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
                    {this.alterContent(this.props.content)}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{maxHeight: 90}} >
                <Avatar alt="Jon Snow" src={this.props.pic} style={styles.avatar} />
                <div style={styles.boldFont2} >
                    {this.props.author}
                    <br/>
                    <div style={styles.subFont} >{this.getDate(this.props.date)}</div>
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