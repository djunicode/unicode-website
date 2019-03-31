import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import FeedbackCard from '../Card/FeedbackCard';
import PaginationCards from '../../../../../PaginationCards/PaginationCards';

class CardGrid extends Component {
    state = {  }
    getNumberOfCards=()=>{
        let Gwidth=document.body.clientWidth
        console.log(Gwidth)
        if(Gwidth<600){
            return 1
        }
        else if(Gwidth<960){
            return 1
        }
        else if(Gwidth<1280){
            return 2
        }
        else if(Gwidth<1920){
            return 3
        }
        else{
            return 4
        }
     }
    render() { 
        return ( 
            <Grid
            container
            direction="row"
            justify="center"
            spacing={40}
            style={{width: "100%",margin: 0}}
            >
                <PaginationCards no={this.getNumberOfCards()} />
            </Grid>
         );
    }
}
 
export default CardGrid;