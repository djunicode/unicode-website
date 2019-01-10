import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import unicode_logo from '../unicode_logo.PNG';
class NavBar extends Component {

    styles={
        
        root: {
            flexGrow: 1,
            height: 114,
            top: 46
          },
          //tab: {
        //       flex="end"
        //   }
        };

        /*state = {
            value: 0,
          };
        
          handleChange = (event, value) => {
            this.setState({ value });
          };*/
        
    

    render() {
        return (
            <Paper style={this.styles.root}>
                <img src={unicode_logo} height="47" width="237" left="179" top="34"/>
                <Tabs
                //value={this.state.value}
                //onChange={this.handleChange}
                indicatorColor="primary"
                textColor="black"
                centered
                >
                <Tab label="HOME" />
                <Tab label="ABOUT US" />
                <Tab label="PROJECTS" />
                <Tab label="EVENTS" />
                <Tab label="BLOG" />
                <Tab label="CONTACT" />
                </Tabs>
            </Paper>
                    
            
        );
    }

    
};
export default NavBar