import React, { Component } from 'react';
import {Toolbar,IconButton, AppBar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import unicode from '../images/UNICODE_LOGO.PNG';

class tabView extends Component {
    state = { 
        // open: false
     }
    render() { 
        return ( 

            <div>
            <AppBar 
                position="relative"
                color="primary" >

                <Toolbar>
                    
                    <IconButton style={{marginLeft: 12}} >
                        <MenuIcon />
                    </IconButton>

                    <img src={unicode} alt="logo" width="210px" style={{marginLeft: "8%"}} />
                </Toolbar>

            </AppBar>

            {/* -------- Drawer will be inserted here -------- */}
            
            {/* <Drawer open={this.state.open}>
                Make a list here
            </Drawer> */}

            </div>

         );
    }
}
 
export default tabView;