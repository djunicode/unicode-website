import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import * as myTheme from './styles/themes';
import TabAppBar from './components/TabAppBar';
import DrawerAppBar from './components/DrawerAppBar';
import MediaQuery from 'react-responsive';

class Head extends Component {
    state = { }

        render() {
        return ( 
            <div>
                <MuiThemeProvider theme={myTheme.navTheme}>

                    {/* ---- Above 960 ---- */}
                    <MediaQuery minWidth={961} >
                        <TabAppBar />
                    </MediaQuery>

                    {/* ---- Below 960 ---- */}
                    <MediaQuery maxWidth={960}>
                        <DrawerAppBar />
                    </MediaQuery>

                </MuiThemeProvider>
            </div>
         );
    }
}
 
export default Head;