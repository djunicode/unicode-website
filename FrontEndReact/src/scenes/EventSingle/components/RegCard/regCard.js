import React, { Component } from 'react';
import { Paper,TextField, Grid,createMuiTheme ,MuiThemeProvider } from '@material-ui/core';
import '../../../../css/fonts.css';
import {styles} from './styles/regCardStyles';
import RegBtn from '../../../../components/buttons/registerButton/regButton';
import axios from 'axios';
import MessageDialog from '../../../../components/MessageDialog/MessageDialog';

const theme=createMuiTheme({
    palette:{
        primary:{
            main: "#445DFF"
        },
        secondary:{
            main: "#C1D37F"
        }
    }
});

class RegCard extends Component {
    state = { 
        showMessage: false,
        fName: "",
        lName: "",
        contact: "",
        sapId: "",
        email: ""
     }
    handleMouse=()=>{
        if(this.state.hovered){
            this.setState({hovered: false});
        }
        else{
            this.setState({hovered: true});
        }
    }
    handleRegister=(e)=>{
        e.preventDefault();
        console.log("Register");
        console.log(e.target.parentNode);
    }
    ValidateEmail=(inputText)=>{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.match(mailformat))
        {
            return true;
        }
        else
        {
            return false;
        }
     }
    isAlpha=(string)=>{
        var i
        for(i=0;i<string.length;i++){
            if (typeof string[i] === "string" && (string[i] >= "a" && string[i] <= "z" ||
             string[i] >= "A" && string[i] <= "Z")){
                return false
            }
        }
        return true
    }
    send=async()=>{
        if(this.state.fname!=='' &&
        this.state.lname!=='' &&
        this.state.sapId!=='' &&
        this.state.sapId.length===11&&
        this.isAlpha(this.state.sapId)&&
        this.state.email!=='' &&
        this.state.contact!==''&&
        this.isAlpha(this.state.contact)&&
        this.state.contact.length===10&&
        this.ValidateEmail(this.state.email)
        ){
            var params={
                event: parseInt(this.props.id,10),
                first_name: this.state.fName,
                last_name: this.state.lName,
                sap_id: this.state.sapId,
                email: this.state.email,
                contact: this.state.contact
            }
            console.log(params)
            await axios.post(`${this.props.postUrl}`,params).then(res=>{
            if(res.statusText==="Created"){
                this.setState({
                    showMessage: true,
                    fName: "",
                    lName: "",
                    contact: "",
                    sapId: "",
                    email: ""
                })
            }
        }).catch(e=>alert("The user is already registered"))
        }
        else{
            alert("Please fill all the fields with valid information")
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.send()
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    reset=()=>{
        this.setState({showMessage: false})
    }

    render() { 
        console.log(this.state)
        let myStyle={
            paper:{
                // height: 400,
                padding: "6%",
                maxWidth: "680px",
                boxShadow: `#d6d6d6 ${this.state.hovered ? '12px 12px 16px' : '4px 4px 16px'}`,
                borderRadius: 10,
                transition: "linear 0.2s",
                minHeight: 414
            }
        }
        return ( 
            <React.Fragment>
                <MessageDialog
                reset={this.reset}
                open={this.state.showMessage}
                message={`You have been successfully registered for ${this.props.tName}.`}
                agree="OK"
                disagree="none"
                title="Registration Successful"
                />
                <div
                onMouseEnter={this.handleMouse}
                onMouseLeave={this.handleMouse}
                >
                <Grid container>
                <Grid item xs={12}>
                    <Paper style={myStyle.paper}>
                    <MuiThemeProvider theme={theme}>
                    <div>
                    <form onSubmit={this.handleSubmit} >
                        <Grid 
                            container
                            justify="center"
                            spacing={24}
                            >
                            <Grid item xs={12} sm={12} md={6}>
                            <TextField
                            id="name"
                            label="First Name"
                            value={this.state.fName}
                            required
                            onChange={this.handleChange('fName')}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            style={styles.inpSmall}
                            />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                            <TextField
                            id="outlined-name"
                            label="Last Name"
                            value={this.state.lName}
                            required
                            onChange={this.handleChange('lName')}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            style={styles.inpSmall}
                            />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                            <TextField
                            id="outlined-name"
                            label="Sap Id"
                            value={this.state.sapId}
                            required
                            onChange={this.handleChange('sapId')}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            style={styles.inpSmall}
                            />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                            <TextField
                            id="outlined-name"
                            label="Contact No."
                            value={this.state.contact}
                            required
                            onChange={this.handleChange('contact')}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            style={styles.inpSmall}
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                            id="outlined-name"
                            label="Email"
                            value={this.state.email}
                            required
                            onChange={this.handleChange('email')}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            style={styles.inpLarge}
                            />
                            </Grid>
                            <Grid item>
                                <RegBtn/>
                            </Grid>
                        </Grid>
                        </form>
                    </div>
                    </MuiThemeProvider>
                    </Paper>
                    </Grid>
                </Grid>
                </div>
            </React.Fragment>
         );
    }
}
 
export default RegCard;