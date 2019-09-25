import React, { Component } from 'react';
import { Avatar, CardActions } from '@material-ui/core';
import Flip from 'react-reveal/Flip';

class Info extends Component {
    state = {  }
    styles={
        subFont:{
            // display: 'inline',
            fontSize: 14,
            width: "80%",
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
            <CardActions style={{padding: 0}} >
                <Avatar alt={`${this.props.fname} ${this.props.lname}`} src={this.props.pic} style={this.styles.avatar} />
                <div style={this.styles.boldFont2} >
                <Flip left cascade delay={500}>
                <div>{this.props.fname} {this.props.lname}</div>
                </Flip>
                    <Flip left cascade delay={800}>
                        <div style={this.styles.subFont} >{this.props.desgn}</div>
                    </Flip>
                </div>
            </CardActions>
         );
    }
}
 
export default Info;