import React, { Component } from 'react';
import telephone from './telephone.png';
import NavBar from './components/NavBar.js';
import RegCard from './components/ContactForm.js';
import {Grid} from '@material-ui/core'
import './App.css';

class App extends Component {

  styles={
    background:{
      background: "#F8F8F8"
    }
  }
  render() {
    return (
      <div style={this.styles.background}>

        <NavBar />
        <div className="image">
        <img src={telephone} height="963" width="1920" />
        <div className="text1">GET IN TOUCH</div>
        <div className="text2">GET IN TOUCH</div>
        </div>
        <div className="space">
        <div className="follow">
          FOLLOW US ON
        </div>
        <Grid 
            container
            alignItems="center"
            alignContent="center"
            justify="center"
          >

        <RegCard />
        </Grid>
        </div>
      </div>
    );
  }
}

export default App;
