import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import Cards from '../Cards/Cards';
import {NavLink} from 'react-router-dom';

class CardsMain extends Component{
    state={
        // Array used to render 8 cards
        cards:[1,2,3,4,5,6,7,8]
    }
    render() {
        return (
            <div>
                <NavLink
                to="/ProjectSingle"
                onClick={this.handleUpdate}
                style={{textDecoration: "none"}}>
                <Grid container justify="center" alignItems="center" spacing={40} style={{width: "100%",margin: 0}}>
                {/* The Grid item tag has been moved inside <Cards /> component */}

                {/* ---- This will call the <Cards /> component 8 times ---- */}
                    {this.state.cards.map((cards)=><Cards/>)}
                {/* -------- */}
                {/* 6699 */}
                </Grid>
                </NavLink>
            </div>
        );
    }
}

export default CardsMain;