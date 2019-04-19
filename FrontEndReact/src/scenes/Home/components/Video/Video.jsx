import React, { Component } from 'react';
import video from './v.mov';
import './css/video.css';
import { Parallax } from 'react-scroll-parallax';

class Video extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <header class="v-header container">
                <div class="fullscreen-video-wrap">
                {/* <video src="https://production.cdmycdn.com/assets/marketing-pages/intensives/bws/coding-scenes-9a2031e8142b40bdb5d936d5eef33dfa.mp4" autoplay="" loop=""> */}
                <video src={video} autoPlay muted loop>
                </video>
                </div>
                <div class="header-overlay"></div>
                <div class="header-content text-md-center">
                {/* <Parallax className="custom-class" y={[-30, 30]}> */}
                    <h1>Welcome Everyone</h1>
                    <p>"The night is dark and full of terrors, old man, but the fire burns them all away."<br/>― Melisandre</p>
                {/* </Parallax> */}
                {/* <a class="btn">Find Out More</a> */}
                </div>
            </header>
            </React.Fragment>
         );
    }
}
 
export default Video;