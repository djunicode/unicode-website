import React, { Component } from 'react';
import telephone from './contact-with-text.png';
import {styles} from './styles/ImageStyles.js'
class image extends Component {
    
    render() {
        return (
            <div style={styles.container}>
            <img src={telephone}  width="100%" />
            <div style={styles.centered}>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </div>
            
            </div>
        );
    }
}

export default image;