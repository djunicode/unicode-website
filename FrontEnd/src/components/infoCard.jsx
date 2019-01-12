import React, { Component } from 'react';
import {Paper} from '@material-ui/core';
import '../css/fonts.css';
import rup from '../images/RS.PNG';
import buttonImage from '../images/BUTTON.PNG';

class infoCard extends Component {
    state = { 
        hovered: false
     }
    styles={
        container:{
            position: "relative"
        },
        paper:{
            width: 612,
            height: 400,
            padding: "37px 37px 57px 51px",
            boxShadow: `#d6d6d6 ${this.state.hovered ? '12px 12px 12px' : '4px 4px 4px'}`,
            borderRadius: 10
        },
        info:{
            padding: 0,
            margin: 0,
            lineHeight: "33px",
            // position: "absolute",
            // top: 0,
            // left: 0
        },
        subText:{
            padding: 0,
            margin: 0,
            marginTop: 12,
            // position: "absolute",
            lineHeight: "27px",
            maxWidth: 679
            // top: 45,
            // left: 0
        },
        category:{
            lineHeight: "19px",
            letterSpacing: "0.150em",
            color: "#445DFF",
            marginTop: 43
            // position:"absolute",
            // top: 277,
            // left: 0
        },
        tech:{
            lineHeight: "24px",
            letterSpacing: "0.150em",
            marginTop: 10
            // position:"absolute",
            // top: 306,
            // left: 0
        },
        date:{
            lineHeight: "27px",
            marginTop: 43
            // position: "absolute",
            // top: 373,
            // left: 0
        },
        btnDesign:{
            display: "inline",
            position: "absolute",
            // left: "78.82%",
            right: "2%",
            // top: "78.5%",
            textAlign: "center",
            color: "#FFFFFF"
        },
        buyBtnContainer:{
            position: "relative",
            textAlign: "center"
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
    handleMouse=()=>{
        if(this.state.hovered){
            this.setState({hovered: false});
            // console.log(this.state.hovered);
        }
        else{
            this.setState({hovered: true});
            // console.log(this.state.hovered);
        }
    }
    render() { 
        let myStyle={
            paper:{
                maxWidth: 680,
                minHeight: 400,
                padding: "37px 37px 57px 51px",
                boxShadow: `#d6d6d6 ${this.state.hovered ? '12px 12px 16px' : '4px 4px 16px'}`,
                borderRadius: 10,
                transition: "linear 0.2s",
                marginLeft: 24
            }
        }

        return ( 
            <div 
            onMouseEnter={this.handleMouse}
            onMouseLeave={this.handleMouse}
            >
                <Paper style={myStyle.paper}>
                    <div style={this.styles.container}>

                    <div className="openSans-24-600" style={this.styles.info}>
                        {this.props.title}
                    </div>

                    <div className="openSans-18-400" style={this.styles.subText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, dicta non esse porro corrupti facilis nisi magnam perspiciatis eius quia enim ullam, accusantium reiciendis quibusdam laudantium ipsum exercitationem? Temporibus veniam fugit, dicta architecto quod fugiat voluptas sit. Excepturi, libero et?                        
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, placeat. Tempore sunt qui id ipsum laborum! Perferendis reprehenderit impedit tempora!
                    </div>

                    <div className="roboto-18-400" style={this.styles.category}>
                        {this.props.category}                        
                    </div>

                    <div className="openSans-18-400" style={this.styles.tech}>
                        {this.props.tech}
                    </div>

                    <div className="openSans-26-600" style={this.styles.btnDesign}>
                        <div style={this.styles.buyBtnContainer}>
                            <img src={buttonImage} alt="" width="131" />
                                <img src={rup} alt="buttonBackground" height="23" style={this.styles.rup} />
                                <div style={this.styles.price}>
                                    {this.props.price}
                                </div>
                        </div>
                    </div>

                    <div className="openSans-20-600" style={this.styles.date}>
                        {this.props.date}
                    </div>

                    </div>
                </Paper>
            </div>
         );
    }
}
 
export default infoCard;