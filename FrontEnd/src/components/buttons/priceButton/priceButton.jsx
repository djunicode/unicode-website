import React, { Component } from 'react';
import rup from './images/RS.PNG';
import buttonImage from './images/BUTTON.PNG';

class PriceButton extends Component {
    state = {  }
    styles={
        btnDesign:{
            display: "inline",
            float: "right",
            // position: "absolute",
            // left: "78.82%",
            // right: "2%",
            // top: "78.5%",
            textAlign: "center",
            color: "#FFFFFF",
            
        },
        buyBtnContainer:{
            position: "relative",
            textAlign: "center",
            width: 131
        },
        rup:{
            position: "absolute",
            top: 13.35,
            left: 35.76
        },
        price:{
            position: "absolute",
            top: 6,
            left: 56.76,
            height: 36
        }
    }
    render() { 
        return ( 
            <div style={{padding: 20}}>
                <div className="openSans-26-600" style={this.styles.btnDesign}>
                    <div style={this.styles.buyBtnContainer}>
                        <img src={buttonImage} alt="" width="131" />
                            <img src={rup} alt="buttonBackground" height="23" style={this.styles.rup} />
                            <div style={this.styles.price}>
                                50
                            </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default PriceButton;