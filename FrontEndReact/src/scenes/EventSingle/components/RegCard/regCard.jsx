import React, { Component } from 'react';
import { Paper,TextField, Grid,createMuiTheme ,MuiThemeProvider } from '@material-ui/core';
import '../../../../css/fonts.css';
import {styles} from './styles/regCardStyles';
import RegBtn from '../../../../components/buttons/registerButton/regButton';
import axios from 'axios';

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
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e.target)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
        console.log("Submit");
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

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
         );
    }
}
 
export default RegCard;