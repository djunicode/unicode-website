import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import BlogImage from './components/BlogImg/blogImg';
import Navbar from './components/NavBar/Navbar';
import SearchBar from './components/SearchBar/Searchbar';
import blogText from './components/BlogImg/images/blogText.png';
import BlogCard from './components/BlogCard/BlogCard';
import Pagination from '../../components/Pagination/Pagination';
import BottomNav from './components/BottomNav/BottomNav';
import EEImg from './sb.jpg';
import * as EEInfo from './ee';
import EE from '../ProjectSingle/components/Dialog/Dialog';
import Footer from '../../components/footer/footer';
import MediaQuery from 'react-responsive';
import axios from 'axios';

class BlogApp extends Component {
    state={
        open: false,
        error:[1],
        data: [],
        allData:[],
        filter: [],
        cards: [1,2,3,4,5,6,7,8],
        page: 1,
        category: "",
        count: 0
    }
    styles={
        innerGridNav:{
            marginTop:"4%"
        }
    }

    setPage=(p)=>{
        this.getData(p)
    }

    setCategory=(c)=>{
        if(c==="ALL"){
            // var f=this.filterNames("all")
            this.setState({category: c})
            this.getData()
        }
        else if(c==="WEB DESIGN"){
            // var f=this.filterNames("design")
            // console.log(f)
            this.setState({category: "design"})
            this.getData("design",1)
        }
        else if(c==="WEB DEVELOPMENT"){
            // var f=this.filterNames("web")
            // console.log(f)
            this.setState({category: "web"})
            this.getData("web",1)
        }
        else if(c==="APP DEVELOPMENT"){
            // var f=this.filterNames("app")
            this.setState({category: "app"})
            this.getData("app",1)
        }
    }

    getAllData=(p)=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        axios.get(`/api/posts/`)
        .then((response)=>{
            // console.log("Response: "+response.data)
            this.setState({
                allData: response.data.results
            })
        })
        .catch(e=>console.log(e))
    }

    getPagination=(p)=>{
        this.getData(this.state.category,p)
    }

    getData=(cat,p)=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        axios.get(`/api/posts/?limit=2&offset=${p*2-2}&tech=${cat?cat:""}`)
        .then((response)=>{
            console.log(response.data.count)
            this.setState({
                data: response.data.results,
                filter: response.data.results,
                page: p,
                count: Math.ceil((response.data.count)/2)*10
            })
        },err=>console.log(err))
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

    handleClose=()=>{
        this.setState({open:false})
    }

    copyToClipboard=()=>{
        var dummy = document.createElement("textarea")
        // to avoid breaking orgain page when copying more words
        // cant copy when adding below this code
        // dummy.style.display = 'none'
        document.body.appendChild(dummy)
        //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
        dummy.value = "https://www.flickr.com/photos/188632675@N04/shares/t7acbk"
        dummy.select()
        document.execCommand("copy")
        document.body.removeChild(dummy)
    }

    getSearchData=(text)=>{
        // var results=this.filterTitles(text)
        // this.setState({filter: results})
        if(text=='6699'){
            this.copyToClipboard()            
        }
        axios.get(`/api/posts/?s=${text}`)
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
        document.getElementById("6699").addEventListener('click',()=>{
            if(localStorage.getItem('countClick')){
                localStorage.setItem('countClick',parseInt(localStorage.getItem('countClick'))+1)
                if(parseInt(localStorage.getItem('countClick'))%7==0){
                    localStorage.setItem("UnicodeEasterEgg","https://www.flickr.com/photos/188632675@N04/shares/t7acbk")
                    // this.setState({open: true})
                }
            }
            else{
                localStorage.setItem('countClick',1)
            }
        })
    }
    // componentDidUpdate=(prevProps,prevState)=>{
    //     if(prevState.open)
    //     this.setState({open:false})
    // }
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
            <EE
            onClose={this.handleClose}
            open={this.state.open}
            data={this.state.dialogData} 
            name="Sagar Bagwe"
            text={EEInfo.info.text}
            gitHub="ABC"
            pic={0}
            eePic={EEImg}
            linkedIn="CBA"
            />
            <Grid
            container
            direction="row"
            justify="center"
            style={{background: "#F8F8F8"}}
            >
                {/* Shows redBackground AND image */}
                <Grid id="6699" item xs={12}>
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
                                    <img src="/static/frontend/df93e6888c2728363b230e54cbf669d1.png" alt="#" width="30%"
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
                <Grid item xs={10} md={11}>
                    <Grid container direction="row" alignItems='flex-start' justify="center" style={this.styles.innerGridNav} >
                        <MediaQuery minWidth={961} >
                            <Grid item xs={12} sm={10} md={12} lg={8} >
                            <Grid container direction="column" justify="center" >
                                <Grid item xs={12}>
                                    <Navbar setCategory={this.setCategory} />
                                </Grid>
                            </Grid>
                            </Grid>
                        </MediaQuery>
                        <Grid item xs={12} md={6} lg={4} >
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
                    <Pagination width={this.state.count} getData={this.getPagination} setPage={this.setPage} />
                </Grid>
                {/* <P /> */}
            </Grid>
            <Footer />
        </div>
    );
  }
}

export default BlogApp;
