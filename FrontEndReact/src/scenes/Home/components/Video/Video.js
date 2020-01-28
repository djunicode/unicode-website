import React, { Component } from 'react';
// import video from './compressed.m4v';
import video from './cmp.mov';
import './css/video.css';

class Video extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <header class="v-header containerVideo">
                <div class="fullscreen-video-wrap">
                {/* <video src="https://production.cdmycdn.com/assets/marketing-pages/intensives/bws/coding-scenes-9a2031e8142b40bdb5d936d5eef33dfa.mp4" autoplay="" loop=""> */}
                <img style={{objectFit: 'cover'}} width='100%' height='100%' src="/static/frontend/9034c712c97d88688dd6039c718aa0ad.png" />
                </div>
                <div class="header-overlay"></div>
                <div class="header-content newAlignment text-md-center">
                {/* <Parallax className="custom-class" y={[-30, 30]}> */}
                    <h1 style={{fontFamily: "'Encode Sans Semi Condensed', sans-serif"}} >Code Create Collaborate</h1>
                    <p style={{fontFamily: "'Encode Sans Semi Condensed', sans-serif"}} >Unicode is not just a student chapter it's a student community</p>
                {/* </Parallax> */}
                {/* <a class="btn">Find Out More</a> */}
                </div>
            </header>
            </React.Fragment>
         );
    }
}
 
export default Video;