import React, { Component } from 'react';
import { Avatar, List, ListItem, ListItemIcon, ListItemText, Divider, Collapse } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

class InnerItem extends Component {
    state = { 
        open: false,
        showDivider: this.props.divider
     }
    handleClick=()=>{
        this.setState({open: !this.state.open})
    }
    componentDidUpdate=(prevProps,prevState)=>{
        if(prevProps!==this.props){
            this.setState({showDivider: this.props.divider})
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <ListItem button onClick={this.handleClick}>
                        <ListItemIcon>
                            <Avatar src={this.props.img} />
                        </ListItemIcon>
                        <ListItemText primary={this.props.name} />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItem button >
                            <ListItemIcon>
                            <FiberManualRecord />
                            </ListItemIcon>
                            {/* <ListItemText primary={this.props.project} /> */}
                            Project : {this.props.project}
                        </ListItem>
                        </List>
                    </Collapse>
                    {this.state.showDivider?<Divider variant="middle" />:""}
            </React.Fragment>
         );
    }
}
 
export default InnerItem;