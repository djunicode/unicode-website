import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Image from './components/Image/image';
import CardsMain from './components/CardsMain/CardsMain';
import MiddleText from './components/MiddleText/MiddleText';
import SelectOption from './components/Select/Select';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/footer/footer';
import axios from 'axios';

class Project extends Component {
    state={
        data: [],
        filter: [],
        cards: [1,2,3,4,5,6,7,8],
        page: 1,
        category: "All",
        count: 0
    }
    styles={
        background:{
          background: "#F8F8F8"
        },
        image: {
            padding: "0px 0px 0px 0px"
        }
      }
    setPage=(p)=>{
        this.getData(p)
    }
    getData=(p)=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        // /?limit=2&offset=${p*2-2}
        axios.get(`http://localhost:8000/api/projects/?limit=2&offset=${p*2-2}`)
        .then((response)=>{
            // console.log("Response: "+response.data)
            this.setState({
                data: response.data.results,
                filter: response.data.results,
                page: p,
                count: Math.ceil((response.data.count)/2)*10
            })
        })
        .catch(e=>console.log(e))
    }
    setFilter=(tech,year)=>{
        console.log('Filter updated')
        this.setState({
            tech: tech,
            year: year
        })
    }
    filterData=(obj)=>{
        var i,index=0
        var f=[]
        if(obj.tech){
            for(i=0;i<this.state.data.length;i++){
                if(this.state.data[i].technology===obj.tech){
                    f[index++]=this.state.data[i]
                }
            }
        }
        if(obj.year){
            for(i=0;i<this.state.data.length;i++){
                if(this.state.data[i].year===obj.year){
                    f[index++]=this.state.data[i]
                }
            }
        }
    }
    componentDidMount=()=>{
        this.getData(this.state.page)
    }
    render() {
        return (
            <div style={this.styles.background}>
                <Grid
                container
                
                direcion="row"
                justify="center"
                
                >
                <Grid item xs={12}>
                    <Image />
                </Grid>
                <Grid item xs={10} sm={8} md={5} >
                    <MiddleText />
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={10} sm={8} md={5}>
                    <SelectOption updateFilter={this.setFilter} />
                </Grid> 
                <Grid item xs={12}>
                <Grid container justify="center" alignItems="center" style={{marginBottom: 88}}>
                <Grid item sm={11} md={9} lg={11} xl={9}>
                <CardsMain 
                page={this.state.page} 
                data={this.state.data} 
                tech={this.state.tech?this.state.tech:''}
                year={this.state.year?this.state.year:''}
                />
                </Grid>
                </Grid>
                    
                </Grid>
                <Grid item xs={5}>
                <Pagination width={this.state.count} getData={this.getData} setPage={this.setPage} />
                </Grid>
                <Footer />



                </Grid>
            </div>
        );
    }
}

export default Project;