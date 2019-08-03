import React, { Component } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../../../../css/fonts.css';
import { IconButton, MuiThemeProvider } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {EventName} from '../../../themes/themes';
import {styles} from '../../components/EventName/styles/EventNameStyle';

class ENname extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div>
                <div style={styles.event}>
                    <div style={styles.flex}>
                        <div style={styles.posiWrap}>
                            <MuiThemeProvider theme={EventName}>
                                <IconButton color="primary" >
                                <NavLink to="/EventsMain" style={styles.Nlink}>
                                    <ArrowBackIcon />
                                </NavLink>
                                </IconButton>
                            </MuiThemeProvider>
                            <div 
                            className="openSans-24-700"
                            style={styles.eveFont}
                            >
                                <div>
                                    Events
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div 
                    style={styles.eveNameFont}
                    className="openSans-24-600"
                    >
                        Event Name
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ENname;