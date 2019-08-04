import React, { Component } from 'react';
import { Paper,TextField, Grid,createMuiTheme ,MuiThemeProvider } from '@material-ui/core';
import {styles} from './styles/FormStyles.js'
import axios from 'axios';

const theme=createMuiTheme({
    palette:{
        primary:{
            main: "#445DFF"
        },
        secondary:{
            main: "#C1D37F"
        }

    },
    overrides: {
        MuiButton: {
            root: {
                backGround: "#C1D37F",
                borderRadius: 1000,
                
            },
            contained: {
                padding: "11.1px 0px 10.9px 0px",
                marginBottom: 91.27,
                paddingLeft: "50%",
                paddingRight: "50%"
            }
        }
    }

});


class RegCard extends Component {

    state = { 
        name: '',
        email: '',
        message: ''
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

    send=async()=>{
        if(this.ValidateEmail(this.state.email)&&this.state.name!==""&&this.state.message!==""){
            var params={
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            }
            console.log(params)
            var res=await axios.post('http://127.0.0.1:8000/api/reach/contact/',params)
            console.log(res.statusText)
            if(res.statusText==='Created')
            alert("Submitted")
            this.setState({
                name: '',
                email: '',
                message: ''
            })
        }
        else{
            alert("Please fill all the fields with valid information")
        }
    }

    handleChange=(e)=>{
        var val=e.target.value
        var id=e.target.id
        switch(id){
            case 'name':
                this.setState({name: val})
                break
            case 'email':
                this.setState({email: val})
                break
            case 'message':
                this.setState({message: val})
                break
        }
    }
    
    render() { 

        return ( 

            
                <Paper style={styles.paper}>
                <MuiThemeProvider theme={theme}>
                <form>
                    <Grid 
                    style={styles.card}
                    container
                    direction="row"
                    justify="center"
                    

                    >

                    <Grid item xs={10} sm={8} md={7} >
                    <TextField

                            id="name"

                            label="First Name"
                            onChange={this.handleChange}
                            value={this.state.name}

                            margin="normal"
                            
                            fullWidth
                            variant="outlined"
                            style={styles.inpLarge}

                            />
                    </Grid>
                    <Grid item xs={10} sm={8} md={7} >
                    <TextField

                            id="email"

                            label="Email"
                            onChange={this.handleChange}
                            value={this.state.email}

                            margin="normal"
                        
                            fullWidth
                            variant="outlined"
                            style={styles.inpLarge}
                            />
                    </Grid>
                    <Grid item xs={10} sm={8} md={7} >
                            
                    <TextField

                            id="message"

                            label="Enter Text Here"
                            onChange={this.handleChange}
                            value={this.state.message}

                            margin="normal"
                        
                            fullWidth
                            variant="outlined"
                            multiline rows="4"
                            style={styles.inpText}
                            />
                            </Grid>
                            <Grid item xs={12}></Grid>
                            <Grid item xs={4} sm={3} md={2} xl={2}>
                            
                            

                            <div style={styles.button} onClick={this.send} >
                                SUBMIT
                            </div>
                            </Grid> 
                            </Grid>
                        </form>

                        


                    </MuiThemeProvider>
                    </Paper>
            
            );

    }

}

 

export default RegCard;

    

