import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Telephone from './components/Image/image.js';
import Follow from './components/text/Follow.js';
import RegCard from './components/Contact_form/ContactForm.js';
import Footer from '../../components/footer/footer';
import Links from './components/Links/Link.jsx';
//import NavBar from '../../components/header/header';
class MyApp extends Component {
    state = {  }

    styles={
        background:{
          background: "#F8F8F8"
        },
        image: {
            background: "#FFE99B"
        }
      }
    render() { 
        return ( 
            <div style={this.styles.background}>
                <Grid
                container
                
                direcion="row"
                justify="center"
                
                >
                {/* <Grid item xs={12} style={this.styles.image} >
                    <NavBar />
                </Grid> */}
                    <Grid item xs={12} style={this.styles.image} >
                        <Telephone />
                    </Grid>
                    <Grid item xs={7}>
                        <Follow />
                    </Grid>
                    <Grid item xs={7}>
                        <Links />
                    </Grid>
                    <Grid item xs={10} sm={9} md={8} lg={7} xl={7}>
                        <RegCard />
                    </Grid>
                    
                        
                    
                    
                     {/* <Grid item xs={12}>
                    <Footer />
                    </Grid>  */}

                </Grid>
                <Footer />
                
            </div>
         );
    }
}
 
export default MyApp;