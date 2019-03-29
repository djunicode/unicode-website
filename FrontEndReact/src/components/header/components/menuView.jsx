import React, { Component } from 'react';
import {Toolbar,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import unicode from '../images/UNICODE_LOGO.PNG';

class tabView extends Component {
    state = { 
        
     }
    render() { 
        return ( 
            <Toolbar>
                <IconButton style={{marginLeft: 12}} >
                    <MenuIcon />
                </IconButton>
                <img src={unicode} alt="logo" width="210px" style={{marginLeft: "8%"}} />
            </Toolbar>
         );
    }
}
 
export default tabView;