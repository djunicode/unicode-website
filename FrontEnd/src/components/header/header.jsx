import React, { Component } from 'react';
import { AppBar, MuiThemeProvider} from '@material-ui/core';
import * as myTheme from './styles/themes';
import TabView from './components/tabView';
import MenuView from './components/menuView';
import MediaQuery from 'react-responsive';

class Head extends Component {
    state = { 
        // open: false
     }
    //  handleMenu=()=>{
    //      if(this.state.open){
    //          this.setState({open: false});
    //      }
    //      else{
    //         this.setState({open: true});
    //      }
    //  }
        render() {
            console.log(this.state);
        return ( 
            <div>
                <MuiThemeProvider theme={myTheme.tabTheme}>
                <AppBar 
                position="relative"
                color="primary" >
                    <MediaQuery minWidth={961} >
                        <TabView />
                    </MediaQuery>

                    <MediaQuery maxWidth={960}>
                        <MenuView />
                    </MediaQuery>
                </AppBar>
                </MuiThemeProvider>
            </div>
         );
    }
}
 
export default Head;