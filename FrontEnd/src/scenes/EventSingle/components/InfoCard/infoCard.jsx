import React, { Component } from 'react';
import {Paper} from '@material-ui/core';
import '../../../../css/fonts.css';
import PriceBtn from '../../../../components/buttons/priceButton/priceButton';
import {styles} from './styles/infoCardStyle';

class infoCard extends Component {
    state = { 
        hovered: false
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
                    <div style={styles.container}>

                    <div className="openSans-24-600" style={styles.info}>
                        {this.props.title}
                    </div>

                    <div className="openSans-18-400" style={styles.subText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, dicta non esse porro corrupti facilis nisi magnam perspiciatis eius quia enim ullam, accusantium reiciendis quibusdam laudantium ipsum exercitationem? Temporibus veniam fugit, dicta architecto quod fugiat voluptas sit. Excepturi, libero et?                        
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, placeat. Tempore sunt qui id ipsum laborum! Perferendis reprehenderit impedit tempora!
                    </div>

                    <div className="roboto-18-400" style={styles.category}>
                        {this.props.category}                        
                    </div>

                    <div className="openSans-18-400" style={styles.tech}>
                        {this.props.tech}
                    </div>

                    <PriceBtn price="50" />
                    <div className="openSans-20-600" style={styles.date}>
                        {this.props.date}
                    </div>

                    </div>
                </Paper>
            </div>
         );
    }
}
 
export default infoCard;