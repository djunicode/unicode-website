import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Img from '../../../Blog/components/BlogCard/images/founder.jpeg';
import './css/founder.css';
import avatar from '../../../Blog/components/BlogCard/images/avatar.jpg'

class Founder extends Component {
    state = { }
    styles={
        grid:{
            padding:10
        },
        wrapper:{
            // borderRadius: 10,
            position:"relative",
            width: 300,
            height: 400
            // backgroundImage: "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))"
        },
        img:{ 
            width:"100%",
            height:"100%",
            objectFit:"cover",
            borderRadius: 16,
            boxShadow: "-6px 4px 16px #001ace75"
        },
        overlay:{
            top:0,
            left:0,
            width: "100%",
            height:"100%",
            position:"absolute",
            backgroundImage: "linear-gradient(to left, rgba(68, 93, 255, 0.42), rgba(68, 93, 255, 0.98))",
            // backgroundImage: "linear-gradient(to left, rgba(68, 93, 255, 0.11), rgba(68, 93, 255, 0.72))",
            // backgroundImage: "linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,1))",
            borderRadius: 16
        },
        flipbox:{
            backgroundColor: "transparent",
            width: "300px",
            height: "200px",
            border: "1px solid #f1f1f1",
            perspective: "1000px"
        },
        flipbox_inner:{
            position: "relative",
            width: "100%",
            height: "100%",
            textAlign: "center",
            transition: "transform 0.8s",
            transformStyle: "preserve-3d"
        },
        flipbox_front:{
            backgroundColor: "#bbb",
            color: "black",
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden"
        },
        flipbox_back:{
            backgroundColor: "dodgerblue",
            color: "grey",
            transform: "rotateY(180deg)",
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden"
        }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Grid item>
                    <div className='flip-box' >
                        <div className='flip-box-inner' >
                            <div className='flip-box-front' >
                            <div style={this.styles.wrapper} >
                                <img style={this.styles.img} src={Img} alt="img"/>
                                <div style={this.styles.overlay} ></div>
                                <div style={{position:'absolute',bottom: 30,left:20,fontWeight:600,color: '#ffffffeb'}} >
                                    <div>
                                        Firstname Lastname
                                        <span style={{color:'rgba(255, 255, 255, 0.7)',fontWeight:400,fontSize: 14}} >
                                            <br/>
                                            Position Here
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='flip-box-back' >
                                <div className="back-info" >
                                    <div className="back-upper" >
                                        
                                    </div>
                                    <div className="image">
                                        <img  src={avatar} alt=""/>
                                    </div>
                                    <div className="back-lower" >
                                        <div className="content">
                                            <div className="title">
                                                Name Surname
                                            </div>
                                            <div className="bio">
                                                Bio goes here
                                            </div>
                                            <div className="contact">
                                                <div className="grid">
                                                    <div className="contactbtn">
                                                        Contact
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default Founder;