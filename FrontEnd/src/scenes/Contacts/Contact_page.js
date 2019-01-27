import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Telephone from './components/Image/image.js';
import Follow from './components/text/Follow.js';
import RegCard from './components/Contact_form/ContactForm.js';
import Footer from '../../components/footer/footer';
//import NavBar from '../../components/header/header';
class MyApp extends Component {
    state = {  }

    styles={
        background:{
          background: "#F8F8F8"
        },
        image: {
            padding: "0px 0px 0px 0px"
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
                     {/* <Grid container direction="row"
                        justify="center"
                        > */}
                        {/* <Grid item> */}
                        <Follow />
                        </Grid>
                        {/* </Grid>  */}
                        {/* </Grid> */}

                    {/* <Grid item>
                        <Grid container
                        direcion="row"
                        //justify="center"
                        >
                                <Grid item>
                                    <RegCard />
                                </Grid>
                        </Grid>
                    </Grid> */}

                    <Grid item xs={7}>
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