import React, { Component } from 'react';
import unicode from '../header/images/UNICODE_LOGO.PNG';
import { AppBar, Toolbar, MuiThemeProvider, Tabs, Tab, Grid } from '@material-ui/core';
import * as myTheme from './styles/themes';


class Head extends Component {
    state = { 
        heightAppBar: undefined
        // color: undefined,
        // active:{
        //     home: true,
        //     about: false,
        //     project: false,
        //     event: false,
        //     blog: false,
        //     contact: false
        // }
     }

    //   handleBtn=()=>{
    //       if(!this.state.active.event){
    //           this.setState({color: "secondary"});
    //           this.setState({active: {
    //               event: true
    //             }});
    //           console.log(this.state);
    //       }
    //   }
    // componentDidMount() {
    //     const height = this.divElement.clientHeight;
    //     this.setState({ heightAppBar: height });
    //     console.log(height);
    //   }
        render() {
            console.log(this.state);
        return ( 
            <div>
                <MuiThemeProvider theme={myTheme.theme}>
                <AppBar 
                position="relative"
                color="primary" >
                    <Toolbar >
                        <Grid container direction="row" spacing={16}>
                            <Grid item xs={2}>
                                <div>
                                    <img src={unicode} alt="logo" width="80%" style={{padding: "11%"}} />
                                </div>
                            </Grid>
                            <Grid item xs={10}>
                                <Grid container direction="column" justify="center" alignItems="flex-end" style={{height: "100%"}}>
                                    <Grid item>
                                        <div>
                                            <Tabs>
                                                <Tab label="Home" />
                                                <Tab label="Event" />
                                                <Tab label="Project" />
                                                <Tab label="Blog" />
                                                <Tab label="Contact" />
                                                <Tab label="Help" />
                                            </Tabs>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                        {/* <div style={styles.flex}>
                            <Button style={styles.btn}>Home</Button>
                            <Button style={styles.btn}>About Us</Button>
                            <Button style={styles.btn}>Project</Button>

                            <NavLink style={styles.Nlink} to="/Event">
                                <Button style={styles.btn}>Events</Button>
                            </NavLink>

                            <Button style={styles.btn}>Blog</Button>
                            <NavLink style={styles.Nlink} to="/Contact">
                            <Button style={styles.btn}>Contact</Button>
                            </NavLink>
                        </div> */}
                    </Toolbar>
                </AppBar>
                </MuiThemeProvider>
            </div>
         );
    }
}
 
export default Head;