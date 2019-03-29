import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {styles} from '../styles/headerStyle';
import {Tabs,Tab,Toolbar} from '@material-ui/core';
import unicode from '../images/UNICODE_LOGO.PNG';

class tabView extends Component {
    state = { 
        value: 0
     }
     handleChange = (event, value) => {
        this.setState({ value });
      };
    render() { 
        return ( 
            <Toolbar >
                <img src={unicode} alt="logo" width="237px" style={{marginLeft: "8%"}} />
                <div style={{flexGrow: "1"}} ></div>
                <Tabs value={this.state.value} onChange={this.handleChange} >
                        <NavLink style={styles.Nlink} to="/">
                            <Tab label="HOME" />
                        </NavLink>
                        <NavLink style={styles.Nlink} to="/AboutUS">
                            <Tab label="ABOUT US" />
                        </NavLink>
                        <NavLink style={styles.Nlink} to="/Projects">
                            <Tab label="PROJECTS" />
                        </NavLink>
                        <NavLink style={styles.Nlink} to="/Events">
                            <Tab label="EVENTS" />
                        </NavLink>
                        <NavLink style={styles.Nlink} to="/Blog">
                            <Tab label="BLOG" />
                        </NavLink>
                        <NavLink style={styles.Nlink} to="/Contact">
                            <Tab label="CONTACT" />
                        </NavLink>
                </Tabs>
            </Toolbar>
         );
    }
}
 
export default tabView;