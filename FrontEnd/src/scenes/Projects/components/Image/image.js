import React, { Component } from 'react';
import Project from '../Image/Projects.PNG';

class image extends Component {
    
    render() {
        return (
            <div>
                <img src={Project} alt="MainImage" width="100%" />
            </div>
        );
    }
}

export default image;