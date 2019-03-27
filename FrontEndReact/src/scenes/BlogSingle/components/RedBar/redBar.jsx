import React, { Component } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import  '../../../../css/fonts.css';

class RedBar extends Component {
    state = {  }
    style={
        redDiv:{
            background: "#FF7171",
            padding: "2%"
        },
        blogFont:{
            color: '#fff',
            paddingLeft: 10
        },
        link:{
            textDecoration: "none",
            color: "#FFFFFF",
            "&:active": {
            color: "#FFFFFF"
        }
        },
        pos:{
            marginLeft: "7%"
        }
    }
    render() { 
        return ( 
            <div style={this.style.redDiv} >
            <div style={this.style.pos} >
            <IconButton>
                <NavLink to="/Blog">
                <ArrowBackIcon style={{color:"#fff"}} />
                </NavLink>
            </IconButton>
                <span className="openSans-24-600" style={this.style.blogFont} >Blog</span>
            </div>
            </div>
         );
    }
}
 
export default RedBar;