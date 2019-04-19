import React, { Component } from 'react';
import { Grid} from '@material-ui/core';
import ProjSection from './components/Projects/ProjSection';
import Overvview from './components/Projects/components/Overview/Overview';
import Subscribe from './components/Subscribe/Subscribe';
import CardHolder from './components/Projects/components/CardHolder/CardHolder';
import Footer from '../../components/footer/footer';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Video from './components/Video/Video';
import { ParallaxProvider, Parallax, withController } from 'react-scroll-parallax';

class HomePage extends Component {
    state = {  }
    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    };
    render() { 
        return ( 
            <React.Fragment>
            <ParallaxProvider>
                        {/* <Fade> */}
                        {/* Section Under Construction */}
                        <Parallax className="custom-class" y={[-30, 30]}>
                            <Video onLoad={this.handleOnLoad} />
                        </Parallax>
                        {/* </Fade> */}
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    style={{background: "#F8F8F8"}}
                    >
                    <Grid item xs={12} style={{background: "#445DFF",zIndex: 10}} >
                        <ProjSection />
                    </Grid>
                    <Grid item xs={10} 
                    style={
                        {
                            padding: "10%",
                            background: "#F8F8F8",
                            color: "#445DFF",
                            fontSize: 24,
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: 700,
                            letterHeight: "33px",
                            textAlign: "left"
                            }
                        } >
                        <Fade cascade>
                            Section Under Construction
                            <br/>
                            (Maybe founders)
                        </Fade>
                    </Grid>
                    
                    <Grid item xs={12} >
                        <Slide left delay={100} >
                            <Overvview />
                        </Slide>
                    </Grid>
                    <Grid item xs={12} style={{padding: "10% 0%"}} >
                        <CardHolder />
                    </Grid>
                    <Grid item xs={12} style={{padding: "8% 0%",background: "#FFFFFF"}} >
                        <Subscribe />
                    </Grid>
                </Grid>
                <Footer />
            </ParallaxProvider>
            </React.Fragment>
         );
    }
}
 
export default withController(HomePage);