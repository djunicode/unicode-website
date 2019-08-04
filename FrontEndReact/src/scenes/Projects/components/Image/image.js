import React, { Component } from 'react';
import Project from '../Image/Projects.PNG';
import Project1 from '../Image/Projects1.png';
import MediaQuery from 'react-responsive';

class image extends Component {
    
    render() {
        return (
            <div>
                <MediaQuery minWidth={769} >
                    <img src={Project} alt="MainImage" width="100%" />
                </MediaQuery>
                <MediaQuery maxWidth={768} >
                    <img src={Project1} alt="MainImage" width="100%" />
                </MediaQuery>
            </div>
        );
    }
}

export default image;