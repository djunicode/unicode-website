import React, { Component } from 'react';
import {styles} from './styles/subStyle';

class subBtn extends Component {
    state = {  }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Register");
    }
    render() { 
        return ( 
            <button 
                style={styles.btn} className="openSans-18-400"
                onClick={this.handleSubmit} 
                >
                    <div style={styles.btnFont}>SUBMIT</div>
            </button>
         );
    }
}
 
export default subBtn;