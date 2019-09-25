import React, { Component } from 'react';
import blog from './images/blogImg.png';
import blogText from './images/blogText.png';
import { Grid } from '@material-ui/core'

class BlogImg extends Component {
    state = {  }
    render() { 
        return ( 
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
                        <img src={blog} alt="BlogImage" width="23%" 
                        style={{marginLeft: "50%",transform: "translateX(-50%)",marginBottom: "10%"}}
                        />
                    {/* </Grid> */}
                </Grid>
            </Grid>
         );
    }
}
 
export default BlogImg;