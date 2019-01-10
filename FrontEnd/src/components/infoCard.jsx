import React, { Component } from 'react';
import {Paper} from '@material-ui/core';
import '../css/fonts.css';
import rup from '../images/RS.PNG';
import buttonImage from '../images/BUTTON.PNG';

class infoCard extends Component {
    state = { 
        hovered: false,
        width:0,
        height:0,
        collapse: false
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
            position: "absolute",
            top: 0,
            left: 0
        },
        subText:{
            padding: 0,
            margin: 0,
            position: "absolute",
            lineHeight: "27px",
            top: 45,
            left: 0
        },
        category:{
            lineHeight: "19px",
            letterSpacing: "0.150em",
            color: "#445DFF",
            position:"absolute",
            top: 277,
            left: 0
        },
        btnDesign:{
            display: "inline",
            position: "absolute",
            left: 467,
            top: 314,
            textAlign: "center",
            color: "#FFFFFF"
        },
        tech:{
            lineHeight: "24px",
            letterSpacing: "0.150em",
            position:"absolute",
            top: 306,
            left: 0
        },
        date:{
            lineHeight: "27px",
            position: "absolute",
            top: 373,
            left: 0
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
    handleExpand=()=>{
        if(this.state.collapse){
            this.setState({collapse: false});
        }
        else{
            this.setState({collapse: true});
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
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions=()=> {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
        if(this.state.width>1600){
            this.setState({collapse: false});
        }
        else{
            this.setState({collapse: true});
        }
      }
    render() { 
        // let cardWidth= 31.87*(this.state.width)/100;
        // let cardHeight= 20.83*(this.state.height)/100;
        console.log(this.state.width);
        console.log(this.state.height);
        let myStyle={
            paper:{
                // width: `${31.87*(this.state.width)/100}px`,
                height: `${this.state.width>1550?400:500}px`,
                width: `${this.state.width<1228?612:31.87*(this.state.width)/100}px`,
                padding: "37px 37px 57px 51px",
                boxShadow: `#d6d6d6 ${this.state.hovered ? '12px 12px 16px' : '4px 4px 16px'}`,
                borderRadius: 10,
                transition: "linear 0.2s"
            },
            btnDesign:{
                display: "inline",
                position: "absolute",
                right: `${2.29*612/100}px`,
                top: `${78.5*(this.state.width>1550?400:500)/100}px`,
                // bottom: `${5.88*612/100}px`,
                textAlign: "center",
                color: "#FFFFFF"
            },
            date:{
                lineHeight: "27px",
                position: "absolute",
                top: `${93.25*(this.state.width>1550?400:500)/100}px`,
                left: 0
            },
            category:{
                lineHeight: "19px",
                letterSpacing: "0.150em",
                color: "#445DFF",
                position:"absolute",
                top: `${69.25*(this.state.width>1550?400:500)/100}px`,
                left: 0
            },
            tech:{
                lineHeight: "24px",
                letterSpacing: "0.150em",
                position:"absolute",
                top: `${76.5*(this.state.width>1550?400:500)/100}px`,
                left: 0
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
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </div>

                    <div className="roboto-18-400" style={myStyle.category}>
                        {this.props.category}                        
                    </div>

                    <div className="openSans-18-400" style={myStyle.tech}>
                        {this.props.tech}
                    </div>

                    <div className="openSans-20-600" style={myStyle.date}>
                        {this.props.date}
                    </div>

                    {/* Button */}

                    <div className="openSans-26-600" style={myStyle.btnDesign}>
                        <div style={this.styles.buyBtnContainer}>
                            <img src={buttonImage} alt="btnImg" width="131" />
                                <img src={rup} alt="buttonBackground" height="23" style={this.styles.rup} />
                                <div style={this.styles.price}>
                                    {this.props.price}
                                </div>
                        </div>
                    </div>


                    </div>
                </Paper>
            </div>
         );
    }
}
 
export default infoCard;