import React, { Component } from 'react';
import { Avatar, CardActions } from '@material-ui/core';
import avatar from './images/avatar.jpg';
import Fade from 'react-reveal/Fade';

class Info extends Component {
    state = {  }
    styles={
        subFont:{
            // display: 'inline',
            fontSize: 18,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            letterHeight: 22,
            opacity: "0.7",
            color: "#707070",
            marginTop: "2px"
        },
        boldFont2:{
            // display: 'inline',
            fontSize: 24,
            fontFamily: "'Open Sans', sans-seri",
            fontWeight: 600,
            letterHeight: 22
        },
        avatar:{
            width: 80,
            height: 80,
            marginRight: 30
        }
    }
    render() { 
        return ( 
            <CardActions style={{marginTop: 50,marginBottom: 40}} >
                <Fade cascade delay={300} >
                    <Avatar alt="Jon Snow" src={avatar} style={this.styles.avatar} />
                </Fade>
                <div style={this.styles.boldFont2} >
                <Fade cascade delay={300} >
                    Jon Snow
                </Fade>
                    <Fade cascade delay={300} >
                        <div style={this.styles.subFont} >June 6,1999</div>
                    </Fade>
                </div>
            </CardActions>
         );
    }
}
 
export default Info;