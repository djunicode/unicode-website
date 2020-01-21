import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Pagination from '../Pagination/Pagination';
import Flip from 'react-reveal/Flip';
import axios from 'axios';

class ProjSection extends Component {
    state = { 
        Gwidth: 1,
        projectsData: []
     }
    style={
        OutterItem:{
            padding: "5% 4%",
            paddingTop: '3%'
        },
        font:{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "400",
            fontSize: `${this.props.Gwidth>960?('2.5vw'):('7vw')}`,
            color: "#FFFFFF",
            lineHeight: "49px",
            textAlign: "left",
            borderBottom: "solid 1px white",
            paddingBottom: 6,
            paddingRight: 8,
            letterSpacing: "0.080em"
        }
    }
    getData=(p)=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${p||this.state.page}`)
        // /?limit=2&offset=${p*2-2}
        axios.get(`http://bagwesagar6699.pythonanywhere.com//api/projects/?limit=4&offset=0`)
        .then((response)=>{
            console.log(response.data.results)
            this.setState({
                projectsData: response.data.results
            })
        })
        .catch(e=>console.log(e))
    }
    componentDidMount=()=>{
        this.getData()
    }
    render() { 
        return ( 
            <Grid
            container
            direction="row"
            justify="center"
            >
                <Grid item xs={11} sm={11} md={12} lg={10} style={this.style.OutterItem} >
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    >
                        <Grid item style={{paddingBottom: 6}} >
                        <Flip left cascade delay={200} >
                            <span style={this.style.font}>PROJECTS</span>
                        </Flip>
                        </Grid>
                        <Grid item xs={12} style={{padding: "2%"}} >
                            
                        </Grid>
                        <Grid item xs={12}>
                            <Grid
                            container
                            direction="row"
                            justify="center"
                            >
                                <Pagination data={this.state.projectsData} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
         );
    }
}
 
export default ProjSection;