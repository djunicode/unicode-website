import React, { Component } from 'react';
import unicode from '../images/UNICODE_LOGO.PNG';
import { AppBar, Toolbar, MuiThemeProvider, Button } from '@material-ui/core';
import * as myTheme from '../styles/themes';
import {styles} from '../styles/headerStyle';
import {NavLink} from 'react-router-dom';


class Head extends Component {
    state = { 
        color: undefined,
        active:{
            home: true,
            about: false,
            project: false,
            event: false,
            blog: false,
            contact: false
        }
     }

    //   This method will set the button to active and change the color
      handleBtn=()=>{
          if(!this.state.active.event){
              this.setState({color: "secondary"});
              this.setState({active: {
                  event: true
                }});
              console.log(this.state);
          }
      }
        render() {
            console.log(this.state);
        return ( 
            <div>
                <MuiThemeProvider theme={myTheme.theme}>
                <AppBar 
                position="fixed"
                color="primary" >
                    <Toolbar >
                        <img src={unicode} alt="logo" style={styles.logo} width="237px" />
                        <div style={styles.flex}>
                            <Button style={styles.btn}>Home</Button>
                            <Button style={styles.btn}>About Us</Button>
                            <Button style={styles.btn}>Project</Button>

                            <NavLink to="/Event">
                                <Button style={styles.btn}>Events</Button>
                            </NavLink>

                            <Button style={styles.btn}>Blog</Button>
                            <Button style={styles.btn}>Contact</Button>
                        </div>
                    </Toolbar>
                </AppBar>
                </MuiThemeProvider>
            </div>
         );
    }
}
 
export default Head;