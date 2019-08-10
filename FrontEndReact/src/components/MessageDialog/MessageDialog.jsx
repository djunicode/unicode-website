import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class MessageDialog extends Component {
    state = { 
        open: false
     }
     handleClickOpen=()=>{
        this.setState({open: true})
      }
    
      handleClose=()=>{
        this.props.reset()
        this.setState({open: false})
      }
      componentDidUpdate(prevProps,prevState){
        if(prevProps!==this.props){
            this.setState({open: this.props.open})
        }
    }
    render() { 
        const renderCancel=[1].map(i=>{
            return(
                <Button onClick={this.handleClose} color="primary" autoFocus>
                    {this.props.disagree}
                </Button>
            )
        })
        return ( 
            <React.Fragment>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {this.props.message}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        {this.props.agree}
                    </Button>
                    {this.props.disagree!=='none'?renderCancel:""}
                    </DialogActions>
                </Dialog>
            </React.Fragment>
         );
    }
}
 
export default MessageDialog;