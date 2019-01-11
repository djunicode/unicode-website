import React, { Component } from 'react';
import Info from '../components/EventSingle/infoCard';
import Reg from '../components/EventSingle/regCard';
import EventN from '../components/EventSingle/EventName';
import Lower from '../components/EventSingle/lowerText';
import Header from '../components/header';
import Footer from '../components/footer';
import { Grid } from '@material-ui/core';

class App extends Component {

  styles={
    grid:{
        marginTop: 117,
        marginBottom: 161,
        // padding: 0,
        width: "100%"
    },
    background:{
      background: "#F8F8F8",
      marginTop: 114
    },
    width:{
      width: 700
    }
  }
  render() {
    return (
    <div style={this.styles.background}>
      <Header />
      <EventN />
          <Grid 
            container 
            spacing={24}
            direction="row"
            justify="center"
            style={this.styles.grid}
          >
                <Grid item xs={12} sm={12} md={6}>
                  <Grid 
                  container
                  direction="row"
                  justify="flex-end"
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
                  </Grid>
                </Grid>
                
                <Grid item xs={12} sm={12} md={6}>
                  <Grid 
                      container
                      direction="row"
                      justify="flex-start"
                      >
                        <Grid item>
                          <Reg />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} >
                  <Grid 
                    container
                    direction="row"
                    justify="center"
                    >
                      <Grid item>
                        <Lower content=""/>
                      </Grid>
                  </Grid>
                </Grid>
                
          </Grid>
    <Footer />
  </div>
    );
  }
}

export default App;
