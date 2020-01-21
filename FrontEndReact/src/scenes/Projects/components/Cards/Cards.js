import React, { Component } from 'react';
import {Paper, Grid, MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import '../../../../css/fonts.css';
import {styles} from './styles/styles';
import {NavLink} from 'react-router-dom';

const theme = createMuiTheme({
    breakpoints: {
      values: {
        md: 770
      }
    }
  });


class Card extends Component {
    alterContent=(content)=>{
        var newContent=""
        var count=0
        content.split(" ").forEach((word)=>{
            if(count!==20){
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
    handleUpdate=()=>{
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <NavLink
            to={`/ProjectSingle/${this.getSlug(this.props.detail)}`}
            onClick={this.handleUpdate}
            style={{textDecoration: "none"}}>
                <MuiThemeProvider theme={theme} >
                <Paper style={styles.paper}>
                    <Grid container spacing={32} justify="center" alignItems="center" style={{minHeight: 270}} >
                        <Grid item xs={12} sm={11} md={4} lg={4} xl={4}>
                            <img src={this.props.cover} alt="ProjectImage" style={styles.image} />
                        </Grid>
                        <Grid item xs={12} sm={11} md={8} lg={8}>
                            <div className="openSans-18-400" style={styles.title}>
                                {this.props.title}
                            </div>
                            <div className="openSans-18-400" style={styles.text}>
                                {this.alterContent(this.props.content)}
                            </div>
                            <div style={styles.dev}>
                                {this.props.tech}
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
                </MuiThemeProvider>
            </NavLink>
            <Grid item xs={12}>
            </Grid>
            </Grid>
        );
    }
}

export default Card;