import React, { Component } from 'react';
import { Paper,TextField, Grid,createMuiTheme ,MuiThemeProvider } from '@material-ui/core';
import '../../../../css/fonts.css';

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
    state = {  }
    styles={
        paper:{
            // width: 620,
            // height: 414,
            padding: 40,
            boxShadow: "#d6d6d6 12px 12px 12px",
            borderRadius: 10
        },
        inpSmall:{
            Maxwidth: 300,
            height: 66,
            color: "#445DFF"
        },
        inpLarge:{
            Maxwidth: 620,
            height: 66,
            color: "#445DFF"
        },
        container:{
            position: "relative",
            // height: 414
        },
        btn:{
            color: "white",
            background: "#445DFF",
            borderRadius: 100,
            padding: "11px 36px 11px 36px",
            // position: "absolute",
            // bottom: 0,
            // left: 230,
            border: "none"
        },
        btnFont:{
            fontSize: 20,
            letterHeight: 27,
            textAlign: "center"
        }
    }
    handleMouse=()=>{
        if(this.state.hovered){
            this.setState({hovered: false});
            // console.log(this.state.hovered);
        }
        else{
            this.setState({hovered: true});
            // console.log(this.state.hovered);
        }
    }
    handleRegister=(e)=>{
        e.preventDefault();
        console.log("Register");
    }
    render() { 
        let myStyle={
            paper:{
                // height: 400,
                padding: 40,
                maxWidth: "620px",
                boxShadow: `#d6d6d6 ${this.state.hovered ? '12px 12px 16px' : '4px 4px 16px'}`,
                borderRadius: 10,
                transition: "linear 0.2s",
                minHeight: 414,
                marginLeft: 24
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
                <form>
                    <Grid 
                        container
                        justify="center"
                        spacing={24}
                        >
                        <Grid item xs={12} sm={12} md={6}>
                        <TextField
                        id="outlined-name"
                        label="First Name"
                        value={this.state.name}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        style={this.styles.inpSmall}
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                        <TextField
                        id="outlined-name"
                        label="Last Name"
                        value={this.state.name}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        style={this.styles.inpSmall}
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                        <TextField
                        id="outlined-name"
                        label="Sap Id"
                        value={this.state.name}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        style={this.styles.inpSmall}
                        />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                        <TextField
                        id="outlined-name"
                        label="Contact No."
                        value={this.state.name}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        style={this.styles.inpSmall}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        id="outlined-name"
                        label="Email"
                        value={this.state.name}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        style={this.styles.inpLarge}
                        />
                        </Grid>
                        <Grid item>
                        <button 
                        style={this.styles.btn} className="openSans-18-400"
                        onClick={this.handleRegister} 
                        >
                        <div style={this.styles.btnFont}>REGISTER</div>
                    </button>
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