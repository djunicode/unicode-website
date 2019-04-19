import React, { Component } from 'react';
import { Avatar, CardActions } from '@material-ui/core';
import avatar from './images/avatar.jpg';
import Flip from 'react-reveal/Flip';

class Info extends Component {
    state = {  }
    styles={
        subFont:{
            // display: 'inline',
            fontSize: 14,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            letterHeight: 22,
            opacity: "0.7",
            color: "#FFFFFF",
            marginTop: "2px"
        },
        boldFont2:{
            // display: 'inline',
            fontSize: 20,
            fontFamily: "'Open Sans', sans-seri",
            fontWeight: 600,
            letterHeight: 22
        },
        avatar:{
            width: 50,
            height: 50,
            marginRight: 10
        }
    }
    render() { 
        return ( 
            <CardActions style={{marginTop: 160,padding: 0}} >
                <Avatar alt="Jon Snow" src={avatar} style={this.styles.avatar} />
                <div style={this.styles.boldFont2} >
                <Flip left cascade delay={500}>
                <div>Jon Snow</div>
                </Flip>
                    <Flip left cascade delay={800}>
                        <div style={this.styles.subFont} >Position</div>
                    </Flip>
                </div>
            </CardActions>
         );
    }
}
 
export default Info;