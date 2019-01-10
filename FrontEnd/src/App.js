import React, { Component } from 'react';
import Info from './components/infoCard';
import Reg from './components/regCard';
import EventN from './components/EventName';
import Lower from './components/lowerText';
import H from './components/header';
import F from './components/footer';
import './App.css';
import { Grid } from '@material-ui/core';

class App extends Component {

  styles={
    grid:{
        marginTop: 117,
        marginBottom: 161,
        padding: 0,
        width: "100%"
    },
    background:{
      background: "#F8F8F8",
      marginTop: 114
    }
  }
  render() {
    return (
    <div style={this.styles.background}>
      <H />
      <EventN />
          <Grid 
            container 
            spacing={24}
            direction="row"
            justify="center"
            style={this.styles.grid}
          >
                <Grid item>
                  <Info 
                    title="Info"
                    about=""
                    category="APP DEVELOPMENT"
                    tech="Techonologies: Java"
                    date="Date: Dec 28, 2018"
                    price="50"
                   />
                </Grid>
                
                <Grid item>
                  <Reg />
                </Grid>
                
          </Grid>
    <Lower content=""/>
    <F />
  </div>
    );
  }
}

export default App;
