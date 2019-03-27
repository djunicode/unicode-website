import React, { Component } from 'react';
import rup from '../../images/RS.PNG';
import '../../css/fonts.css';
import buttonImage from '../../images/BUTTON.PNG';

class Btn extends Component {
    state = {  }
    styles={
        container:{
            position: "relative"
        },
        btnDesign:{
            // display: "inline",
            // textAlign: "center",
            color: "#FFFFFF"
        },
        buyBtnContainer:{
            // position: "relative",
            // textAlign: "center"
            display: "flex",
            backgroundImage: `url(${buttonImage})`,
            backgroundSize: "54% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            // backgroundAttachment: "fixed" 
        },
        rup:{
            // position: "absolute",
            // top: 13.35,
            // left: 35.76
        },
        price:{
            // position: "absolute",
            // top: 6,
            // left: 56.76,
            height: 36
        }
    }
    render() { 
        return ( 
            <div className="openSans-26-600" style={this.styles.btnDesign}>
                <div style={this.styles.buyBtnContainer}>
                    {/* <div><img src={buttonImage} alt="" width="100%" /></div> */}
                    <div><img src={rup} alt="" width="100%" /></div>
                                    {/* <img src={buttonImage} alt="" width="100%" />
                                    </div>
                                    <div><img src={rup} alt="buttonBackground" height="23" style={this.styles.rup} /></div>
                                        <div style={this.styles.price}>
                                            {this.props.price} */}
                </div>
            </div>
         );
    }
}
 
export default Btn;