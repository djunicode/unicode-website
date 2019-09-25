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

    styles={
        blueBar:{
            background: "#7FD6D0",
            paddingBottom: 20
        },
        projFont:{
            height: 33,
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
            fontSize: 24,
            color: "#FFFFFF",
            lineHeight: "24px"
        },
        NameFont:{
            height: 57,
            color: "#000000",
            lineHeight: "57px",
            fontWeight: 600,
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 42
        },
        github:{
            height: 43,
            color: "#FFFFFF",
            fontWeight: 400,
            fontFamily: "'Open Sans', sans-serif",
            lineHeight: "43px",
            fontSize: 32
        },
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <Grid
                style={this.styles.blueBar}
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                >
                    <Grid item style={{padding: "20px 40px 10px 40px"}} xs={12} >
                        <MuiThemeProvider theme={EventName}>
                            <IconButton color="primary" >
                            <NavLink to="/Projects" style={styles.Nlink}>
                                <ArrowBackIcon />
                            </NavLink>
                            </IconButton>
                            <span style={this.styles.projFont} >Projects</span>
                        </MuiThemeProvider>
                    </Grid>
                    <Grid item style={{padding: "20px 40px 20px 60px"}} xs={12} md={6} >
                        <span style={this.styles.NameFont} >
                            {this.props.title}
                        </span>
                    </Grid>
                    <Grid item style={{padding: "20px 40px 20px 60px"}} xs={12} md={6} >
                        <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-start"
                        >
                            <Grid item >
                            <span style={this.styles.github} >Github</span>
                                <IconButton color="primary" >
                                    <a href={this.props.link} style={styles.Nlink}>
                                    <OpenInNewIcon />
                                    </a>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
            // <div>
            //     <div style={styles.event}>
            //         <div style={styles.flex}>
            //             <div style={styles.posiWrap}>
            //                 <MuiThemeProvider theme={EventName}>
            //                     <IconButton color="primary" >
            //                     <NavLink to="/Projects" style={styles.Nlink}>
            //                         <ArrowBackIcon />
            //                     </NavLink>
            //                     </IconButton>
            //                 </MuiThemeProvider>
            //                 <div 
            //                 className="openSans-24-700"
            //                 style={styles.eveFont}
            //                 >
            //                     <div>
            //                         Projects
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
                    
                
                
            //         <Grid container 
            //         direction="row"
            //         justify="center"
            //         alignItems="center"
            //         style={{minHeight: 171}}>
            //         <Grid item xs={9} sm={12} md={11} lg={11}>
            //         <Grid container
            //         direction="row"
            //         justify="center"
            //         alignItems="center"
            //         style={{minHeight: 171}}>
            //         <Grid item xs={12} sm={7} md={5} lg={4}
            //         style={styles.eveNameFont}
            //         className="openSans-24-600"
            //         >
                    
            //             {this.props.title}
                
            //         </Grid>
            //         <Grid item xs={0} sm={0} md={3} lg={5}>
                    
            //         </Grid>
            //         <Grid item xs={10} sm={6} md={3} lg={2}
            //         className="openSans-24-700"
            //         style={styles.github}>
                    
                            
                                
            //                         Github
                                
                            
                        
            //                 <MuiThemeProvider theme={EventName}>
            //                     <IconButton color="primary" >
            //                     {/* <NavLink to="https://github.com/djunicode/unicode-website" style={styles.Nlink}>
            //                         <OpenInNewIcon />
            //                     </NavLink> */}
            //                     <a href={this.props.link} style={styles.Nlink}>
            //                         <OpenInNewIcon />
            //                     </a>

            //                     </IconButton>
            //                 </MuiThemeProvider>
                            
                            
                        
            //             </Grid>
            //             </Grid>
            //             </Grid>
            //             </Grid>
            //             </div>
            //             </div>
            
         );
    }
}
 
export default ProjectName;