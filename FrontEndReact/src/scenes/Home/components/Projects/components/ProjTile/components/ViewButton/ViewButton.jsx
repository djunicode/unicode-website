import React, { Component } from 'react';

class ViewButton extends Component {
    state = { 
        link: ''
     }
    componentDidUpdate=(prevProps,prevState)=>{
        if(prevProps!==this.props){
            this.setState({link: this.props.link})
        }
    }
    createLink=(url)=>{
        if(url===''){
            return ''
        }
        var slug=url.split('/')
        return `/ProjectSingle/${slug[slug.length-1]}`
    }
    render() {
        return (
            <a style={{textDecoration: 'none'}} href={this.createLink(this.state.link)}>
                <div style={{color: 'white',padding: 8,border: "solid 2px white",borderRadius: 100,textAlign: "center"}} >
                    VIEW MORE
                </div>
            </a> 
         );
    }
}
 
export default ViewButton;