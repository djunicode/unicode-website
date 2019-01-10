import React, { Component } from 'react';

import NavBar from './components/NavBar.js';
import RegCard from './components/ContactForm.js';
import {Grid} from '@material-ui/core'
import './App.css';
import Image from './components/Image.js';
import Head from './components/header.js';
import Follow from './components/Follow.js';
import Footer from './components/footer';

class App extends Component {

  styles={
    background:{
      background: "#F8F8F8"
    }
  }
  render() {
    return (
      <div style={this.styles.background}>
      <Head />
        <Grid 
        container
        justify="center"
        >
        
        <Image />
        <Grid 
        item xs={12}>
          <Grid container direction="row" justify="center">
            <Grid item>
            <Follow />
            </Grid>
          </Grid>
        </Grid>
        
        <Grid 
            container
            alignItems="center"
            alignContent="center"
            justify="center"
          >

        <RegCard />
        </Grid>
        <Footer />
        
        </Grid>
      </div>
    );
  }
}

export default App;
