import React, { Component } from 'react';
import '../../../../css/fonts.css';
import {styles} from './styles/styles';

class MiddleText extends Component{


    render() {
        return (
            <div style={styles.container}>
        
            <div style={styles.text}>
            Our members do amazing work, here is a lil sneak peek of our past  and upcoming projects
            </div>
            </div>
        );
    }
}

export default MiddleText;
