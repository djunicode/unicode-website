import React, { Component } from 'react';
import { Grid, Avatar} from '@material-ui/core';
import ProjSection from './components/Projects/ProjSection';
import avatar from '../Blog/components/BlogCard/images/avatar.jpg';
import F from '../Blog/components/BlogCard/images/bg.png';
import Overvview from './components/Projects/components/Overview/Overview';
import Subscribe from './components/Subscribe/Subscribe';
import CardHolder from './components/Projects/components/CardHolder/CardHolder';
import Footer from '../../components/footer/footer';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Video from './components/Video/Video';
import { ParallaxProvider, Parallax, withController } from 'react-scroll-parallax';
import Founder from './components/Founder/Founder';

class HomePage extends Component {
    state = { 
        projectsData: []
     }
     styles={
        avatar:{
            width: 300,
            height: 300
        }
     }
    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    }
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
                    <Grid item xs={12} 
                    style={
                        {
                            padding: "6%",
                            background: "#F8F8F8",
                            color: "#445DFF",
                            fontSize: 24,
                            fontFamily: "'Open Sans', sans-serif",
                            fontWeight: 700,
                            letterHeight: "33px",
                            textAlign: "left",
                            backgroundImage: `url('${F}')`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left top",
                            backgroundSize: "cover"
                            }
                        } >
                        <Fade cascade>
                            <Grid
                            container
                            direction='row'
                            justify='center'
                            spacing={32}
                            >
                                {/* <img src={F} alt="F"/> */}
                                <Grid item style={{fontSize: 36}} >
                                    Founders
                                </Grid>
                                <Grid item xs={12} ></Grid>
                                <Founder />
                                <Founder />
                                <Founder />
                            </Grid>
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