import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import BlogImage from './components/BlogImg/blogImg';
import Navbar from './components/NavBar/Navbar';
import SearchBar from './components/SearchBar/Searchbar';
import BlogCard from './components/BlogCard/BlogCard';
import P from './components/Pagination/Pagination';
import Bn from './components/BottomNav/BottomNav';
import Footer from '../../components/footer/footer';
import MediaQuery from 'react-responsive';

class BlogApp extends Component {
    state={
        cards:[1,2,3,4,5,6,7,8]
    }
    styles={
        innerGridNav:{
            marginTop:"130px"
        }
    }

  render() {
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
                        <Bn />
                    </MediaQuery>
                </Grid>


                {/* Shows navBar */}
                <Grid item xs={10}>
                    <Grid container direction="row" justify="center" style={this.styles.innerGridNav} >
                        <MediaQuery minWidth={961} >
                            <Grid item xs={12} sm={10} md={9} lg={7} >
                                <Navbar />
                            </Grid>
                        </MediaQuery>
                        <Grid item xs={10} md={9} lg={5} >
                            <SearchBar />
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
                    <Grid item xs={8} >
                    <Grid 
                    container 
                    direction="row" 
                    justify="center" 
                    spacing={24} 
                    style={{width: "100%",margin: 0}}
                    >
                        {this.state.cards.map((cards)=><BlogCard/>)}
                    </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <P />
                </Grid>
                {/* <P /> */}
            </Grid>
            <Footer />
        </div>
    );
  }
}

export default BlogApp;
