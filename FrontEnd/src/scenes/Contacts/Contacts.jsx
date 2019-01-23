import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Follow from '../components/Contacts/follow6699';
import Card from '../components/Contacts/card6699';
import { Grid} from '@material-ui/core';

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
      // marginTop: 114
    },
    width:{
      width: 700
    }
  }
  render() {
    return (
    <div style={this.styles.background}>
      <Header />
          <Grid 
            container 
            spacing={24}
            direction="row"
            justify="center"
            style={this.styles.grid}
          >
            <Grid item xs={7}>
                <Follow />
            </Grid>

            <Grid item xs={6}>
                <Card />
            </Grid>
          
        
          </Grid>
    <Footer />
  </div>
    );
  }
}

export default App;
