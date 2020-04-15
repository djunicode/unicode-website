import React, { Component } from 'react';
import { Grid, Avatar} from '@material-ui/core';
import ProjSection from './components/Projects/ProjSection';
import F from '../Blog/components/BlogCard/images/bg.png';
import Overvview from './components/Projects/components/Overview/Overview';
import Subscribe from './components/Subscribe/Subscribe';
import CardHolder from './components/Projects/components/CardHolder/CardHolder';
import Footer from '../../components/footer/footer';
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Video from './components/Video/Video';
import { ParallaxProvider, Parallax, withController } from 'react-scroll-parallax';
import FounderCard from './components/founderCard/FounderCard';
import IMG from '../Blog/components/BlogCard/images/sb.jpg';
import DialogBox from '../ProjectSingle/components/Dialog/Dialog';
import Swapneel from './img/SM.jpg';
import Rudresh from './img/RP.jpg';
import Avais from './img/AP.PNG';
import Gitika from './img/GD.jpeg';

class HomePage extends Component {
    state = { 
        projectsData: [],
        open: false,
        founder: undefined,
        Gwidth: document.body.clientWidth,
        fData:[{
                name: 'Avais Pagarkar',
                position: "Our aim with unicode is to help the current students be better than we were. We want everyone has enough resources and mentors,in order for them to grow and get amazing internships and jobs in the industry. I strongly believe we would be producing enough students, armed with a variety of relevant skills, capable of competing with students from the country's top engineering colleges.",
                exp: "Our aim with unicode is to help the current students be better than we were. We want everyone has enough resources and mentors,in order for them to grow and get amazing internships and jobs in the industry. I strongly believe we would be producing enough students, armed with a variety of relevant skills, capable of competing with students from the country's top engineering colleges.",
                img: '/static/frontend/fd739a5ad72a675a23001228a8472bee.PNG'
            },
            {
                name: 'Swapneel Mehta',
                exp: "Unicode means a huge deal to me. It has been the first concrete step in implementing an amalgam of ideas to address shortfalls in the engineering system arising from massive scale and the shortage of work opportunities. We've met some amazing kids who have grown into wonderful mentors and hope to see the trend continue!",
                position: '',
                img: '/static/frontend/52de6bcc084de48b3f8d72f79ba5be13.jpg'
            },
            {
                name: 'Rudresh Panchal',
                exp: "Our eventual goal was to create a mentorship program where students were exposed to the world of CS by working on meaningful projects while being guided by their very own seniors. This mentorship program would serve as the one stop shop for all CS related guidance on topics ranging from academia to the industry.",
                position: '',
                img: '/static/frontend/486f20358766b426e5bef4f452ae867f.jpg'
            },
            {
                name: 'Gitika Daswani',
                exp: "Unicode for me was a means to bridge the communication gap that was developing between the successive batches. It's essential that students possess good networking skills and this was a platform for them to begin with. The long term goal was to get them ready to work in the industry by providing them with structured mentorship and technical experience through projects.",
                position: '',
                img: '/static/frontend/b9f0c5dfd072f4a11c8fef1fd3423d9f.jpeg'
            }
        ]
     }
     styles={
        avatar:{
            width: 300,
            height: 300
        },
        founder:{
            width: '16vw',
            height: '16vw',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            border: '4px solid #a1b3be',
            borderRadius: 200
        }
     }
    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    }
    closeFounder = () => {
        this.setState({open: false})
    }
    open=(id)=>{
        this.setState({open: true,founder: this.state.fData[id-1]})
    }
    componentDidMount(){
        window.addEventListener('resize', this.resize)
        this.props.updateHeader()
        localStorage.setItem('Tab','0')
    }
    resize=()=>{
        this.setState({Gwidth: document.body.clientWidth})
    }
    render() { 
        return ( 
            <React.Fragment>
                <DialogBox 
                open={this.state.open}
                // data={this.state.dialogData} 
                name={this.state.founder?this.state.founder.name:""}
                text={this.state.founder?this.state.founder.exp:""}
                gitHub={""}
                pic={this.state.founder?this.state.founder.img:"ww"}
                onClose={this.closeFounder}
                linkedIn={""}
                />
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
                        <ProjSection Gwidth={this.state.Gwidth} />
                    </Grid>
                    <Grid item xs={12} 
                    style={
                        {
                            padding: "6% 0%",
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
                            style={{width: '100%', margin: 0}}
                            >
                                {/* <img src={F} alt="F"/> */}
                                <Grid item style={{fontSize: `${this.state.Gwidth>960?('36px'):('24px')}`, fontFamily: "'Montserrat', sans-serif"}} >
                                    Founders
                                </Grid>
                                <Grid item xs={12} style={{padding: 0, paddingBottom: 10}} ></Grid>
                                <MediaQuery minWidth={1180} >
                                    <FounderCard
                                    onClick={()=>{this.open(1)}}
                                    name={"Avais Pagarkar"}
                                    position={""}
                                    img="/static/frontend/fd739a5ad72a675a23001228a8472bee.PNG"
                                    exp={"Our aim with unicode is to help the current students be better than we were. We want everyone has enough resources and mentors,in order for them to grow and get amazing internships and jobs in the industry. I strongly believe we would be producing enough students, armed with a variety of relevant skills, capable of competing with students from the country's top engineering colleges."}
                                    />
                                    <FounderCard
                                    onClick={()=>{this.open(2)}}
                                    name={"Swapneel Mehta"}
                                    position={""}
                                    img="/static/frontend/52de6bcc084de48b3f8d72f79ba5be13.jpg"
                                    exp={"Unicode means a huge deal to me. It has been the first concrete step in implementing an amalgam of ideas to address shortfalls in the engineering system arising from massive scale and the shortage of work opportunities. We've met some amazing kids who have grown into wonderful mentors and hope to see the trend continue!"}
                                    />
                                    <FounderCard
                                    onClick={()=>{this.open(3)}}
                                    name={"Rudresh Panchal"}
                                    position={""}
                                    img="/static/frontend/486f20358766b426e5bef4f452ae867f.jpg"
                                    exp={"Our eventual goal was to create a mentorship program where students were exposed to the world of CS by working on meaningful projects while being guided by their very own seniors. This mentorship program would serve as the one stop shop for all CS related guidance on topics ranging from academia to the industry."}
                                    />
                                    {/* <FounderCard
                                    onClick={()=>{this.open(3)}}
                                    name={"Rudresh Panchal"}
                                    position={""}
                                    img="/static/frontend/486f20358766b426e5bef4f452ae867f.jpg"
                                    exp={"Our eventual goal was to create a mentorship program where students were exposed to the world of CS by working on meaningful projects while being guided by their very own seniors. This mentorship program would serve as the one stop shop for all CS related guidance on topics ranging from academia to the industry."}
                                    /> */}
                                    <FounderCard
                                    onClick={()=>{this.open(4)}}
                                    name={"Gitika Daswani"}
                                    position={""}
                                    img="/static/frontend/b9f0c5dfd072f4a11c8fef1fd3423d9f.jpeg"
                                    exp={"Unicode for me was a means to bridge the communication gap that was developing between the successive batches. It's essential that students possess good networking skills and this was a platform for them to begin with. The long term goal was to get them ready to work in the industry by providing them with structured mentorship and technical experience through projects."}
                                    />
                                </MediaQuery>
                                <MediaQuery maxWidth={1179} >
                                    <Grid item xs={12} style={{paddingTop: 10}} >
                                        <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        >
                                            <Grid item xs={4} >
                                                <Avatar onClick={()=>{this.open(1)}} style={this.styles.founder} src="/static/frontend/fd739a5ad72a675a23001228a8472bee.PNG"/>
                                            </Grid>
                                            <Grid item xs={4} >
                                                <Avatar onClick={()=>{this.open(2)}} style={this.styles.founder} src="/static/frontend/52de6bcc084de48b3f8d72f79ba5be13.jpg"/>
                                            </Grid>
                                            <Grid item xs={4} >
                                                <Avatar onClick={()=>{this.open(3)}} style={this.styles.founder} src="/static/frontend/486f20358766b426e5bef4f452ae867f.jpg"/>
                                            </Grid>
                                            {/* <Grid item xs={4} >
                                                <Avatar onClick={()=>{this.open(1)}} style={this.styles.founder} src="/static/frontend/fd739a5ad72a675a23001228a8472bee.PNG"/>
                                            </Grid> */}
                                            <Grid item xs={4} >
                                                <Avatar onClick={()=>{this.open(4)}} style={this.styles.founder} src="/static/frontend/b9f0c5dfd072f4a11c8fef1fd3423d9f.jpeg"/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </MediaQuery>
                            </Grid>
                        </Fade>
                    </Grid>
                    
                    <Grid item xs={12} >
                        <Slide left delay={100} >
                            <Overvview Gwidth={this.state.Gwidth} />
                        </Slide>
                    </Grid>
                    <Grid item xs={12} style={{padding: "10% 0%"}} >
                        <CardHolder Gwidth={this.state.Gwidth} />
                    </Grid>
                    <Grid item xs={12} style={{padding: "8% 0%",background: "#FFFFFF"}} >
                        <Subscribe Gwidth={this.state.Gwidth} />
                    </Grid>
                </Grid>
                <Footer />
            </ParallaxProvider>
            </React.Fragment>
         );
    }
}
 
export default withController(HomePage);