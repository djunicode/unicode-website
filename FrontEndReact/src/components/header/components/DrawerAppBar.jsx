import React, { Component } from 'react';
import {Toolbar,IconButton, AppBar,List,ListItem,ListItemIcon,Drawer,ListItemText, Divider} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import unicode from '../images/UNICODE_LOGO.PNG';
import InboxIcon from '@material-ui/icons/Inbox';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import EditIcon from '@material-ui/icons/Edit';
import PeopleIcon from '@material-ui/icons/People';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import PlaceIcon from '@material-ui/icons/Place';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class tabView extends Component {
    state = { 
        open: false
     }
    handleToggle=()=>{
        if(this.state.open===true){
            this.setState({open:false})
        }
        else{
            this.setState({open:true})
        }
    }
    handleClickAway = () => {
        this.setState({
          open: false,
        })
    }
    render() { 
        return ( 
            <ClickAwayListener onClickAway={this.handleClickAway}>
            <div>
            <AppBar 
                position="relative"
                color="primary"
                style={{height: 50}}
                >

                <Toolbar style={{minHeight: 0}} >
                    
                    {/* <IconButton style={{marginLeft: 12}} onClick={this.handleToggle} >
                        <MenuIcon />
                    </IconButton> */}

                    <img src={unicode} alt="logo" width="150px" style={{marginLeft: "8%"}} />
                    <div style={{flex: 1}} ></div>
                    <IconButton style={{marginLeft: 12}} onClick={this.handleToggle} >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>

            </AppBar>

            {/* -------- Drawer will be inserted here -------- */}
            
            <Drawer anchor="right" open={this.state.open}>
                <List style={{width: 300,minWidth: 200}} >
                    <ListItem >
                    <div style={{flex: 1}} ></div>
                        <ListItemIcon onClick={this.handleClickAway} >
                            <ArrowForwardIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button style={{paddingTop: 20,paddingBottom: 20,paddingLeft: 40}}
                    component={NavLink} to="/"
                    onClick={this.handleClickAway}
                    >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem button style={{paddingTop: 20,paddingBottom: 20,paddingLeft: 40}}
                    component={NavLink} to="/AboutUS"
                    onClick={this.handleClickAway}
                    >
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="About Us" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem button style={{paddingTop: 20,paddingBottom: 20,paddingLeft: 40}} 
                    component={NavLink} to="/Projects"
                    onClick={this.handleClickAway}
                    >
                            <ListItemIcon>
                                <LocalParkingIcon />
                            </ListItemIcon>
                            <ListItemText primary="Projects" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem button style={{paddingTop: 20,paddingBottom: 20,paddingLeft: 40}} 
                    component={NavLink} to="/Events"
                    onClick={this.handleClickAway}
                    >
                            <ListItemIcon>
                                <PlaceIcon />
                            </ListItemIcon>
                            <ListItemText primary="Events" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem button style={{paddingTop: 20,paddingBottom: 20,paddingLeft: 40}}
                    component={NavLink} to="/Blog"
                    onClick={this.handleClickAway}
                    >
                            <ListItemIcon>
                                <EditIcon />
                            </ListItemIcon>
                            <ListItemText primary="Blog" />
                    </ListItem>
                    <Divider variant="middle" />
                    <ListItem button style={{paddingTop: 20,paddingBottom: 20,paddingLeft: 40}}
                    component={NavLink} to="/Contact"
                    onClick={this.handleClickAway}
                    >
                            <ListItemIcon>
                                <AlternateEmailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Drawer>

            </div>
            </ClickAwayListener>

         );
    }
}
 
export default tabView;