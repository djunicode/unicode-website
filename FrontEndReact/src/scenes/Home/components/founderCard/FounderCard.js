import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import IMG from '../../../Blog/components/BlogCard/images/sb.jpg';

class FounderCard extends Component {
    state = { 
        Gwidth: document.body.clientWidth
     }
    styles = {
        cardStyle:{
            padding: 30,
            paddingBottom: 0,
            height: '100%',
            maxWidth: 350,
            margin: 'auto'
        },
        nameText:{
            fontFamily: "'Montserrat', sans-serif",
            color: 'black',
            fontSize:'1.5vw',
            fontWeight: 500,
            textAlign: 'center',
            marginBottom: 20
        },
        positionText:{
            color: '#2b2b2b',
            fontSize:'1.5vw',
            fontWeight: 400,
            textAlign: 'center'
        },
        infoText:{
            fontFamily: "'Montserrat', sans-serif",
            fontSize:16,
            color: 'grey',
            fontWeight: 400,
            textAlign: 'center'
        },
        imgStyle:{
            borderRadius: 200,
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            position: 'relative',
            boxShadow: '1px 5px 10px #b6b6b6'
        },
        content:{
            position: 'relative',
            top: -60,
            cursor: 'pointer'
        }
    }
    alterText=(content)=>{
        var newContent=""
        var count=0
        var width=this.state.Gwidth
        content=`${content}`
        var limit=0
        if(width>1280){
            limit=50
        }
        else if(width>1180){
            limit=25
        }
        content.split(" ").forEach((word)=>{
            if(count!==limit){
                newContent+=word+" "
                count++;
            }
        })
        return `${newContent}. . . .`
    }
    render() { 
        return ( 
            <React.Fragment>
                    <Grid item xs={2} style={{marginTop:20, zoom: '0.8', cursor: 'pointer'}} >
                    <Paper onClick={this.props.onClick} style={this.styles.cardStyle} >
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        style={this.styles.content}
                        >
                            <Grid item xs={12}>
                                <img src={this.props.img} style={this.styles.imgStyle} alt="#" width='26%' />
                            </Grid>
                            <Grid item xs={12} style={this.styles.nameText} >
                                {this.props.name}
                            </Grid>
                            <Grid item xs={12} style={this.styles.positionText} >
                                {this.props.position}
                            </Grid>
                            <Grid item xs={12} style={this.styles.infoText} >
                                {this.alterText(this.props.exp)}
                            </Grid>
                        </Grid>
                    </Paper>
                    </Grid>
            </React.Fragment>
         );
    }
}
 
export default FounderCard;