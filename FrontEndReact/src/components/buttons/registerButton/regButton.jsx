import React, { Component } from 'react';
import {styles} from './styles/regStyle';

class regBtn extends Component {
    state = {  }
    handleRegister=(e)=>{
        e.preventDefault();
        console.log(e.target)
        console.log("Register");
    }
    render() { 
        return ( 
            <button
                style={styles.btn} className="openSans-18-400"
                // onClick={this.handleRegister} 
                >
                    <div style={styles.btnFont}>REGISTER</div>
            </button>
         );
    }
}
 
export default regBtn;