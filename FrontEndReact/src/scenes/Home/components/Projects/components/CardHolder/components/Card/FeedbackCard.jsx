import React, { Component } from 'react';
import { Paper, Typography, Slide, Zoom } from '@material-ui/core';
import Info from './components/Info/Info';
import Flip from 'react-reveal/Flip';

class FeedbackCard extends Component {
    state = { 
        checked: true,
        direction: "left"
     }
     style={
        paper:{
            padding: 30,
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
                    <b>
                        {this.props.index}
                    </b>
                    <br/>
                    <Flip left cascade delay={400}>
                        I'd like to learn more about why I should choose Kraken.
                    </Flip>
                </Typography>
                <Info />
            </Paper>
            </Zoom>
         );
    }
}
 
export default FeedbackCard;