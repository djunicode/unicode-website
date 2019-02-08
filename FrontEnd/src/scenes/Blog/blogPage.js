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

class BlogApp extends Component {
    state={
        cards:[1,2,3,4,5,6,7,8]
    }
    styles={
        innerGridNav:{
            marginTop:"10%"
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
                        <BottomNav />
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
                        {this.state.cards.map((cards)=><BlogCard heading="WEB DESIGN" subHeading="What makes a great landing page?" content="Explore the design process behind some great landing page examples..." author="Jon Snow" date="Jun 6, 1999"/>)}
                    </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Pagination />
                </Grid>
                {/* <P /> */}
            </Grid>
            <Footer />
        </div>
    );
  }
}

export default BlogApp;
