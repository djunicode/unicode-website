import React, { Component } from 'react';
import { InputBase, Paper, IconButton, CardActions, Button } from '@material-ui/core';
import CommentCard from './component/CommentCard';
import MessageIcon from '@material-ui/icons/Message';
import SendIcon from '@material-ui/icons/Send';
import MediaQuery from 'react-responsive';
import axios from 'axios';
import DialogInp from '../../../../components/DialogInp/DialogInp';
import MessageDialog from '../../../../components/MessageDialog/MessageDialog';

class Responses extends Component {
    state = { 
        name: '',
        showMessage: false,
        open: false,
        title: '',
        comment: '',
        responseCard: []
     }
    style={
        paper:{
            padding: "1%",
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
    handleUpdate=(e)=>{
        var text=e.target.value
        this.setState({comment: text})
    }
    send=async(name)=>{
        if(this.state.comment!==''){
            var params={
                post: this.props.id,
                author: name,
                text: this.state.comment
            }
            console.log(params)
            var res=await axios.post(`${this.props.link}`,params)
            console.log(res.statusText)
            if(res.statusText==='Created')
            // alert("Comment submitted")
            this.setState({showMessage: true,comment: '',open: false})
        }
        else{
            alert("Please fill all the fields with valid information")
        }
    }
    giveName=(name)=>{
        this.setState({name: name})
        this.send(name)
    }
    handlePost=()=>{
        this.setState({open: true})
    }
    askName=()=>{
        // var person = prompt("Please enter your name:", "Anonymous");
        // return person
        this.setState({open: true})
    }
    reset=()=>{
        this.setState({showMessage: false})
    }
    componentDidUpdate=(prevProps,prevState)=>{
        if(prevProps!=this.props){
            this.setState({responseCard: this.props.res,post:this.props.title})
        }
    }
    render() {
        console.log(this.state)
        var renderComment=""
        if(this.state.responseCard!==""){
            renderComment=this.state.responseCard.map((data)=>{
                return(
                    <CommentCard
                    author={data.author}
                    text={data.text}
                    />
                    )
            }
            )
        }
        return ( 
            <React.Fragment>
                <MessageDialog
                reset={this.reset}
                open={this.state.showMessage}
                message="The comment has been submitted successfully. It will be live as soon as it get approved."
                agree="OK"
                disagree="none"
                title="Successful"
                />
                <DialogInp giveName={this.giveName} open={this.state.open} />
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
                        value={this.state.comment}
                        onChange={this.handleUpdate}
                        placeholder="Write a response..."
                        >
                        </InputBase>
                        <IconButton onClick={this.handlePost} style={{padding: 6,marginBottom:0}} >
                            <SendIcon style={{height:24,fontSize: 40}} />
                        </IconButton>
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
                        value={this.state.comment}
                        onChange={this.handleUpdate}
                        placeholder="Write a response..."
                        >
                        </InputBase>
                        <IconButton onClick={this.handlePost} style={{padding: 6,marginBottom:0}} >
                            <SendIcon style={{height:24,fontSize: 40}} />
                        </IconButton>
                    </CardActions>
                </MediaQuery>

                </Paper>
                {renderComment}
            </React.Fragment>
         );
    }
}
 
export default Responses;