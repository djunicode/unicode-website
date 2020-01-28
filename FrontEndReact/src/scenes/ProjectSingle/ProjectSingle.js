import React, { Component } from 'react';
import ProjectName from './components/ProjectName/ProjectName';
import MainCard from './components/MainCard/MainCard';
import MainCardSmall from './components/MainCardSmall/MainCardSmall';
import Mentors from './components/Mentors/Mentors';
import Mentees from './components/Mentees/Mentees';
import Footer from '../../components/footer/footer';
import axios from 'axios';
import MediaQuery from 'react-responsive';

import { Grid } from '@material-ui/core';


class ProjectSingle extends Component {
    state={
        data: []
    }
    styles={
        background:{
          background: "#F8F8F8"
        },
        teamName:{
            textAlign:"center",
            color:"#445DFF",
            fontSize: 42,
            marginTop: 91.34
        }
        // image: {
        //     padding: "0px 0px 0px 0px"
        // }

      }
      getData=(p)=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        axios.get(`/api/projects/${this.getSlug(this.props.location.pathname)}`)
        .then((response)=>{
            console.log(response.data)
            this.setState({
                data: response.data,
                page: p
            })
        })
        .catch(e=>console.log(e))
    }
      getSlug=(url)=>{
        if(url){
        var slug =url.split("/")
        slug=slug[slug.length-1]
        console.log(slug)
        return slug
        }
        else{
            return ""
        }
    }
    componentDidMount=()=>{
        this.getData()
    }
    render() {
        console.log(this.state)
        return (
            <div style={this.styles.background}>
                <Grid
                container
                alignItems="center"
                direcion="row"
                justify="center"
                
                >
                <Grid item xs={12}>
                <ProjectName
                title={this.state.data?this.state.data.title:""}
                link={this.state.data?this.state.data.repo_link:""}
                />
                </Grid>
                <MediaQuery minWidth={768} >
                    <Grid item xs={8}>
                        <MainCard
                        // img1={this.state.data?this.state.data.:""}
                        cover={this.state.data?this.state.data.cover:""}
                        text={this.state.data?this.state.data.description:""}
                        date={this.state.data?this.state.data.year:""}
                        tech={this.state.data?this.state.data.technology:""}
                        stack={this.state.data?this.state.data.stack:""}
                        img1={this.state.data?this.state.data.img1:""}
                        img2={this.state.data?this.state.data.img2:""}
                        img3={this.state.data?this.state.data.img3:""}
                        img4={this.state.data?this.state.data.img4:""}
                        img5={this.state.data?this.state.data.img5:""}
                        />
                    </Grid>
                </MediaQuery>
                <MediaQuery maxWidth={768} >
                    <Grid item xs={11}>
                        <MainCardSmall
                        // img1={this.state.data?this.state.data.:""}
                        cover={this.state.data?this.state.data.cover:""}
                        text={this.state.data?this.state.data.description:""}
                        date={this.state.data?this.state.data.year:""}
                        tech={this.state.data?this.state.data.technology:""}
                        stack={this.state.data?this.state.data.stack:""}
                        img1={this.state.data?this.state.data.img1:""}
                        img2={this.state.data?this.state.data.img2:""}
                        img3={this.state.data?this.state.data.img3:""}
                        img4={this.state.data?this.state.data.img4:""}
                        img5={this.state.data?this.state.data.img5:""}
                        />
                    </Grid>
                </MediaQuery>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12} sm={2} md={1} lg={1} xl={1} style={this.styles.teamName} className="openSans-26-600">
                    Team
                </Grid>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <Mentors fe={this.state.data.members?this.state.data.members.fourth_year:""} te={this.state.data.members?this.state.data.members.third_year:""} />
                </Grid>
                
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12}>
                    <Mentees se={this.state.data.members?this.state.data.members.second_year:""} />
                </Grid>
                <Footer />
                </Grid>
            </div>
        )
    }
}
export default ProjectSingle;
