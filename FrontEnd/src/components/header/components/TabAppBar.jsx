import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {styles} from '../styles/headerStyle';
import {Tabs,Tab,Toolbar, MuiThemeProvider, AppBar} from '@material-ui/core';
import unicode from '../images/UNICODE_LOGO.PNG';
import * as myTheme from '../styles/themes';

class tabView extends Component {
    state = { }
    render() { 
        return ( 
            <AppBar 
                position="relative"
                color="primary" >
            <Toolbar >
                <img src={unicode} alt="logo" width="237px" style={{marginLeft: "8%"}} />
                <div style={{flexGrow: "1"}} ></div>

                <Tabs value={this.state.value} >

                {/* ---------------- THIS IS ONE TAB ---------------- */}

                        <NavLink style={styles.Nlink} to="/">
                            <MuiThemeProvider theme={myTheme.tabGreen}>
                                <Tab label="HOME" />
                            </MuiThemeProvider>
                        </NavLink>

                {/* ------------------------------------------------ */}

                        <NavLink style={styles.Nlink} to="/AboutUS">
                            <MuiThemeProvider theme={myTheme.tabGreen}>
                                <Tab label="ABOUT US" />
                            </MuiThemeProvider>
                        </NavLink>

                        <NavLink style={styles.Nlink} to="/Projects">
                            <MuiThemeProvider theme={myTheme.tabGreen}>
                                <Tab label="PROJECTS" />
                            </MuiThemeProvider>
                        </NavLink>

                        <NavLink style={styles.Nlink} to="/Events">
                            <MuiThemeProvider theme={myTheme.tabGreen}>
                                <Tab label="EVENTS" />
                            </MuiThemeProvider>
                        </NavLink>

                        <NavLink style={styles.Nlink} to="/Blog">
                            <MuiThemeProvider theme={myTheme.tabGreen}>
                                <Tab label="BLOG" />
                            </MuiThemeProvider>
                        </NavLink>

                        <NavLink style={styles.Nlink} to="/Contact">
                            <MuiThemeProvider theme={myTheme.tabYellow}>
                                <Tab label="CONTACT" />
                            </MuiThemeProvider>
                        </NavLink>
                </Tabs>
            </Toolbar>
            </AppBar>
         );
    }
}
 
export default tabView;