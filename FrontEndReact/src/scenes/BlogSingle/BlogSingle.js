import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import RedBar from './components/RedBar/redBar';
import Paragraph from './components/paragraphBlock/paraBlock';
import LowerSection from './components/LowerSection/LowerSection';
import Image2 from './images/Img2.jpg';
import Info from './components/Info/Info';
import Footer from '../../components/footer/footer';
import Quote from './components/Quote/Quote';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

class BlogSingle extends Component {
    state = { 
        // detailURL: this.props.match.params.limit,
        data:[],
        para:{
            lowerText:[],
            quoteText:[],
            upperText:[]
        }
     }
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

    getData=(p)=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        axios.get(`http://bagwesagar6699.pythonanywhere.com//api/posts/${this.getSlug(this.props.location.pathname)}`)
        .then((response)=>{
            // console.log("Response: "+response.data)
            var paragraphs=this.getPara(response.data.content)
            this.setState({
                data: response.data,
                para: paragraphs,
                page: p
            })
        })
        .catch(e=>console.log(e))
    }

    getSlug=(url)=>{
        if(url){
        var slug =url.split("/")
        slug=slug[slug.length-1]
        console.log(slug)
        return slug
        }
        else{
            return ""
        }
    }

    componentDidMount=()=>{
        this.getData()
    }

    formatTech=(tech)=>{
        var t=`${tech}`
        return t.toUpperCase()
    }

    getPara=(content)=>{
        var para=content.split("%")
        var upper=[]
        var lower=[]
        var quote=[]
        if(para.length>=4){
            upper=para.slice(0,2)
            quote=para.slice(2,3)
            lower=para.slice(3,)
        }
        var content1={
            upperText: upper,
            quoteText: quote,
            lowerText: lower
        }
        return content1
    }

    render() {
        const renderParaUpper=this.state.para.upperText.map((data)=>{
            return(
                <Grid item xs={10}>
                    <Paragraph text={data} />
                </Grid>
                )
        }
        )
        const renderQuote=this.state.para.quoteText.map((data)=>{
            return(
                <Quote 
                text={data}
                />
                )
        }
        )
        const renderParaLower=this.state.para.lowerText.map((data)=>{
            return(
                <Grid item xs={10}>
                    <Paragraph text={data} />
                </Grid>
                )
        }
        )
        console.log(this.getSlug(this.props.location.pathname))
        console.log(this.state)
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
                            <div style={this.style.heading}>{this.state.data.technologies?this.formatTech(this.state.data.technologies):""}</div>
                        </Fade>
                        <Fade cascade delay={200} >
                            <div style={this.style.subHeading} >{this.state.data.title?this.state.data.title:""}</div>
                        </Fade>
                            <Info
                            username={this.state.data.author?this.state.data.author.username:""}
                            pic={this.state.data.author?this.state.data.author.profile_pic:""}
                            date={this.state.data.publish?this.state.data.publish:""}
                            />
                        </Grid>

                        {/* Image */}
                        <Grid item xs={10}>
                        <Fade cascade delay={300} >
                            <img style={this.style.img} src={this.state.data.cover?this.state.data.cover:""} width="100%" alt="#"/>
                        </Fade>
                        </Grid>

                        {renderParaUpper}

                        {renderQuote}

                        {renderParaUpper}
                        
                        {/* MixedText component */}
                        {/* <Grid item xs={10}>
                            <MixedText 
                            normalText=""
                            boldText=""
                            italicText=""
                            />
                        </Grid> */}

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
                                <LowerSection
                                id={this.state.data.id?this.state.data.id:""}
                                title={this.state.data.title?this.state.data.title:""}
                                link={this.state.data.comment?this.state.data.comment:""}
                                res={this.state.data.responses?this.state.data.responses:""}
                                comment={this.state.data.comment?this.state.data.comment:""}
                                />
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