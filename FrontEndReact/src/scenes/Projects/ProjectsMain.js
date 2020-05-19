import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Image from './components/Image/image';
import CardsMain from './components/CardsMain/CardsMain';
import MiddleText from './components/MiddleText/MiddleText';
import SelectOption from './components/Select/Select';
import Pagination from '../../components/Pagination/Pagination';
import Footer from '../../components/footer/footer';
import markdownToTxt from 'markdown-to-txt';
// import PlainTextRenderer from 'marked-plaintext';
// import marked from 'marked';
import axios from 'axios';

class Project extends Component {
    state={
        data: [],
        tech: '',
        year: '',
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
    postCount=0
    getData=(p)=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        // /?limit=2&offset=${p*2-2}
        axios.get(`/api/projects/?limit=4&offset=${p*4-4}&s=${this.state.tech}&year=${this.state.year}`)
        .then((response)=>{
            console.log(response.data)
            this.setState({
                data: response.data.results,
                filter: response.data.results,
                page: p,
                count: Math.ceil((response.data.count)/4)*10
            })
        })
        .catch(e=>console.log(e))
    }
    upCnt=(count)=>{
        console.log("count: "+count)
        console.log("Updating count "+ Math.ceil((count)/4)*10)
        // this.setState({count: count})
        this.postCount=Math.ceil((count)/4)*10
        var c=this.postCount
        if(this.state.count!==c){
            this.setState({count: c,page: 1})
        }
    }
    setFilter=(tech,year)=>{
        console.log('Filter updated')
        if(tech=='All'){
            tech=''
        }
        if(year=='All'){
            year=''
        }
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
    // componentDidUpdate=(prevProps,prevState)=>{
    //     if(prevState!==this.state){
    //         this.getData(this.state.page)
    //     }
    // }
    render() {
        // console.log(markdownToTxt('_Teachers need to formulate multiple reports for events, and since most of it is paper work and there is no '))
        // var renderer = new PlainTextRenderer;
        // console.log(marked('_Teachers need to formulate multiple reports for events, and since most of it is paper work and there is no ', { renderer: renderer }));
        // console.log(markdownToTxt('Some *quoted* `*code*`'))
        console.log(this.postCount)
        console.log(this.postCount===0?this.state.count:this.postCount)
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
                updateCount={this.upCnt}
                page={this.state.page} 
                data={this.state.data} 
                tech={this.state.tech?this.state.tech:''}
                year={this.state.year?this.state.year:''}
                />
                </Grid>
                </Grid>
                    
                </Grid>
                <Grid item xs={5}>
                <Pagination width={this.postCount===0?this.state.count:this.postCount} getData={this.getData} setPage={this.setPage} />
                </Grid>
                <Footer />



                </Grid>
            </div>
        );
    }
}

export default Project;