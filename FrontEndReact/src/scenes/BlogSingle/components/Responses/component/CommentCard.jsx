import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';

class CommentCard extends Component {
    state = {  }
    styles={
        responses:{
            boxShadow: "0px 3px 6px #d6d6d6",
            marginTop: 14,
            padding: 10
        },
        boldFont2:{
            fontSize: 24,
            fontFamily: "'Open Sans', sans-seri",
            fontWeight: 600,
            letterHeight: 22,
            opacity: "0.87"
        },
        comment:{
            marginTop: "2.6%",
            fontSize: 24,
            fontFamily: "'Open Sans', sans-seri",
            fontWeight: 400,
            letterHeight: 33,
            opacity: "0.7"
        },
        subFont:{
            fontSize: 16,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            letterHeight: 22,
            opacity: "0.7",
            color: "#707070",
            marginTop: "2px"
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Card style={this.styles.responses} >
                    <CardContent>
                    <div style={this.styles.boldFont2} >
                        Jon Snow
                        <br/>
                        <div style={this.styles.subFont} >June 6, 1999</div>
                    </div>
                    <div style={this.styles.comment} >
                        Thanks! Your article differs from the many me-too texts, by bringing up good examples. Would love to see more
                    </div>
                    </CardContent>
                </Card>
            </React.Fragment>
         );
    }
}
 
export default CommentCard;