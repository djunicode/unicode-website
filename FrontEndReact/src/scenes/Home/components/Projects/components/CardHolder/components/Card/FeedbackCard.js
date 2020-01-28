import React, { Component } from 'react';
import { Paper, Typography, Slide, Zoom } from '@material-ui/core';
import Info from './components/Info/Info';
import Flip from 'react-reveal/Flip';
import { isAbsolute } from 'path';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactMarkdown from 'react-markdown';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

class FeedbackCard extends Component {
    state = { 
        checked: true,
        direction: "left",
        modal:false
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
    showFeedbackModal = () => {
        console.log("SHOW MODAL")
        this.setState({modal: true})
    }
    closeModal = () =>{
        this.setState({modal: false})
    }
    render() { 
        return ( 
            <React.Fragment>
                <Dialog
                fullScreen={this.props.fullScreen}
                open={this.state.modal}
                onClose={this.closeModal}
                aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title" style={{textAlign: 'center'}} >{this.props.fname} {this.props.lname}</DialogTitle>
                    <DialogContent>
                    <DialogContentText style={{textAlign: 'center'}} >
                        {this.props.fullText}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    {/* <Button onClick={this.closeModal} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={this.closeModal} color="primary" autoFocus>
                        Agree
                    </Button> */}
                    </DialogActions>
                </Dialog>
                <Zoom in={this.state.checked} direction={this.state.direction} >
                <Paper style={this.style.paper} onClick={this.showFeedbackModal} >
                    <Typography variant="headline" style={this.style.font} >
                        {/* <b>
                            {this.props.index}
                        </b> */}
                        <br/>
                        <Flip left delay={400}>
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
            </React.Fragment>
         );
    }
}
 
export default FeedbackCard;