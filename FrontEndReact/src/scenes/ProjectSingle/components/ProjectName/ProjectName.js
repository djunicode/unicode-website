import React, { Component } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { Grid } from '@material-ui/core';

import '../../../../css/fonts.css';
import { IconButton, MuiThemeProvider } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {EventName} from '../../../themes/themes';
import {styles} from '../../components/ProjectName/styles/styles';

class ProjectName extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div>
                <div style={styles.event}>
                    <div style={styles.flex}>
                        <div style={styles.posiWrap}>
                            <MuiThemeProvider theme={EventName}>
                                <IconButton color="primary" >
                                <NavLink to="/Projects" style={styles.Nlink}>
                                    <ArrowBackIcon />
                                </NavLink>
                                </IconButton>
                            </MuiThemeProvider>
                            <div 
                            className="openSans-24-700"
                            style={styles.eveFont}
                            >
                                <div>
                                    Projects
                                </div>
                            </div>
                        </div>
                    </div>
                    
                
                
                    <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{minHeight: 171}}>
                    <Grid item xs={11} sm={12} md={11} lg={11}>
                    <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{minHeight: 171}}>
                    <Grid item xs={12} sm={7} md={4} lg={4}
                    style={styles.eveNameFont}
                    className="openSans-24-600"
                    >
                    
                        Project Name
                
                    </Grid>
                    <Grid item xs={0} sm={0} md={4} lg={5}>
                    
                    </Grid>
                    <Grid item xs={10} sm={6} md={3} lg={2}
                    className="openSans-24-700"
                    style={styles.github}>
                    
                            
                                
                                    Github
                                
                            
                        
                            <MuiThemeProvider theme={EventName}>
                                <IconButton color="primary" >
                                {/* <NavLink to="https://github.com/djunicode/unicode-website" style={styles.Nlink}>
                                    <OpenInNewIcon />
                                </NavLink> */}
                                <a href="https://github.com/djunicode/unicode-website" style={styles.Nlink}>
                                    <OpenInNewIcon />
                                </a>

                                </IconButton>
                            </MuiThemeProvider>
                            
                            
                        
                        </Grid>
                        </Grid>
                        </Grid>
                        </Grid>
                        </div>
                        </div>
            
         );
    }
}
 
export default ProjectName;