import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import Cards from '../Cards/Cards';
import axios from 'axios';

class CardsMain extends Component{
    state={
        // Array used to render 8 cards
        data:[],
        count:0,
        filter:[],
        error:[1],
        cards:[1,2,3,4,5,6,7,8]
    }
    count=0
    getData=(p)=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        // /?limit=2&offset=${p*2-2}
        axios.get(`http://localhost:8000/api/projects/?limit=2&offset=${p*2-2}`)
        .then((response)=>{
            // console.log("Response: "+response.data)
            this.setState({
                data: response.data.results,
                filter: response.data.results,
                count: response.data.count
                // page: p,
                // count: Math.ceil((response.data.count)/2)*10
            })
        })
        .catch(e=>console.log(e))
    }
    componentDidMount=()=>{
        this.getData(this.props.page)
    }
    componentDidUpdate=(prevProps,prevState)=>{
        if(prevProps!==this.props){
            this.getData(this.props.page)
        }
    }
    render() {
        console.log(this.state)
        const error=this.state.error.map((data)=>{
            return(
                <h2 style={{fontWeight: 300,fontSize: "48px",color: "#7c7c7c",padding: "180px 0px"}} >
                    No Results Found
                </h2>
                )
        })
        const renderCard=this.state.data.map((data)=>{
            this.count=0
            if(this.props.tech!==''&&this.props.year!==''){
                if(data.technology===this.props.tech&&data.year===this.props.year){
                    return(
                        <Cards
                        detail={data.detail}
                        title={data.title}
                        content={data.description}
                        cover={data.cover}
                        tech={data.technology}
                        repo={data.repo_link}
                        />
                        )
                }
            }
            else if(this.props.tech!==''&&this.props.year===''){
                if(data.technology===this.props.tech){
                    return(
                        <Cards
                        detail={data.detail}
                        title={data.title}
                        content={data.description}
                        cover={data.cover}
                        tech={data.technology}
                        repo={data.repo_link}
                        />
                        )
                }
            }
            else if(this.props.tech===''&&this.props.year!==''){
                if(data.year===this.props.year){
                    return(
                        <Cards
                        detail={data.detail}
                        title={data.title}
                        content={data.description}
                        cover={data.cover}
                        tech={data.technology}
                        repo={data.repo_link}
                        />
                        )
                }
            }
            else{
                return(
                    <Cards
                    detail={data.detail}
                    title={data.title}
                    content={data.description}
                    cover={data.cover}
                    tech={data.technology}
                    repo={data.repo_link}
                    />
                    )
            }
        }
        )
        console.log(this.count)
        return (
            <div>
                <Grid container justify="center" alignItems="center" spacing={40} style={{width: "100%",margin: 0}}>
                {/* The Grid item tag has been moved inside <Cards /> component */}

                {/* ---- This will call the <Cards /> component 8 times ---- */}
                    {renderCard}
                {/* -------- */}
                {/* 6699 */}
                </Grid>
            </div>
        );
    }
}

export default CardsMain;