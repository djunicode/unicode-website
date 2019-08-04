import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import avatar from '../Mentees/image/avatar.jpg';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import CloseIcon from '@material-ui/icons/Close';
import { Paper, Grid, Avatar, IconButton, TextField, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Submit from '../../../../components/buttons/submitButton/subButton';
import Twitter from '../../../../components/footer/images/TB1.png';
import GitHub from '../../../../components/footer/images/GB1.png';
import LinkedIn from '../../../../components/footer/images/LB1.png';

const theme = createMuiTheme({
    breakpoints:{
        values:{
            sm: 488
        }
    }
  });

class DialogBox extends Component {
    state = { 
        open: false,
        expand: false
     }
     styles={
         paper:{
             padding: "30px 30px",
             borderRadius: 10,
             boxShadow: "none"
         },
         name:{
             textAlign: "center",
             fontFamily: "'Open Sans', sans-serif",
             fontWeight: "600",
             fontSize: 32
         },
         icon:{

         },
         lorem:{
            textAlign: "center",
            padding: "10px 0px",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "400",
            fontSize: 18
         },
         git:{
            paddingTop: 10,
            textAlign: "center",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "600",
            fontSize: 24,
            color: "#445DFF",
            textDecoration: "underline"
            // borderBottom: "1px solid #445DFF",
            // paddingBottom: 4
         },
         avatar:{
            width: "100px",
            height: "100px",
            boxShadow: "0 0 0 4px #fff,0 0 0 6px #888",
            marginBottom: 20,
            marginTop: 20
        },
        openSansSemiBold:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "600"
        },
        openSansRegular:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "400"
        }
     }
     handleClose=()=>{
         this.setState({open: false,expand: false})
     }
     handleExpand=()=>{
        this.setState({expand: true})
     }
     componentDidUpdate=(prevProps,prevState)=>{
         if(prevProps!==this.props){
             this.setState({open: this.props.open})
         }
     }
    render() { 
        console.log(this.props)
        return ( 
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                <Dialog
                    fullScreen={this.props.fullScreen}
                    open={this.state.open}
                    aria-labelledby="responsive-dialog-title"
                >
                    <Paper style={this.styles.paper}>
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        >
                            <Grid item xs={12}>
                                <Grid
                                container
                                direction="row"
                                justify="flex-end"
                                >
                                    <Grid item >
                                        <IconButton onClick={this.handleClose} >
                                            <CloseIcon style={{color: "#445DFF"}} />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid
                                container
                                direction="row"
                                justify="center"
                                >
                                    <Grid item >
                                        <Avatar width="100px" height="100px" alt={this.props.name} src={`http://127.0.0.1:8000${this.props.pic}`} style={this.styles.avatar} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} style={this.styles.name} >
                                {this.props.name}
                            </Grid>
                            <Grid item xs={12} style={this.styles.lorem} >
                                {this.props.text}
                            </Grid>
                            <Grid item xs={12} style={this.styles.icon} >
                                <Grid
                                container
                                direction="row"
                                justify="center"
                                >
                                    <Grid item xs={2} sm={1} >
                                        <a href={this.props.gitHub}>
                                            <img src={Twitter} alt="Twitter" width="30px" />
                                        </a>
                                    </Grid>
                                    <Grid item xs={2} sm={1} width="30px" >
                                        <a href={this.props.linkedIn}>
                                            <img src={LinkedIn} alt="LinkedIn" width="30px" />
                                        </a>
                                    </Grid>
                                    <Grid item xs={1} sm={1} width="30px" >
                                        <a href={this.props.gitHub}>
                                            <img src={GitHub} alt="GitHub" width="30px" />
                                        </a>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} style={this.styles.git} >
                                <div onClick={this.handleExpand} >Get In Touch</div>
                            </Grid>
                            <Collapse in={this.state.expand}>
                                <Grid
                                container
                                direction="row"
                                justify="center"
                                >
                                    <Grid item xs={8}>
                                        <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        >
                                            <Grid item xs={12} >
                                                <TextField
                                                // id="outlined-name"
                                                label="Email"
                                                fullWidth
                                                // className={classes.textField}
                                                // value={values.name}
                                                // onChange={handleChange('name')}
                                                margin="normal"
                                                variant="outlined"
                                                />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <TextField
                                                fullWidth
                                                multiline={true}
                                                rows={4}
                                                label="Message"
                                                margin="normal"
                                                variant="outlined"
                                                style={{paddingBottom: 10}}
                                                />
                                            </Grid>
                                            <Grid item >
                                                <Submit />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Collapse>           
                        </Grid>
                    </Paper>
                </Dialog>
                </MuiThemeProvider>
            </React.Fragment>
         );
    }
}
 
export default withMobileDialog()(DialogBox);