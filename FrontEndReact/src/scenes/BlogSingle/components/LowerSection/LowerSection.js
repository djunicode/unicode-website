import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import BlogCard from '../../../Blog/components/BlogCard/BlogCard';
import Responses from '../Responses/Responses';
import axios from 'axios';

class LowerSection extends Component {
    state = { 
        data:[]
     }
    styles={
        heading:{
            fontSize:24,
            padding: "6px 0px 14px 0px",
            fontFamily: "'Open Sans', sans-seri",
            fontWeight: 600,
            lineHeight: "33px",
            marginTop: "8%",
            textAlign: "center"
        }
    }
    getRelatedData=()=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        axios.get(`http://bagwesagar6699.pythonanywhere.com//api/posts/?limit=3`)
        .then((response)=>{
            var r=response.data.results.slice(0,4)
            var a=[]
            var m=0
            r.forEach(i=>{
                if(i.id!==this.props.id&&m<=1){
                    console.log(i.id)
                    console.log(this.props.id)
                    a[m]=i
                    m++
                }
            })
            console.log(response.data)
            this.setState({
                data: a,
                page: 1
            })
        })
        .catch(e=>console.log(e))
    }
    componentDidMount=()=>{
        this.getRelatedData()
    }
    componentDidUpdate=(prevProps,prevState)=>{
        if(prevProps!==this.props){
            this.getRelatedData()
        }
    }
    render() { 
        console.log(this.props)
        const renderCard=this.state.data.map((data)=>{
            return(
            <BlogCard
                type='single'
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
        return ( 
            <React.Fragment>
                <Grid
                container
                direction="row"
                justify="center"
                style={{marginBottom: "10%"}}
                >
                    <Grid item xs={12}>
                    <div style={this.styles.heading} >You might be interested in</div>
                    </Grid>
                    <Grid 
                    container 
                    direction="row" 
                    justify="center" 
                    spacing={24} 
                    style={{width: "100%",margin: 0}}
                    >
                       {renderCard}
                        <Grid item xs={9}>
                            <Responses id={this.props.id} title={this.props.title} link={this.props.link} res={this.props.res} />
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
         );
    }
}
 
export default LowerSection;