import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {Tabs,Tab,Toolbar, AppBar} from '@material-ui/core';
import unicode from '../images/UNICODE_LOGO.PNG';
import { withStyles } from '@material-ui/core/styles';
import { TabColors } from '../styles/TabColor';
import { HoverStyle } from '../styles/hoverStyles';

class tabView extends Component {

    state = { 
        value: 0
    }

    // Sets the value
    handleChange = (event, value) => {
        
        // Storing value for retrival after refresh
        localStorage.setItem("Tab",value)

        this.setState({ value });

      };

      componentDidMount=()=>{
        let val = Number(localStorage.getItem('Tab'))
        this.setState({value: val})
      };


    render() {
        console.log(this.state)
        return ( 
            <React.Fragment>
            
            {/* HoverStyle is a string which contains CSS for color of each tab along with :hover */}
            <style>{HoverStyle}</style>

            <AppBar 
                position="relative"
                color="primary" >
                <Toolbar >

                    <a href="/"><img src={unicode} alt="logo" width="237px" style={{marginLeft: "8%"}} /></a>

                    <div style={{flexGrow: "1"}} ></div>

                    <Tabs value={this.state.value} onChange={this.handleChange} >

                        {/* ---------------- THIS IS ONE TAB ---------------- */}

                        <Tab label="HOME" component={NavLink} to="/"
                        id="Home-Tab"
                        className={this.state.value===0 ? this.props.classes.selectedDarkBlue :this.props.classes.default}
                        />

                        {/* ------------------------------------------------ */}



                        <Tab label="ABOUT US" component={NavLink} to="/AboutUS"
                        id="AboutUs-Tab"
                        className={this.state.value===1 ? this.props.classes.selectedOrange :this.props.classes.default}
                        />

                        <Tab label="PROJECTS" component={NavLink} to="/Projects"
                        id="Projects-Tab"
                        className={this.state.value===2 ? this.props.classes.selectedBlue :this.props.classes.default}
                        />

                        <Tab label="EVENTS" component={NavLink} to="/EventsMain"
                        id="Events-Tab"
                        className={this.state.value===3 ? this.props.classes.selectedGreen :this.props.classes.default}
                        />

                        <Tab label="BLOG" component={NavLink} to="/Blog"
                        id="Blog-Tab"
                        className={this.state.value===4 ? this.props.classes.selectedPink :this.props.classes.default}
                        />

                        <Tab label="CONTACTS" component={NavLink} to="/Contact"
                        id="Contacts-Tab"
                        className={this.state.value===5 ? this.props.classes.selectedYellow :this.props.classes.default}
                        />

                    </Tabs>
                </Toolbar>
            </AppBar>
            </React.Fragment>
         );
    }
}
 
export default withStyles(TabColors)(tabView);