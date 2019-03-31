import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import RedBar from './components/RedBar/redBar';
import Paragraph from './components/paragraphBlock/paraBlock';
import LowerSection from './components/LowerSection/LowerSection';
import Image from './images/Img.jpg';
import Image2 from './images/Img2.jpg';
import Info from './components/Info/Info';
import Footer from '../../components/footer/footer';
import MixedText from './components/MixedText/MixedText';
import Quote from './components/Quote/Quote';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class BlogSingle extends Component {
    state = {  }
    style={
        heading:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "400",
            width: "100%",
            fontSize: 20,
            color: "#707070",
            opacity: "0.7",
            lineHeight: "24px",
            letterSpacing: "0.150em"
        },
        subHeading:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "600",
            width: "100%",
            fontSize: "42px",
            color: "#4c4c4c0",
            lineHeight: "57px",
            opacity: "0.7",
            marginTop: 10
        },
        img:{
            width: "100%",
            marginTop: "2%",
            marginBottom: "2%"
        },
        para:{
            fontSize: 24,
            color: "#212121",
            lineHeight: "33px",
            marginTop: 60
        },
        quote:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "400",
            fontStyle: "italic",
            fontSize: 26,
            color: "#000",
            lineHeight: "36px",
            marginTop: 30,
            marginBottom: 30,
            borderLeft: "3px solid #FF7171 "
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Grid
                container
                direction="row"
                justify="center"
                >
                {/* RedBar with blogText and iconButton */}
                <Grid item xs={12}>
                    <RedBar />
                </Grid>

                <Grid item xs={12}>
                
                </Grid>

                {/* Main container */}
                <Grid item xs={12} md={11} lg={9} style={{marginBottom: "6%"}} >
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    style={{marginTop: "6%"}}
                    >
                        <Grid item xs={10}>
                        <Fade cascade>
                            <div style={this.style.heading}>WEB DESIGN</div>
                        </Fade>
                        <Fade cascade delay={200} >
                            <div style={this.style.subHeading} >What makes a great landing page?</div>
                        </Fade>
                            <Info />
                        </Grid>

                        {/* Image */}
                        <Grid item xs={10}>
                        <Fade cascade delay={300} >
                            <img style={this.style.img} src={Image} width="100%" alt="#"/>
                        </Fade>
                        </Grid>

                        {/* Paragraph component */}
                        <Grid item xs={10}>
                            <Paragraph text="It’s more business-critical than ever to have a landing page that captures the attention of your visitors before they head for the dreaded ‘Back’ button. Thankfully, though, the design process of a great landing page can be much more informed and calculated than ever before — the trick is in figuring out what core elements are required to achieve that all-important cut-through." />
                        </Grid>

                        {/* Paragraph component */}
                        <Grid item xs={10}>
                            <Paragraph text="Nobody likes to hang around. If you don’t give your site visitors what they want or, indeed, explain what you think they should want within a matter of seconds, they’ll be off to find a better alternative. Translation: you lose sales." />
                        </Grid>

                        {/* Quote component */}
                        <Quote 
                        text="If it’s an all-too-familiar pain-point for you that people are doing more bouncing than converting, here’s where you discover what your landing page(s) could be missing and, of course, what you can do to put that right. Here are the principles that should be at the core of any landing page, whether it’s for a plucky B2C startup going through a launch or an established B2B giant going through a revamp." 
                        />

                        {/* Paragraph component */}
                        <Grid item xs={10}>
                            <Paragraph text=" Put simply, if a user has to work hard to understand what it is you’re offering them, they’re not going to work hard to give you their time or money. The benefits of the features must be immediately clear and this can be really bolstered by great design." />
                        </Grid>

                        {/* Paragraph component */}
                        <Grid item xs={10}>
                            <Paragraph text=' I" f a user has to work hard to understand what it is you’re offering them, they’re not going to work hard to give you their time or money "' />
                        </Grid>
                        
                        {/* MixedText component */}
                        <Grid item xs={10}>
                            <MixedText 
                            normalText=""
                            boldText=""
                            italicText=""
                            />
                        </Grid>

                        <Grid item xs={10}>
                            <img style={this.style.img} src={Image2} width="100%" alt="#"/>
                        </Grid>

                    </Grid>
                </Grid>

                </Grid>

                <Grid
                container
                justify="center"
                direction="row"
                style={{background: "#F8F8F8"}}
                >
                    <Grid item xs={11} sm={10} md={9} >
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        >
                            <Grid item xs={12}>
                                <LowerSection />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default BlogSingle;