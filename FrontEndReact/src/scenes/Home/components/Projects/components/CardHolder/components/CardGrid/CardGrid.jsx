import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import FeedbackCard from '../Card/FeedbackCard';
import PaginationCards from '../../../../../PaginationCards/PaginationCards';
import axios from 'axios';
import { timingSafeEqual } from 'crypto';

class CardGrid extends Component {
    state = { 
        postReview: []
     }
    getData=(p)=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        // /?limit=2&offset=${p*2-2}
        axios.get(`http://localhost:8000/api/postreview/`)
        .then((response)=>{
            console.log(response.data.results)
            this.setState({
                postReview: this.setColor(response.data)
            })
        })
        .catch(e=>console.log(e))
    }
    getColor=(index)=>{
        switch(index){
            case 0:
                return '#445DFF'
            case 1:
                return '#FF7171'
            case 2:
                return '#F3D670'
            case 3:
                return '#C1D37F'
        }
    }
    setColor=(array)=>{
        var color=undefined
        var counter=0
        array.forEach(e=>{
            e['id'] = counter
            counter++
        })
        array.forEach(e=>{
            e['color'] = this.getColor(e.id)
        })
        return array
    }
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
     componentWillMount=()=>{
         this.getData()
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
                <PaginationCards data={this.state.postReview} no={this.getNumberOfCards()} />
            </Grid>
         );
    }
}
 
export default CardGrid;