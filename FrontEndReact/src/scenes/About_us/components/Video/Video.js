import React, { Component } from 'react';
import video from './v.mov';
import home1 from "../About_usImg/home.png";
import './css/video1.css';

class Video extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <header class="v-header containerVideo">
                <div class="fullscreen-video-wrap">
                {/* <video src="https://production.cdmycdn.com/assets/marketing-pages/intensives/bws/coding-scenes-9a2031e8142b40bdb5d936d5eef33dfa.mp4" autoplay="" loop=""> */}
                {/* <img src="https://storage.googleapis.com/unicode-data/static/frontend/417f9c3f8b4915bb2c996ef1f82b48ca.png" alt="about_us" style={{objectFit: 'cover',height: '100%', width: '100%'}} /> */}
                <img src='https://storage.googleapis.com/unicode-data/static/frontend/417f9c3f8b4915bb2c996ef1f82b48ca.png' alt="about_us" style={{objectFit: 'cover',height: '100%', width: '100%'}} />
                </div>
                <div class="header-overlay1"></div>
                <div class="header-content newAlignment text-md-center">
                {/* <Parallax className="custom-class" y={[-30, 30]}> */}
                    <h1 style={{fontFamily: "'Encode Sans Semi Condensed', sans-serif"}} >About Us</h1>
                    <p style={{fontFamily: "'Encode Sans Semi Condensed', sans-serif"}} >With the motto of "You and I code", we here at DJ Unicode work relentlessly creating projects and code that matter.</p>
                {/* </Parallax> */}
                {/* <a class="btn">Find Out More</a> */}
                </div>
            </header>
            </React.Fragment>
         );
    }
}
 
export default Video;