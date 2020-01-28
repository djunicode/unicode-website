import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Telephone from './components/Image/image.js';
import Follow from './components/text/Follow.js';
import RegCard from './components/Contact_form/ContactForm.js';
import Footer from '../../components/footer/footer';
import Links from './components/Links/Link';
//import NavBar from '../../components/header/header';
class MyApp extends Component {
    state = { 
        Gwidth: document.body.clientWidth,
     }

    styles={
        background:{
          background: "#F8F8F8"
        },
        image: {
            background: "#FFE99B"
        },
        font: {
            // height: 24,
            // marginTop: '10%',
            fontSize: `${this.state.Gwidth>960?('1.5vw'):('4.5vw')}`,
            padding: "45px 0px 20px 0px",
            textAlign: "center",
            letterHeight: "24px",
            fontFamily: "Open Sans, sans-serif",
            color: "#777777"
        }
      }
    componentDidMount(){
        window.addEventListener('resize', this.resize)
    }
    resize=()=>{
        this.setState({Gwidth: document.body.clientWidth})
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
                    <Grid item xs={10} sm={9} md={8} lg={7} xl={7}>
                        <div style={this.styles.font} >Email query</div>
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={10} sm={9} md={7} lg={5} xl={4}>
                        <RegCard />
                    </Grid>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={7}>
                        <Follow Gwidth={this.state.Gwidth} />
                    </Grid>
                    <Grid item xs={7}>
                        <Links />
                    </Grid>
                    <Grid item xs={10} sm={9} md={8} lg={7} xl={7}>
                        <div style={this.styles.font} >Map</div>
                    </Grid>
                    <Grid item xs={10} sm={9} md={8} lg={7} xl={7}>
                        <Paper style={{padding: 20,marginBottom: 40,height: '50vh'}} >
                            <Grid
                            container
                            direction="row"
                            justify="center"
                            style={{height: '100%'}}
                            >
                                <iframe style={{width: '100%',height: '100%',border: 'none'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.012537983461!2d72.83491871490163!3d19.1071058870701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas%20Jivanlal%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1569222384476!5m2!1sen!2sin"></iframe>
                            </Grid>
                        </Paper>
                    </Grid>

                </Grid>
                <Footer />
                
            </div>
         );
    }
}
 
export default MyApp;