import React, { Component } from 'react';
import { InputBase, Paper, IconButton, CardActions } from '@material-ui/core';
import CommentCard from './component/CommentCard';
import MessageIcon from '@material-ui/icons/Message';
import MediaQuery from 'react-responsive';

class Responses extends Component {
    state = {  }
    style={
        paper:{
            padding: "2%",
            paddingLeft: "3%",
            boxShadow: "0px 3px 6px #d6d6d6",
            marginBottom: "6%"
        },
        responses:{
            boxShadow: "0px 3px 6px #d6d6d6",
            marginTop: 14
        },
        input:{
            fontSize:24,
            padding: "6px 6px 7px",
            fontFamily: "'Open Sans', sans-seri",
            fontWeight: 400,
            color: "#000",
            opacity: "0.87"
        },
        heading:{
            fontSize:24,
            padding: "6px 0px 14px 10px",
            fontFamily: "'Open Sans', sans-seri",
            fontWeight: 600,
            lineHeight: "33px"
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div  style={this.style.heading}>Responses</div>
                <Paper style={this.style.paper} >

                <MediaQuery minWidth={500} >
                    <CardActions>
                    <IconButton style={{padding: 6,marginBottom:0}} >
                        <MessageIcon style={{height:24,fontSize: 40}} />
                    </IconButton>
                        <InputBase
                        style={this.style.input}
                        fullWidth
                        placeholder="Write a response..."
                        >
                        </InputBase>
                    </CardActions>
                </MediaQuery>

                <MediaQuery maxWidth={499} >
                    <CardActions>
                    {/* <IconButton style={{padding: 6,marginBottom:0}} >
                        <MessageIcon style={{height:24,fontSize: 40}} />
                    </IconButton> */}
                        <InputBase
                        style={this.style.input}
                        fullWidth
                        placeholder="Write a response..."
                        >
                        </InputBase>
                    </CardActions>
                </MediaQuery>

                </Paper>

                <CommentCard />
                <CommentCard />
            </React.Fragment>
         );
    }
}
 
export default Responses;