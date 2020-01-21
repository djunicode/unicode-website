import React, { Component } from 'react';
import Project from '../Image/Projects.PNG';
import Project1 from '../Image/Projects1.png';
import MediaQuery from 'react-responsive';

class image extends Component {
    
    render() {
        return (
            <div style={{background: '#7fd6d0', display: 'flex', justifyContent: 'center'}} >
                <MediaQuery minWidth={769} >
                    <img width='60%' src="http://bagwesagar6699.pythonanywhere.com//static/frontend/3ca05d11e41d2a735cc3cc92ba452ad1.PNG" alt="MainImage" />
                </MediaQuery>
                <MediaQuery maxWidth={768} >
                    <img style={{padding: '14% 0%'}} width='100%' src="http://bagwesagar6699.pythonanywhere.com//static/frontend/97d6eacf149d853e5812daa40199bc00.png" alt="MainImage" />
                </MediaQuery>
            </div>
        );
    }
}

export default image;