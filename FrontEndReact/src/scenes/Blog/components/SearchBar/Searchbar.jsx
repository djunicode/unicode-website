import React, { Component } from 'react';
import { Paper, InputBase, IconButton, createMuiTheme, MuiThemeProvider, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './css/pinkBar.css';

const myTheme=createMuiTheme(
    {
        overrides:{
            MuiInputBase:{
                input:{
                    fontSize: 20,
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 400,
                    color: "#000000",
                    opacity: "0.9",
                    flex: 1
                }
            }
        },
    }
);

class Searchbar extends Component {
    state = {  }
    styles={
        paper:{
            display: "flex",
            borderRadius: "10px",
            boxShadow: "6px 6px 16px #d6d6d6",
            marginBottom:"40px"
        },
        icon:{
            padding: 10,
            opacity: "0.6"
        },
        input:{
            flex: 1
        },
        pinkBar:{
            borderRadius: "10px 0px 0px 10px",
            background: "#FF7171",
            height: "60px",
            width: 10,
            '@media (max-width:400px)':{
                height: "48px"
            },
        }
    }
    render() { 
        return ( 
            <MuiThemeProvider theme={myTheme} >
            <Tooltip title="Search" aria-label="Search">
                <Paper style={this.styles.paper} >
                <div className="pinkBar" ></div>
                <IconButton onClick={()=>this.props.getSearchData(1)} style={this.styles.icon} aria-label="Search">
                    <SearchIcon />
                </IconButton>
                <InputBase fullWidth placeholder="Search" />
                </Paper>
            </Tooltip>
            </MuiThemeProvider>
         );
    }
}
 
export default Searchbar;