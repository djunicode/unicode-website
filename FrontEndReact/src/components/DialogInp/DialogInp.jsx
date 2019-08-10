import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const theme = createMuiTheme({
    breakpoints:{
        values:{
            sm: 488
        }
    }
  });

class DialogInp extends Component {
    state = { 
        open: false,
        name: ''
     }
    handleName=(e)=>{
        var name=e.target.value
        this.setState({name: name})
    }
    handleClickOpen=()=>{
        this.setState({open: true})
      }
      handleCancel=()=>{
        this.setState({open: false})
      }
      handleClose=()=>{
        this.props.giveName(this.state.name)
        this.setState({open: false})
      }
    componentDidUpdate(prevProps,prevState){
        if(prevProps!==this.props){
            this.setState({open: this.props.open})
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Please enter your name
                        </DialogContentText>
                        <TextField
                            onChange={this.handleName}
                            value={this.state.name}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="email"
                            fullWidth
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleCancel} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Submit
                        </Button>
                        </DialogActions>
                    </Dialog>
            </React.Fragment>
         );
    }
}
 
export default DialogInp;