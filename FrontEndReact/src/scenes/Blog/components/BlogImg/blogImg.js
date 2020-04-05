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
                        <img src="/static/frontend/df93e6888c2728363b230e54cbf669d1.png" alt="#" width="20%"
                        style={{marginLeft: "50%",transform: "translateX(-50%)"}}
                        />
                        <img src="/static/frontend/ff16c0bc909f1c00a88c6ddd9bc05524.png" alt="BlogImage" width="16%" 
                        style={{marginLeft: "50%",transform: "translateX(-50%)",marginBottom: "4%"}}
                        />
                    {/* </Grid> */}
                </Grid>
            </Grid>
         );
    }
}
 
export default BlogImg;