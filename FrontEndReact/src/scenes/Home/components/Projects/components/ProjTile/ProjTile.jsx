import React, { Component } from 'react';
import ProjImg from './images/projImg.png'
import { Grid, Zoom, Slide } from '@material-ui/core';
import ViewButton from './components/ViewButton/ViewButton';

class ProjTile extends Component {
    state = { 
        checked: true,
        direction: "left",
        Gwidth: document.body.clientWidth
    }
    style={
        font:{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "400",
            fontSize: 24,
            color: "#FFFFFF",
            lineHeight: "33px",
            textAlign: "left"
        }
    }
    resize=()=>{
        this.setState({Gwidth: document.body.clientWidth})
    }
    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }
    componentWillReceiveProps=()=>{
        setTimeout(()=>{
            this.setState({
                direction: "right",
                checked: false
            })
          }, 0);
          setTimeout(()=>{
            this.setState({
                direction: "left",
                checked: true
            })
          }, 600);
    }
    alterContent=(content)=>{
        var newContent=""
        var count=0
        content=`${content}`
        content.split(" ").forEach((word)=>{
            if(count!==15){
                newContent+=word+" "
                count++;
            }
        })
        return `${newContent}. . . .`
    }
    render() { 
        // console.log(this.state)
        let conditionalStyling={
            projName:{
                fontSize: 30,
                fontWeight: 500,
                textAlign: this.state.Gwidth<960?"center":"left"
            },
            text:{
                padding: "10% 2% 10% 0%",
                textAlign: this.state.Gwidth<960?"center":"left"
            }
        }
        return ( 
            <React.Fragment>
                <Slide in={this.state.checked} direction={this.state.direction} >
                <Grid
                container
                direction="row"
                justify="center"
                style={this.style.font}
                >
                    <Grid item xs={12} md={4} lg={4} >
                        <img style={{borderRadius: "50%"}} src={this.props.cover||ProjImg} width="100%" ></img>
                    </Grid>
                    <Grid item xs={12} md={1}>
                        
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        style={{padding: "8% 0%"}}
                        >
                            <Grid item xs={12} style={conditionalStyling.projName} >
                                {this.props.projName}
                            </Grid>
                            <Grid item xs={12} style={conditionalStyling.text} >
                                {this.alterContent(this.props.text)}
                            </Grid>
                            <Grid item xs={12} >
                                <Grid
                                container
                                direction="row"
                                justify={this.state.Gwidth<960?"center":"flex-start"}
                                >
                                    <Grid item xs={7} sm={5} md={4} xl={3} >
                                        <ViewButton link={this.props.link} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                </Slide>
            </React.Fragment>
         );
    }
}
 
export default ProjTile;