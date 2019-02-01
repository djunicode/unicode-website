import React, { Component } from 'react';
import blog from './images/blogImg.png';
import blogText from './images/blogText.png';

class BlogImg extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{background: "#FF7171"}} >
                <img src={blogText} alt="#" width="30%"
                style={{marginLeft: "50%",transform: "translateX(-50%)"}}
                />
                <img src={blog} alt="BlogImage" width="23%" 
                style={{marginLeft: "50%",transform: "translateX(-50%)",marginBottom: "10%"}}
                />
            </div>
         );
    }
}
 
export default BlogImg;