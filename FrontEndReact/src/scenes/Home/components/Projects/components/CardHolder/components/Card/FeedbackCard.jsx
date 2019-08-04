import React, { Component } from 'react';
import { Paper, Typography, Slide, Zoom } from '@material-ui/core';
import Info from './components/Info/Info';
import Flip from 'react-reveal/Flip';
import { isAbsolute } from 'path';

class FeedbackCard extends Component {
    state = { 
        checked: true,
        direction: "left"
     }
     style={
        paper:{
            position: "relative",
            padding: 30,
            minHeight: "500px",
            borderRadius: 10,
            boxShadow: "#d6d6d6 0px 12px 16px",
            background: `${this.props.color}`,
            color: "#FFFFFF"
        },
        font:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "600",
            fontSize: 24,
            color: "#FFFFFF",
            lineHeight: "33px",
            textAlign: "left"
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
    render() { 
        return ( 
            <Zoom in={this.state.checked} direction={this.state.direction} >
            <Paper style={this.style.paper} >
                <Typography variant="headline" style={this.style.font} >
                    {/* <b>
                        {this.props.index}
                    </b> */}
                    <br/>
                    <Flip left cascade delay={400}>
                        {this.props.text}
                    </Flip>
                </Typography>
                <div style={{position: "absolute",bottom: 30}} >
                    <Info
                    pic={this.props.pic}
                    fname={this.props.fname}
                    lname={this.props.lname}
                    company={this.props.company}
                    department={this.props.department}
                    desgn={this.props.desgn}
                    />
                </div>
            </Paper>
            </Zoom>
         );
    }
}
 
export default FeedbackCard;