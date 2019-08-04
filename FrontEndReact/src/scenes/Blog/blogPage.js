import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import BlogImage from './components/BlogImg/blogImg';
import Navbar from './components/NavBar/Navbar';
import SearchBar from './components/SearchBar/Searchbar';
import blogText from './components/BlogImg/images/blogText.png';
import BlogCard from './components/BlogCard/BlogCard';
import Pagination from '../../components/Pagination/Pagination';
import BottomNav from './components/BottomNav/BottomNav';
import Footer from '../../components/footer/footer';
import MediaQuery from 'react-responsive';
import axios from 'axios';

class BlogApp extends Component {
    state={
        error:[1],
        data: [],
        allData:[],
        filter: [],
        cards: [1,2,3,4,5,6,7,8],
        page: 1,
        category: "All",
        count: 0
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
        var obj=[]
        if(c==="ALL"){
            var f=this.filterNames("all")
            this.setState({category: c,filter:f})
        }
        else if(c==="WEB DESIGN"){
            var f=this.filterNames("design")
            console.log(f)
            this.setState({category: "design",filter:f})
        }
        else if(c==="WEB DEVELOPMENT"){
            var f=this.filterNames("web")
            console.log(f)
            this.setState({category: "web",filter:f})
        }
        else if(c==="APP DEVELOPMENT"){
            var f=this.filterNames("app")
            this.setState({category: "app",filter:f})
        }
    }

    getAllData=(p)=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        axios.get(`http://localhost:8000/api/posts/`)
        .then((response)=>{
            // console.log("Response: "+response.data)
            this.setState({
                allData: response.data.results
            })
        })
        .catch(e=>console.log(e))
    }

    getData=(p)=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        axios.get(`http://localhost:8000/api/posts/?limit=2&offset=${p*2-2}`)
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

    filterNames(tech){
        if(tech==="all"){
            var all=this.state.data.filter(item => item.technologies[0]==="web"||item.technologies[0]==="app"||item.technologies[0]==="design")
            return all
        }
        else{
            return this.state.data.filter(item => item.technologies[0]===tech)
        }
      }

      filterTitles(title){
        return this.state.data.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))
      }

    getSearchData=(text)=>{
        // var results=this.filterTitles(text)
        // this.setState({filter: results})
        axios.get(`http://localhost:8000/api/posts/?s=${text}`)
        .then((response)=>{
            // console.log("Response: "+response.data)
            this.setState({
                // data: response.data.results,
                filter: response.data.results,
                count: Math.ceil((response.data.count)/2)*10
            })
        })
        .catch(e=>console.log(e))
        // console.log(results)
    }

    componentDidMount=()=>{
        this.getData()
        this.getAllData()
    }

  render() {
      console.log(this.state)
    //   this.getSearchData(1)
    this.filterNames("web")
    const error=this.state.error.map((data)=>{
        return(
            <h2 style={{fontWeight: 300,fontSize: "48px",color: "#7c7c7c",padding: "180px 0px"}} >
                No Results Found
            </h2>
            )
    }
    )
    const renderCard=this.state.filter.map((data)=>{
            return(
            <BlogCard
                cover={data.cover}
                heading={data.technologies}
                subHeading={data.title}
                pic={data.author.profile_pic}
                content={data.content}
                author={data.author.username}
                date={data.publish}
                detailLink={data.detail}
            />
                )
        }
        )
    console.log(this.state.data)
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
                    <MediaQuery minWidth={768} >
                        <BlogImage />
                    </MediaQuery>
                    <MediaQuery maxWidth={768} >
                        <div>
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        style={{background: "#FF7171"}}
                        >
                            <Grid item xs={12}>
                                {/* <Grid item xs={12} style={{background: "#FF7171",height: "100vh"}} > */}
                                    <img src={blogText} alt="#" width="30%"
                                    style={{marginLeft: "50%",transform: "translateX(-50%)"}}
                                    />
                                {/* </Grid> */}
                            </Grid>
                        </Grid>
                        </div>
                    </MediaQuery>
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
                        {this.state.filter.length?renderCard:error}
                    </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Pagination width={this.state.count} getData={this.getData} setPage={this.setPage} />
                </Grid>
                {/* <P /> */}
            </Grid>
            <Footer />
        </div>
    );
  }
}

export default BlogApp;
