import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import BlogImage from './components/BlogImg/blogImg';
import Navbar from './components/NavBar/Navbar';
import SearchBar from './components/SearchBar/Searchbar';
import BlogCard from './components/BlogCard/BlogCard';
import Pagination from '../../components/Pagination/Pagination';
import BottomNav from './components/BottomNav/BottomNav';
import Footer from '../../components/footer/footer';
import MediaQuery from 'react-responsive';
import axios from 'axios';

class BlogApp extends Component {
    state={
        data: [],
        cards: [1,2,3,4,5,6,7,8],
        page: 1,
        category: "All"
    }
    styles={
        innerGridNav:{
            marginTop:"10%"
        }
    }

    setPage=(p)=>{
        this.getData(p)
    }

    setCategory=(c)=>{
        if(c==="ALL"){
            this.setState({category: c})
        }
        else if(c==="WEB DESIGN"){
            this.setState({category: c})
        }
        else if(c==="WEB DEVELOPMENT"){
            this.setState({category: c})
        }
        else if(c==="APP DEVELOPMENT"){
            this.setState({category: c})
        }
    }

    getData=(p)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        .then((response)=>{
            console.log(response.data)
            this.setState({
                data: response.data,
                page: p
            })
        })
        .catch(e=>console.log(e))
    }

    getSearchData=(p)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p}`)
        .then((response)=>{
            console.log(response.data)
            this.setState({
                data: response.data,
                page: p
            })
        })
        .catch(e=>console.log(e))
    }

    componentDidMount=()=>{
        this.getData()
    }

  render() {
    const renderCard=this.state.data.map((data)=>{
            return(
            <BlogCard
                heading={this.state.category}
                subHeading="What makes a great landing page?"
                content={data.body}
                author="Jon Snow" date="Jun 6, 1999"
            />
                )
        }
        )
    console.log(this.state.category)
    return (
        <div>
            <Grid
            container
            direction="row"
            justify="center"
            style={{background: "#F8F8F8"}}
            >
                {/* Shows redBackground AND image */}
                <Grid item xs={12}>
                    <BlogImage />
                    <MediaQuery maxWidth={960} >
                        <BottomNav setCategory={this.setCategory} />
                    </MediaQuery>
                </Grid>


                {/* Shows navBar */}
                <Grid item xs={10}>
                    <Grid container direction="row" justify="center" style={this.styles.innerGridNav} >
                        <MediaQuery minWidth={961} >
                            <Grid item xs={12} sm={10} md={9} lg={7} >
                            <Grid container direction="column" justify="center" >
                                <Grid item xs={12}>
                                    <Navbar setCategory={this.setCategory} />
                                </Grid>
                            </Grid>
                            </Grid>
                        </MediaQuery>
                        <Grid item xs={12} md={9} lg={5} >
                            <SearchBar  getSearchData={this.getSearchData} />
                        </Grid>
                    </Grid>
                </Grid>

                {/* Blank space */}
                <Grid item xs={12}>
                </Grid>

                {/* Cards */}
                <Grid item xs={12} >
                    <Grid 
                    container
                    direction="row"
                    justify="center"
                    style={{width: "100%",margin: 0}}
                    >
                    <Grid item xs={12} sm={10} >
                    <Grid 
                    container 
                    direction="row" 
                    justify="center" 
                    spacing={24} 
                    style={{width: "100%",margin: 0}}
                    >
                        {renderCard}
                    </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Pagination getData={this.getData} setPage={this.setPage} />
                </Grid>
                {/* <P /> */}
            </Grid>
            <Footer />
        </div>
    );
  }
}

export default BlogApp;
