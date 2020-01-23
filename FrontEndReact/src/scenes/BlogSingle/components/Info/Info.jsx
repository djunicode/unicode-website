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
    render() { 
        return ( 
            <CardActions style={{marginTop: 50,marginBottom: 40}} >
                <Fade cascade delay={300} >
                    <Avatar alt="Jon Snow" src={this.props.pic} style={this.styles.avatar} />
                </Fade>
                <div style={this.styles.boldFont2} >
                <Fade cascade delay={300} >
                    {this.props.username}
                </Fade>
                    <Fade cascade delay={300} >
                        <div style={this.styles.subFont} >{this.getDate(this.props.date)}</div>
                    </Fade>
                </div>
            </CardActions>
         );
    }
}
 
export default Info;